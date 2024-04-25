<script setup lang="ts">
  import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <div class="h-screen relative">
    <img
      src="/assets/images/login/woman.webp"
      alt="Woman"
      width="1680"
      height="1246"
      class="absolute top-0 left-0 w-full h-screen object-cover -z-[5] brightness-75"
    />
    <div class="max-w-[1368px] mx-auto px-2 sm:px-4 h-screen flex flex-col justify-center">
      <h1 class="text-5xl text-center sm:text-left sm:text-[82px] text-white font-extrabold">
        BIKINI STAR
      </h1>
      <div class="max-w-[800px] mx-auto mt-12 sm:mt-20">
        <div class="text-2xl sm:text-[42px] font-extrabold text-white">
          ИНТЕРНАЦИОНАЛЬНЫЙ Конкурс
        </div>
        <div class="text-2xl sm:text-[42px] font-extrabold text-white sm:mt-4">
          сетевой проект, объединяющий
        </div>
        <div class="text-2xl sm:text-[42px] font-extrabold text-white sm:mt-4">
          любителей фотографии
        </div>
      </div>
      <div
        class="text-white absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <nuxt-link to="#auth" class="text-white">
          <div class="animate-bounce">
            <ChevronDown :size="48" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
