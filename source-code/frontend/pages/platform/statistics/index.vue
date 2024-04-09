<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { NSpace } from 'naive-ui'
  import { RoutesNames } from '~/services/routes-names'

  definePageMeta({
    layout: 'profile-layout',
    key: 'contest',
    middleware: 'profile'
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
    <div class="text-2xl">Статистика</div>
    <div>Вам добавили</div>
    <div class="mt-12 flex flex-col gap-12">
      <n-space v-for="statisticsItem in statisticsList" :key="statisticsItem.id" vertical>
        <div v-if="statisticsItem.type == 1" class="text-3xl">
          по <b>{{ statisticsItem.type }}</b> баллу, пользователи:
        </div>
        <div v-else class="text-3xl">
          по <b>{{ statisticsItem.type }}</b> баллов (дополнительные голоса), пользователи:
        </div>
        <n-space size="large">
          <a
            v-for="(user, idx) in statisticsItem.items"
            :key="idx"
            class="text-black"
            :href="RoutesNames.PROFILE + `/${user.id}`"
          >
            <div>{{ user.name }}</div>
          </a>
        </n-space>
      </n-space>
    </div>
  </div>
</template>
