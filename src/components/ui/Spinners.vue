<template>
  <div :class="[
    'inline-flex items-center justify-center',
    sizeClasses[size],
    colorClasses[color],
    className,
  ]">
    <svg :width="svgSize" :height="svgSize" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="animate-spin">
      <circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="4"></circle>
      <mask id="path-2-inside-1_3755_26214" fill="white">
        <path
          d="M46.0051 24C47.1068 24 48.0086 23.1053 47.9172 22.0073C47.5452 17.5426 45.9291 13.2565 43.2335 9.64482C40.139 5.4986 35.7874 2.4634 30.8274 0.991599C25.8674 -0.480201 20.5646 -0.309788 15.7094 1.47744C11.4802 3.03423 7.78776 5.74518 5.04079 9.28438C4.36525 10.1547 4.63305 11.3965 5.55649 11.9975C6.47993 12.5984 7.70826 12.3295 8.39813 11.4705C10.6656 8.64692 13.6659 6.48122 17.0877 5.22166C21.1357 3.73155 25.557 3.58947 29.6924 4.81659C33.8278 6.04371 37.456 8.57434 40.0361 12.0313C42.217 14.9533 43.5504 18.405 43.9108 22.0083C44.0205 23.1046 44.9033 24 46.0051 24Z">
        </path>
      </mask>
      <path
        d="M46.0051 24C47.1068 24 48.0086 23.1053 47.9172 22.0073C47.5452 17.5426 45.9291 13.2565 43.2335 9.64482C40.139 5.4986 35.7874 2.4634 30.8274 0.991599C25.8674 -0.480201 20.5646 -0.309788 15.7094 1.47744C11.4802 3.03423 7.78776 5.74518 5.04079 9.28438C4.36525 10.1547 4.63305 11.3965 5.55649 11.9975C6.47993 12.5984 7.70826 12.3295 8.39813 11.4705C10.6656 8.64692 13.6659 6.48122 17.0877 5.22166C21.1357 3.73155 25.557 3.58947 29.6924 4.81659C33.8278 6.04371 37.456 8.57434 40.0361 12.0313C42.217 14.9533 43.5504 18.405 43.9108 22.0083C44.0205 23.1046 44.9033 24 46.0051 24Z"
        stroke="currentColor" stroke-width="8" mask="url(#path-2-inside-1_3755_26214)"></path>
    </svg>
  </div>
</template>

<script setup lang="ts" name="LoadingSpinner">
import { computed } from 'vue'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'gray' | 'white'
  className?: string
}

const props = withDefaults(defineProps<SpinnerProps>(), {
  size: 'md',
  color: 'primary',
  className: '',
})

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
}

const colorClasses = {
  primary: 'text-brand-500',
  gray: 'text-gray-500 dark:text-gray-400',
  white: 'text-white',
}

const svgSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 16
    case 'md':
      return 24
    case 'lg':
      return 32
    default:
      return 24
  }
})
</script>

<style scoped></style>
