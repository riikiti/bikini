<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { NAlert, NSkeleton, NSpace } from 'naive-ui'
  import { RoutesNames } from '~/services/routes-names'
  import contestRepository from '~/services/repository/contestRepository'
  import { ref, onMounted } from 'vue'

  definePageMeta({
    layout: 'profile-layout',
    key: 'contest',
    middleware: 'profile'
  })

  const statistics = ref(null)
  const isLoading = ref(false)

  const fetchStatistics = async () => {
    isLoading.value = true
    try {
      const response = await contestRepository.statistics()

      const x = response?.reduce((acc, val) => {}) ?? []
      statistics.value = response
    } catch (e) {
      console.log(e)
    }
    isLoading.value = false
  }

  onMounted(async () => {
    await fetchStatistics()
  })

  const statisticsList = [
    {
      id: 1,
      type: '1',
      items: [
        {
          id: 6,
          email: 'ruslan4@admi.com',
          name: 'ruslan',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        },
        {
          id: 5,
          email: 'ruslan4@admi.com',
          name: 'ruslan',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        }
      ]
    },
    {
      id: 2,
      type: '5',
      items: [
        {
          id: 6,
          email: 'ruslan4@admi.com',
          name: 'ffadf23',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        },
        {
          id: 5,
          email: 'ruslan4@admi.com',
          name: 'alfredo ',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        }
      ]
    },
    {
      id: 3,
      type: '15',
      items: [
        {
          id: 6,
          email: 'ruslan4@admi.com',
          name: '3daadfa',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        },
        {
          id: 5,
          email: 'ruslan4@admi.com',
          name: 'adfadsfs',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        }
      ]
    },
    {
      id: 3,
      type: '25',
      items: [
        {
          id: 6,
          email: 'ruslan4@admi.com',
          name: 'Ghhhhfgg',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        },
        {
          id: 5,
          email: 'ruslan4@admi.com',
          name: 'fgdgd33a',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        }
      ]
    },
    {
      id: 3,
      type: '50',
      items: [
        {
          id: 6,
          email: 'ruslan4@admi.com',
          name: 'Get22323',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        },
        {
          id: 5,
          email: 'ruslan4@admi.com',
          name: 'fdfdasgcxz33',
          avatar: 'http://127.0.0.1:8000/storage/123',
          created_at: '20.02.2024',
          role: 'user',
          country: null
        }
      ]
    }
  ]
</script>

<template>
  <div>
    <n-skeleton v-if="isLoading" text :repeat="1" :height="40" class="mb-4" />
    <n-skeleton v-if="isLoading" text :repeat="5" :height="150" />
    <template v-else>
      <div class="text-2xl">Статистика</div>
      <div>Вам добавили</div>
      <div class="mt-12 flex flex-col gap-12">
        <n-space v-for="statisticsItem in statistics" :key="statisticsItem.id" vertical>
          <div v-if="statisticsItem.type == 1" class="text-3xl">
            по <b>{{ statisticsItem.type }}</b> баллу, пользователи:
          </div>
          <div v-else class="text-3xl">
            по <b>{{ statisticsItem.type }}</b> баллов (дополнительные голоса), пользователи:
          </div>
          <n-space v-if="statisticsItem.users.length > 0" size="large">
            <nuxt-link
              v-for="(user, idx) in statisticsItem.users"
              :key="idx"
              class="text-black"
              :to="RoutesNames.PROFILE + `/${user.id}`"
            >
              <div>{{ user.name }}</div>
            </nuxt-link>
          </n-space>
          <n-alert v-else title="Информация" type="info"> На данный момент нет статистики!</n-alert>
        </n-space>
      </div>
    </template>
  </div>
</template>
