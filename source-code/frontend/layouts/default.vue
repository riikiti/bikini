<script setup lang="ts">
  import { TheFooter } from '#components'
</script>

<template>
  <div class="h-full">
    <slot />
  </div>
  <div class="px-2 sm:px-4 h-max">
    <div class="max-w-[1368px] mx-auto h-full">
      <the-footer />
    </div>
  </div>
</template>

<style scoped></style>
