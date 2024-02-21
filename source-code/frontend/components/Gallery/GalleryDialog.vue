<script setup lang="ts">
  import { Dialog, DialogTrigger, DialogContent } from '~/components/ui/dialog'
  import type { IPhoto } from '~/services/models'
  import { ref } from 'vue'

  interface IProps {
    photos: IPhoto[]
  }
  defineProps<IProps>()
  const thumbsSwiper = ref(null)
  const setThumbsSwiper = swiper => {
    thumbsSwiper.value = swiper
  }
</script>

<template>
  <Dialog>
    <dialog-trigger />
    <dialog-content
      class="max-w-[600px] relative max-h-[900px] overflow-hidden bg-transparent border-none"
    >
      <Swiper
        :modules="[SwiperThumbs]"
        :slides-per-view="1"
        :loop="true"
        :thumbs="{ swiper: thumbsSwiper }"
        class="w-[600px] h-[600px]"
      >
        <swiper-slide v-for="(photoItem, index) in photos" :key="index" class="w-full h-full">
          <img :src="photoItem.photo" alt="Image" class="w-full" />
        </swiper-slide>
      </Swiper>
      <swiper
        :loop="true"
        :slides-per-view="4"
        :watch-slides-progress="true"
        class="w-[600px] h-[300px]"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide v-for="(photoItem, index) in photos" :key="index" class="w-full h-full">
          <img :src="photoItem.photo" alt="Image" class="w-full" />
        </swiper-slide>
      </swiper>
    </dialog-content>
  </Dialog>
</template>

<style scoped></style>
