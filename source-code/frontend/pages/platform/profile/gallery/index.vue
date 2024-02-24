<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { ref, type Ref, onMounted } from 'vue'
  import type { IPhoto } from '~/services/models'
  import Galleria from 'primevue/galleria'
  import { SendHorizontal } from 'lucide-vue-next'
  import { Button } from '~/components/ui/button'
  import AppDropzone from '~/components/app/AppDropzone/AppDropzone.vue'

  definePageMeta({
    layout: 'profile-layout',
    key: 'gallery',
    middleware: 'profile'
  })

  const photos: Ref<IPhoto[]> = ref([])
  const fetchPhotos = async () => {
    fetch('/mock/mock-model-photos.json')
      .then(response => response.json())
      .then(data => {
        photos.value = data.photos as IPhoto[]
      })
  }

  onMounted(() => {
    fetchPhotos()
  })

  const activeIndex = ref(0)
  const responsiveOptions = ref([
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ])
  const displayCustom = ref(false)

  const imageClick = index => {
    activeIndex.value = index
    displayCustom.value = true
  }
</script>

<template>
  <div class="mb-6 p-8 bg-white">Активный конкурс</div>

  <div class="mb-6">
    <div class="px-8 pt-8 shadow-sm rounded-xl bg-white dark:bg-muted flex gap-8">
      <app-dropzone class="w-full" />
      <Button class="rounded-xl">
        <send-horizontal :size="20" />
      </Button>
    </div>
  </div>
  <div>
    <div class="px-8 pt-8 pb-4 shadow-sm rounded-xl bg-white dark:bg-muted">
      <div v-if="photos.length" class="grid grid-cols-3 gap-8">
        <!--     //todo if fetching show skeleton loader              -->
        <div v-for="(photoItem, index) in photos" :key="index">
          <gallery-card :item="photoItem" @click="imageClick(index)" />
        </div>
        <Galleria
          v-model:activeIndex="activeIndex"
          v-model:visible="displayCustom"
          :value="photos"
          :responsive-options="responsiveOptions"
          :num-visible="7"
          mask-class="fixed top-0 left-0 bg-black/90 text-white flex items-center justify-center w-full h-full"
          container-style="max-width: 850px"
          :circular="true"
          :full-screen="true"
          :show-item-navigators="true"
          :show-thumbnails="true"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.photo"
              :alt="slotProps.item.description"
              style="width: 100%; display: block"
            />
          </template>
          <template #thumbnail="slotProps">
            <img
              :src="slotProps.item.photo"
              :alt="slotProps.item.description"
              style="display: block"
            />
          </template>
        </Galleria>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
