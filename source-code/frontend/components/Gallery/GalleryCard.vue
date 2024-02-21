<script setup lang="ts">
  import type { IPhoto } from '~/services/models'

  interface IProps {
    item: IPhoto
  }
  const props = defineProps<IProps>()
</script>

<template>
  <div class="overflow-hidden rounded-lg">
    <img :src="item.photo" :alt="item.description || 'Gallery photo'" />
  </div>
</template>

<style scoped></style>
