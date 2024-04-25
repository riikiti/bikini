<script setup lang="ts">
  import { NButton } from 'naive-ui'
</script>

<template>
  <section class="py-6 sm:py-12 md:py-24 bg-gradient-to-r from-orange-300 to-amber-400">
    <div class="max-w-[1366px] flex flex-col gap-6 items-center justify-center mx-auto">
      <h2 class="text-2xl sm:text-[42px] text-white">Победительницы</h2>
      <p class="text-lg sm:text-xl text-center text-white my-6 max-w-[800px]">
        В момент подсчета голосов, система суммирует все голоса пользователей и мгновенно
        определяются победительницы, набравшие наибольшее количество голосов.
      </p>
      <nuxt-link to="#auth">
        <n-button size="large" round type="warning" bordered>Победить</n-button>
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped></style>
