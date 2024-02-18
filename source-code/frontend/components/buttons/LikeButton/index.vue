<script setup lang="ts">
  import { cn } from '~/lib/utils'
  interface IProps {
    hoverColor?: string
    defaultColor?: string
    activeColor?: string
  }
  withDefaults(defineProps<IProps>(), {
    hoverColor: 'text-red-600',
    defaultColor: 'text-white',
    activeColor: ''
  })
</script>

<template>
  <div
    :class="
      cn(
        'w-8 h-8 cursor-pointer transition-all flex items-center',
        defaultColor,
        activeColor,
        `hover:${hoverColor}`
      )
    "
  >
    <slot />
  </div>
</template>

<style scoped></style>
