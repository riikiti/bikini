<script setup lang="ts">
  import { ChevronDown } from 'lucide-vue-next'
  import AuthRegister from '~/components/login/AuthRegister.vue'
  import AuthResetPassword from '~/components/login/AuthResetPassword.vue'
  import AuthLogin from '~/components/login/AuthLogin.vue'
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
      <h1 class="text-[82px] text-white font-extrabold">BIKINI STAR</h1>
      <div class="max-w-[800px] mx-auto mt-6">
        <div class="text-[42px] font-extrabold text-white">ИНТЕРНАЦИОНАЛЬНЫЙ Конкурс</div>
        <div class="text-[42px] font-extrabold text-white">сетевой проект, объединяющий</div>
        <div class="text-[42px] font-extrabold text-white">любителей фотографии</div>
      </div>
      <div
        class="text-white absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="animate-bounce">
          <ChevronDown :size="48" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center py-16">
    <auth-login class="max-w-[360px]" />
    <!--    <auth-register class="max-w-[360px]" />-->
    <!--    <auth-reset-password class="max-w-[360px]" />-->
  </div>
</template>

<style scoped></style>
