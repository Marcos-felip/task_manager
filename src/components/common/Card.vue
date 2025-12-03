<template>
  <div :class="[
    'rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]',
    className,
  ]">
    <!-- Card Header -->
    <div class="px-6 py-5">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
          {{ title }}
        </h3>
        <Button v-if="buttonText" variant="primary" size="sm">
          {{ buttonText }}
        </Button>
      </div>
    </div>

    <!-- Card Body -->
    <div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
      <div class="space-y-5">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Button from '../ui/Button.vue'

interface Props {
  title: string
  buttonText?: string
  className?: string
}

defineProps<Props>()
</script>
