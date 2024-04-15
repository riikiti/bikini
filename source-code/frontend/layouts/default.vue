<script setup lang="ts">
  import { TheFooter } from '#components'
</script>

<template>
  <div class="flex flex-col">
    <div class="h-full">
      <slot />
    </div>
    <div class="px-2 sm:px-4 h-max mt-8">
      <div class="mx-auto h-full">
        <the-footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
