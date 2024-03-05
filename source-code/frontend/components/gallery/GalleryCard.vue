<script setup lang="ts">
  import type { IPhoto } from '~/services/models'

  interface IProps {
    item: IPhoto
  }
  const props = defineProps<IProps>()
</script>

<template>
  <div class="overflow-hidden rounded-[4px] w-full">
    <img
      :src="item.photo"
      :alt="item.description || 'gallery photo'"
      class="w-full h-full object-cover"
    />
  </div>
</template>

<style scoped></style>
