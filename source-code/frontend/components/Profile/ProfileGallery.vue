<script setup lang="ts">
  import { NAlert, NCarousel, NCarouselItem, NGradientText, NModal } from 'naive-ui'
  import { GalleryCard } from '#components'
  import type { IPhoto } from '~/services/models'
  import { ref } from 'vue'

  interface IProps {
    gallery: IPhoto[]
    isDeletable?: boolean
  }
  const props = withDefaults(defineProps<IProps>(), {
    isDeletable: false
  })

  const bodyStyle = ref({
    width: '600px'
  })
  const showModal = ref(false)
  const carouselRef = ref(null)
  const handleGalleryModal = (): void => {
    showModal.value = true
  }
  const emits = defineEmits<{
    (e: 'delete', id: number): void
  }>()

  const deletePhotoById = id => {
    emits('delete', id || 0)
  }
</script>

<template>
  <div
    class="bg-gray-50/60 rounded-xl overflow-hidden sm:shadow-lg px-2 sm:px-4 md:px-8 py-6 sm:py-12 gallery-wrap"
  >
    <n-gradient-text :size="24" type="success">
      <div class="font-extrabold text-2xl sm:text-3xl mb-6">Галерея</div>
    </n-gradient-text>
    <div
      v-if="gallery.length"
      class="gap-4 sm:gap-4 md:gap-8 columns-1 min-[500px]:columns-2 md:columns-3"
    >
      <gallery-card
        v-for="(photoItem, index) in gallery"
        :key="index"
        :is-deletable="isDeletable"
        :item="photoItem"
        @click="handleGalleryModal()"
        @delete="deletePhotoById($event)"
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

<style lang="scss">
  .gallery {
    & .n-card-header {
      display: flex !important;
      flex-direction: row-reverse !important;
    }
    & .n-carousel__dots {
      @apply bg-gray-700 p-2 rounded-lg;
    }
  }
</style>
