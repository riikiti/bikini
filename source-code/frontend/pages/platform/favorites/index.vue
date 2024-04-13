<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import usersRepository from '~/services/repository/usersRepository'
  import { ref, onMounted } from 'vue'
  import { RoutesNames } from '~/services/routes-names'
  import { NResult } from 'naive-ui'

  definePageMeta({
    layout: 'profile-layout',
    middleware: 'auth'
  })

  const modelList = ref([])

  const fetchModel = async () => {
    try {
      const response = await usersRepository.favourites()
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
  <div class="text-2xl md:text-4xl font-bold mb-8">Избранное</div>
  <div
    v-if="modelList && modelList.length > 0"
    class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-16 gap-x-4"
  >
    <users-card v-for="card in modelList" :key="card.id" :card="card" @update="fetchModel()" />
  </div>
  <div v-else>
    <n-result status="404" title="Добавляй в избранное!)" description="Список пуст" size="huge">
      <template #footer>
        <router-link :to="RoutesNames.USERS">Ко всем пользователям</router-link>
      </template>
    </n-result>
  </div>
</template>
