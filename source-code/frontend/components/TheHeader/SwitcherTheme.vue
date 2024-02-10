<script setup lang="ts">
  import { Moon } from 'lucide-vue-next'
  import { useDark, useToggle } from '@vueuse/core'
  import GhostButton from '~/components/TheHeader/GhostButton.vue'
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <ghost-button @click="toggleDark()">
    <moon />
  </ghost-button>
</template>

<style scoped></style>
