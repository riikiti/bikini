<script setup lang="ts">
  import { Moon } from 'lucide-vue-next'
  import { useDark, useToggle } from '@vueuse/core'
  import { NButton } from 'naive-ui'
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <n-button quaternary @click="toggleDark()">
    <moon />
  </n-button>
</template>
