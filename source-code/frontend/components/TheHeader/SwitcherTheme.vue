<script setup lang="ts">
  import { Moon } from 'lucide-vue-next'
  import { useDark, useToggle } from '@vueuse/core'
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center"
    @click="toggleDark()"
  >
    <moon />
  </button>
</template>

<style scoped></style>
