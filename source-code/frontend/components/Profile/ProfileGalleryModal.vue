<script setup lang="ts">
  import { GalleryCard } from '#components'
  import { NCarousel, NCarouselItem, NModal } from 'naive-ui'
  import type { IPhoto } from '~/services/models'
  import { ref } from 'vue'

  const bodyStyle = ref({
    width: '600px'
  })

  const props = defineProps<{ show: boolean; gallery: IPhoto[] }>()

  function goToSlide(index) {
    carouselRef.value.to(index)
  }
  const showModal = ref(false)
  const carouselRef = ref(null)
  const handleGalleryModal = (): void => {
    showModal.value = true
    goToSlide(2)
  }
  onMounted(() => {
    goToSlide(2)
  })
</script>

<template>
  <n-modal
    v-model:show="show"
    :style="bodyStyle"
    :bordered="false"
    size="huge"
    preset="card"
    :content-style="{ padding: 0 }"
    :header-style="{ paddingInline: 0 }"
    class="px-2 gallery"
  >
    <n-carousel
      ref="carouselRef"
      direction="vertical"
      dot-placement="right"
      mousewheel
      style="width: 100%; height: 600px"
    >
      <n-carousel-item
        v-for="(photoItem, index) in gallery"
        :key="index"
        style="width: 100%; height: 100%"
      >
        <gallery-card :item="photoItem" class="h-full" />
      </n-carousel-item>
    </n-carousel>
  </n-modal>
</template>

<style scoped></style>
