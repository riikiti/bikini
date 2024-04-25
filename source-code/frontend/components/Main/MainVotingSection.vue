<script setup lang="ts">
  import { NButton } from 'naive-ui'
</script>

<template>
  <section class="py-6 sm:py-12 md:py-24 bg-gradient-to-r from-cyan-300 to-blue-400">
    <div class="max-w-[1366px] flex flex-col gap-6 items-center justify-center mx-auto">
      <h2 class="text-2xl sm:text-[42px] text-white">Голосование, Жюри — поклонники</h2>
      <p class="text-lg sm:text-xl text-center text-white my-6 max-w-[800px]">
        Каждый зарегистрированный пользователь может дать свой голос любой участнице тем самым стать
        членом жюри. Проголосовав, система моментально присваивает голос и отображает в рейтинге на
        странице участницы в реальном времени. Ни каких закрытых голосований - все прозрачно.
      </p>
      <nuxt-link to="#auth">
        <n-button size="large" round type="info" bordered>Голосовать</n-button>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped></style>
