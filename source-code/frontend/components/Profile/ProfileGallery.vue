<script setup lang="ts">
  import { NAlert, NCarousel, NCarouselItem, NGradientText, NModal } from 'naive-ui'
  import { GalleryCard } from '#components'
  import type { IPhoto } from '~/services/models'
  import { ref } from 'vue'

  interface IProps {
    gallery: IPhoto[]
  }
  const props = defineProps<IProps>()

  const bodyStyle = ref({
    width: '600px'
  })
  const showModal = ref(false)
  const carouselRef = ref(null)
  const handleGalleryModal = (): void => {
    showModal.value = true
  }
</script>

<template>
  <div
    class="bg-gray-50/60 rounded-xl overflow-hidden sm:shadow-lg px-2 sm:px-4 md:px-8 py-6 sm:py-12"
  >
    <n-gradient-text :size="24" type="success">
      <div class="font-extrabold text-2xl sm:text-3xl mb-6">Галерея</div>
    </n-gradient-text>
    <div v-if="gallery.length" class="gap-4 sm:gap-8 columns-2 sm:columns-3">
      <gallery-card
        v-for="(photoItem, index) in gallery"
        :key="index"
        :item="photoItem"
        :class="[
          { 'sm:aspect-video': index === 0 || index === 4 || index === 5 || index === 7 },
          {
            'sm:aspect-square':
              index === 1 || index === 2 || index === 3 || index === 6 || index === 8
          },
          'mb-6'
        ]"
        @click="handleGalleryModal()"
      />
      <n-modal
        v-model:show="showModal"
        :style="bodyStyle"
        :bordered="false"
        size="huge"
        preset="card"
        class="px-2 gallery"
      >
        <n-carousel
          ref="carouselRef"
          direction="vertical"
          dot-placement="right"
          mousewheel
          style="width: 100%; height: 800px"
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
    </div>
    <div v-else>
      <n-alert title="Совет" type="info" closable>
        Пользователь пока не загрузил фотографии!
      </n-alert>
    </div>
  </div>
</template>

<style scoped lang="scss">
  ::v-deep {
    & .n-card__content {
      padding: 0 !important;
    }
  }
</style>
