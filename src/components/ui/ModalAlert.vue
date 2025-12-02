<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center overflow-y-auto z-99999">
      <div class="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px]" aria-hidden="true" @click="close">
      </div>
      <div class="relative w-full max-w-[600px] rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-10">
        <div class="text-center">
          <div class="relative flex items-center justify-center z-1 mb-7">
            <svg :class="iconBgClass" width="90" height="90" viewBox="0 0 90 90" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.364 6.85053C38.6205 -2.28351 51.3795 -2.28351 55.636 6.85053C58.0129 11.951 63.5594 14.6722 68.9556 13.3853C78.6192 11.0807 86.5743 21.2433 82.2185 30.3287C79.7862 35.402 81.1561 41.5165 85.5082 45.0122C93.3019 51.2725 90.4628 63.9451 80.7747 66.1403C75.3648 67.3661 71.5265 72.2695 71.5572 77.9156C71.6123 88.0265 60.1169 93.6664 52.3918 87.3184C48.0781 83.7737 41.9219 83.7737 37.6082 87.3184C29.8831 93.6664 18.3877 88.0266 18.4428 77.9156C18.4735 72.2695 14.6352 67.3661 9.22531 66.1403C-0.462787 63.9451 -3.30193 51.2725 4.49185 45.0122C8.84391 41.5165 10.2138 35.402 7.78151 30.3287C3.42572 21.2433 11.3808 11.0807 21.0444 13.3853C26.4406 14.6722 31.9871 11.951 34.364 6.85053Z"
                fill="" fill-opacity=""></path>
            </svg>
            <span class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <!-- Error Icon -->
              <svg v-if="variant === 'error'" :class="iconClass" width="38" height="38" viewBox="0 0 38 38" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.62684 11.7496C9.04105 11.1638 9.04105 10.2141 9.62684 9.6283C10.2126 9.04252 11.1624 9.04252 11.7482 9.6283L18.9985 16.8786L26.2485 9.62851C26.8343 9.04273 27.7841 9.04273 28.3699 9.62851C28.9556 10.2143 28.9556 11.164 28.3699 11.7498L21.1198 18.9999L28.3699 26.25C28.9556 26.8358 28.9556 27.7855 28.3699 28.3713C27.7841 28.9571 26.8343 28.9571 26.2485 28.3713L18.9985 21.1212L11.7482 28.3715C11.1624 28.9573 10.2126 28.9573 9.62684 28.3715C9.04105 27.7857 9.04105 26.836 9.62684 26.2502L16.8771 18.9999L9.62684 11.7496Z"
                  fill="currentColor"></path>
              </svg>
              <!-- Warning Icon -->
              <svg v-if="variant === 'warning'" :class="iconClass" width="38" height="38" viewBox="0 0 38 38"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19 10.5C19.5523 10.5 20 10.9477 20 11.5V21.5C20 22.0523 19.5523 22.5 19 22.5C18.4477 22.5 18 22.0523 18 21.5V11.5C18 10.9477 18.4477 10.5 19 10.5Z"
                  fill="currentColor"></path>
                <path
                  d="M19 26.5C18.4477 26.5 18 26.9477 18 27.5C18 28.0523 18.4477 28.5 19 28.5C19.5523 28.5 20 28.0523 20 27.5C20 26.9477 19.5523 26.5 19 26.5Z"
                  fill="currentColor"></path>
              </svg>
              <!-- Info Icon -->
              <svg v-if="variant === 'info'" :class="iconClass" width="38" height="38" viewBox="0 0 38 38" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19 10.5C19.5523 10.5 20 10.9477 20 11.5V21.5C20 22.0523 19.5523 22.5 19 22.5C18.4477 22.5 18 22.0523 18 21.5V11.5C18 10.9477 18.4477 10.5 19 10.5Z"
                  fill="currentColor"></path>
                <path
                  d="M19 26.5C18.4477 26.5 18 26.9477 18 27.5C18 28.0523 18.4477 28.5 19 28.5C19.5523 28.5 20 28.0523 20 27.5C20 26.9477 19.5523 26.5 19 26.5Z"
                  fill="currentColor"></path>
              </svg>
              <!-- Success Icon -->
              <svg v-if="variant === 'success'" :class="iconClass" width="38" height="38" viewBox="0 0 38 38"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M28.7071 12.2929C29.0976 12.6834 29.0976 13.3166 28.7071 13.7071L16.7071 25.7071C16.3166 26.0976 15.6834 26.0976 15.2929 25.7071L9.29289 19.7071C8.90237 19.3166 8.90237 18.6834 9.29289 18.2929C9.68342 17.9024 10.3166 17.9024 10.7071 18.2929L16 23.5858L27.2929 12.2929C27.6834 11.9024 28.3166 11.9024 28.7071 12.2929Z"
                  fill="currentColor"></path>
              </svg>
            </span>
          </div>
          <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            {{ title }}
          </h4>
          <p class="text-sm leading-6 text-gray-500 dark:text-gray-400">
            {{ message }}
          </p>
          <div class="flex items-center justify-center w-full gap-3 mt-7">
            <button type="button" :class="buttonClass" @click="confirm">
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts" name="ModalAlert">
import { computed } from 'vue'

interface ModalAlertProps {
  isOpen: boolean
  variant?: 'error' | 'warning' | 'info' | 'success'
  title: string
  message: string
  buttonText?: string
}

const props = withDefaults(defineProps<ModalAlertProps>(), {
  variant: 'error',
  buttonText: 'Okay, Got It',
})

const emit = defineEmits<{
  close: []
  confirm: []
}>()

const close = () => {
  emit('close')
}

const confirm = () => {
  emit('confirm')
}

const iconBgClass = computed(() => {
  switch (props.variant) {
    case 'error':
      return 'fill-red-50 dark:fill-red-500/15'
    case 'warning':
      return 'fill-orange-50 dark:fill-orange-500/15'
    case 'info':
      return 'fill-blue-50 dark:fill-blue-500/15'
    case 'success':
      return 'fill-success-50 dark:fill-success-500/15'
    default:
      return 'fill-red-50 dark:fill-red-500/15'
  }
})

const iconClass = computed(() => {
  switch (props.variant) {
    case 'error':
      return 'fill-red-600 dark:fill-red-500'
    case 'warning':
      return 'fill-orange-600 dark:fill-orange-500'
    case 'info':
      return 'fill-blue-600 dark:fill-blue-500'
    case 'success':
      return 'fill-success-600 dark:fill-success-500'
    default:
      return 'fill-red-600 dark:fill-red-500'
  }
})

const buttonClass = computed(() => {
  const base = 'flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg shadow-theme-xs hover:opacity-90 sm:w-auto'
  switch (props.variant) {
    case 'error':
      return `${base} bg-error-500 hover:bg-error-600`
    case 'warning':
      return `${base} bg-orange-500 hover:bg-orange-600`
    case 'info':
      return `${base} bg-blue-500 hover:bg-blue-600`
    case 'success':
      return `${base} bg-success-500 hover:bg-success-600`
    default:
      return `${base} bg-red-500 hover:bg-red-600`
  }
})
</script>

<style scoped></style>
