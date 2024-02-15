<script setup lang="ts">
  import { cn } from '~/lib/utils'
  interface IProps {
    hoverColor?: string
    defaultColor?: string
  }
  withDefaults(defineProps<IProps>(), {
    hoverColor: 'text-red-600',
    defaultColor: 'text-white'
  })
</script>

<template>
  <div :class="['w-8 h-8 cursor-pointer transition-all hover:text-red-600', defaultColor]">
    <slot />
  </div>
</template>

<style scoped></style>
