<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import usersRepository from '~/services/repository/usersRepository'
  import { ref, onMounted } from 'vue'

  definePageMeta({
    layout: 'profile-layout',
    key: 'settings',
    middleware: 'auth'
  })

  const modelList = ref([])

  const fetchModel = async () => {
    try {
      const response = await usersRepository.models()
      console.log(response)
      modelList.value = response.data
    } catch (e) {
      console.log(e)
    }
  }

  onMounted(async () => {
    await fetchModel()
  })
</script>

<template>
  <div class="text-2xl md:text-4xl font-bold mb-8">Все модели</div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4">
    <users-card v-for="card in modelList" :key="card.id" :card="card" @update="fetchModel()" />
  </div>
</template>
