<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import usersRepository from '~/services/repository/usersRepository'
  import { ref, onMounted } from 'vue'
  import { NSkeleton, NSpace } from 'naive-ui'

  definePageMeta({
    layout: 'profile-layout',
    key: 'settings',
    middleware: 'auth'
  })

  const modelList = ref([])
  const isLoading = ref(false)
  const fetchModel = async () => {
    isLoading.value = true
    try {
      const response = await usersRepository.models()
      console.log(response)
      modelList.value = response.data
    } catch (e) {
      console.log(e)
    }
    isLoading.value = false
  }

  onMounted(async () => {
    await fetchModel()
  })
</script>

<template>
  <n-space v-if="isLoading">
    <n-skeleton
      v-for="(item, idx) in 9"
      :key="idx"
      :width="400"
      :sharp="false"
      :height="300"
      size="medium"
    />
  </n-space>
  <template v-else>
    <div class="text-2xl md:text-4xl font-bold mb-8">Все модели</div>
    <div class="grid min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4">
      <users-card v-for="card in modelList" :key="card.id" :card="card" @update="fetchModel()" />
    </div>
  </template>
</template>
