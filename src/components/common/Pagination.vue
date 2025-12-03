<template>
  <div class="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
    <div class="flex items-center justify-between">
      <Button variant="outline" size="sm" :disabled="currentPage <= 1" :onClick="goToPrevious" :startIcon="PreviousIcon"
        className="sm:px-3.5">
        <span class="hidden sm:inline">Anterior</span>
      </Button>

      <span class="block text-sm font-medium text-gray-700 sm:hidden dark:text-gray-400">
        Página {{ currentPage }} de {{ totalPages }}
      </span>

      <ul class="hidden items-center gap-0.5 sm:flex">
        <li v-for="page in visiblePages" :key="page">
          <Button v-if="page !== '...'" :variant="page === currentPage ? 'primary' : 'outline'" size="sm"
            :onClick="() => goToPage(page)"
            :className="page === currentPage
              ? 'bg-brand-500/[0.08] text-brand-500 hover:bg-brand-500/[0.08] hover:text-brand-500 dark:text-brand-500 dark:hover:text-brand-500 h-10 w-10 p-0'
              : 'hover:bg-brand-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500 text-gray-700 dark:text-gray-400 h-10 w-10 p-0 bg-transparent border-none'">
            {{ page }}
          </Button>
          <span v-else
            class="text-theme-sm hover:bg-brand-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500 flex h-10 w-10 items-center justify-center rounded-lg font-medium text-gray-700 dark:text-gray-400">
            ...
          </span>
        </li>
      </ul>

      <Button variant="outline" size="sm" :disabled="currentPage >= totalPages" :onClick="goToNext" :endIcon="NextIcon"
        className="sm:px-3.5">
        <span class="hidden sm:inline">Próximo</span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import Button from '../ui/Button.vue'

interface PaginationProps {
  currentPage: number
  totalPages: number
  maxVisiblePages?: number
}

const props = withDefaults(defineProps<PaginationProps>(), {
  maxVisiblePages: 7,
})

const emit = defineEmits<{
  'page-change': [page: number]
}>()

const PreviousIcon = () => h('svg', {
  class: 'fill-current',
  width: '20',
  height: '20',
  viewBox: '0 0 20 20',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}, [
  h('path', {
    'fill-rule': 'evenodd',
    'clip-rule': 'evenodd',
    d: 'M2.58301 9.99868C2.58272 10.1909 2.65588 10.3833 2.80249 10.53L7.79915 15.5301C8.09194 15.8231 8.56682 15.8233 8.85981 15.5305C9.15281 15.2377 9.15297 14.7629 8.86018 14.4699L5.14009 10.7472L16.6675 10.7472C17.0817 10.7472 17.4175 10.4114 17.4175 9.99715C17.4175 9.58294 17.0817 9.24715 16.6675 9.24715L5.14554 9.24715L8.86017 5.53016C9.15297 5.23717 9.15282 4.7623 8.85983 4.4695C8.56684 4.1767 8.09197 4.17685 7.79917 4.46984L2.84167 9.43049C2.68321 9.568 2.58301 9.77087 2.58301 9.99715C2.58301 9.99766 2.58301 9.99817 2.58301 9.99868Z',
    fill: 'currentColor'
  })
])

const NextIcon = () => h('svg', {
  class: 'fill-current',
  width: '20',
  height: '20',
  viewBox: '0 0 20 20',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}, [
  h('path', {
    'fill-rule': 'evenodd',
    'clip-rule': 'evenodd',
    d: 'M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z',
    fill: 'currentColor'
  })
])

const visiblePages = computed(() => {
  const { currentPage, totalPages, maxVisiblePages } = props
  const pages: (number | string)[] = []

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    const halfVisible = Math.floor(maxVisiblePages / 2)

    if (currentPage <= halfVisible + 1) {
      for (let i = 1; i <= maxVisiblePages - 2; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPages)
    } else if (currentPage >= totalPages - halfVisible) {
      pages.push(1)
      pages.push('...')
      for (let i = totalPages - (maxVisiblePages - 3); i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPages)
    }
  }

  return pages
})

const goToPage = (page: number | string) => {
  if (typeof page === 'number' && page !== props.currentPage) {
    emit('page-change', page)
  }
}

const goToPrevious = () => {
  if (props.currentPage > 1) {
    emit('page-change', props.currentPage - 1)
  }
}

const goToNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-change', props.currentPage + 1)
  }
}
</script>

<style scoped></style>
