<script setup lang="ts">
  import { ref } from 'vue'
  import { definePageMeta } from '#imports'
  import { NGradientText, NImage, NImageGroup, NSpace } from 'naive-ui'
  import type { IContestPrize, IContest } from '~/services/models'
  import { ChevronDown } from 'lucide-vue-next'

  definePageMeta({
    layout: 'profile-layout',
    key: 'contest',
    middleware: 'profile'
  })

  const activeContest = ref<IContest>()
  const fetchActiveContest = async () => {
    fetch('/mock/mock-contest-prizes.json')
      .then(response => response.json())
      .then(data => {
        activeContest.value = data.contest as IContest
      })
  }
  fetchActiveContest()

  const prizes = computed(() => {
    const sorted = activeContest.value.prizes.sort((a, b) => a.place - b.place)
    // Найти индекс элемента с place: 2
    const indexPlace2 = sorted.findIndex(prize => prize.place === 2)

    // Переместить элемент с place: 2 в начало массива
    const place2Element = sorted.splice(indexPlace2, 1)[0]
    sorted.unshift(place2Element)
    const indexPlace1 = sorted.findIndex(prize => prize.place === 1)
    const place1Element = sorted.splice(indexPlace1, 1)[0]
    const middleIndex = Math.floor(sorted.length / 2)
    sorted.splice(middleIndex, 0, place1Element)
    return sorted
  })

  const lastPublishPhotos = ref([
    {
      contest_id: '1',
      user: {
        id: 5,
        email: 'ruslan4@admi.com',
        name: 'fdfdasgcxz33',
        avatar: 'http://127.0.0.1:8000/storage/123',
        created_at: '20.02.2024',
        role: 'user',
        country: null
      },
      photo: 'https://www.shadcn-vue.com/avatars/01.png',
      freeRating: 5,
      additionalFreeRating: 5,
      paidRating: 10
    },
    {
      contest_id: '1',
      user: {
        id: 5,
        email: 'ruslan4@admi.com',
        name: 'fdfdasgcxz33',
        avatar: 'http://127.0.0.1:8000/storage/123',
        created_at: '20.02.2024',
        role: 'user',
        country: null
      },
      photo:
        'https://bikini-star.com/cache/stream/1514/_vdMqFDVdNid8KrzY_u24V0B16x_I6mfN0rkwqTJcrtOIi32B3FpwTPnwsQ9g9v8_1687335831CA-930x620.png',
      freeRating: 1,
      additionalFreeRating: 100,
      paidRating: 500
    },
    {
      contest_id: '1',
      user: {
        id: 5,
        email: 'ruslan4@admi.com',
        name: 'fdfdasgcxz33',
        avatar: 'http://127.0.0.1:8000/storage/123',
        created_at: '20.02.2024',
        role: 'user',
        country: null
      },
      photo:
        'https://bikini-star.com/cache/stream/1514/_vdMqFDVdNid8KrzY_u24V0B16x_I6mfN0rkwqTJcrtOIi32B3FpwTPnwsQ9g9v8_1687335831CA-930x620.png',
      freeRating: 1,
      additionalFreeRating: 100,
      paidRating: 500
    },
    {
      contest_id: '1',
      user: {
        id: 5,
        email: 'ruslan4@admi.com',
        name: 'fdfdasgcxz33',
        avatar: 'http://127.0.0.1:8000/storage/123',
        created_at: '20.02.2024',
        role: 'user',
        country: null
      },
      photo:
        'https://bikini-star.com/cache/stream/1514/_vdMqFDVdNid8KrzY_u24V0B16x_I6mfN0rkwqTJcrtOIi32B3FpwTPnwsQ9g9v8_1687335831CA-930x620.png',
      freeRating: 1,
      additionalFreeRating: 100,
      paidRating: 500
    },
    {
      contest_id: '1',
      user: {
        id: 5,
        email: 'ruslan4@admi.com',
        name: 'fdfdasgcxz33',
        avatar: 'http://127.0.0.1:8000/storage/123',
        created_at: '20.02.2024',
        role: 'user',
        country: null
      },
      photo:
        'https://bikini-star.com/cache/stream/1514/_vdMqFDVdNid8KrzY_u24V0B16x_I6mfN0rkwqTJcrtOIi32B3FpwTPnwsQ9g9v8_1687335831CA-930x620.png',
      freeRating: 1,
      additionalFreeRating: 100,
      paidRating: 500
    },
    {
      contest_id: '1',
      user: {
        id: 5,
        email: 'ruslan4@admi.com',
        name: 'fdfdasgcxz33',
        avatar: 'http://127.0.0.1:8000/storage/123',
        created_at: '20.02.2024',
        role: 'user',
        country: null
      },
      photo:
        'https://bikini-star.com/cache/stream/1514/_vdMqFDVdNid8KrzY_u24V0B16x_I6mfN0rkwqTJcrtOIi32B3FpwTPnwsQ9g9v8_1687335831CA-930x620.png',
      freeRating: 1,
      additionalFreeRating: 100,
      paidRating: 500
    }
  ])
</script>

<template>
  <div v-if="activeContest" class="h-full relative">
    <n-space vertical align="center" class="h-screen" justify="center">
      <n-gradient-text type="success">
        <div class="text-[64px]">{{ activeContest.name }}</div>
      </n-gradient-text>
      <div class="text-3xl max-w-[1024px] text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi molestiae natus recusandae.
        Dolorem inventore perspiciatis quibusdam? Adipisci aliquid commodi dicta dolor, facilis,
        fugit nam obcaecati sapiente tempore ut velit, voluptas.
      </div>
      <div class="mt-6">
        <span class="text-3xl text-center"
          >c
          <n-gradient-text type="info">
            <div>{{ activeContest.start }}</div>
          </n-gradient-text>
          по
          <n-gradient-text type="error">
            <div>{{ activeContest.finish }}</div>
          </n-gradient-text>
        </span>
      </div>
      <div
        class="text-gray-800 cursor-pointer absolute bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="animate-bounce">
          <ChevronDown :size="48" />
        </div>
      </div>
    </n-space>
    <div class="pb-12">
      <div class="text-[48px] mb-16">Наши призы</div>
      <div class="gap-8 columns-3 h-full my-8">
        <div v-for="(prize, index) in prizes" :key="index" class="flex flex-col items-center">
          <div class="relative">
            <div
              :class="[
                'w-[200px] h-[200px] rounded-full shadow-lg flex overflow-hidden relative',
                { '-mt-12': prize.place === 1 }
              ]"
            >
              <img :src="prize.image" alt="" />
            </div>
            <div
              :class="[
                'absolute w-[48px] h-[48px] rounded-full  bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center font-bold text-2xl',
                {
                  'bg-yellow-300': prize.place === 1
                },
                {
                  'bg-cyan-400': prize.place === 2
                },
                {
                  'bg-violet-400': prize.place === 3
                }
              ]"
            >
              {{ prize.place }}
            </div>
          </div>

          <div class="text-2xl text-center mt-3">{{ prize.name }}</div>
          <div>{{ prize.description }}</div>
        </div>
      </div>
      <div class="flex items-center justify-center mt-16 w-full">
        <contest-user />
      </div>
      <div class="mt-16">
        <div class="text-[48px] mb-16">Последние загрузки</div>
        <n-image-group>
          <n-space size="large">
            <div
              v-for="(photoItem, idx) in lastPublishPhotos"
              :key="idx"
              class="h-[250px] w-[250px] overflow-hidden rounded-lg"
            >
              <n-image :src="photoItem.photo" class="w-full h-full" width="100%" height="100%" />
            </div>
          </n-space>
        </n-image-group>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
