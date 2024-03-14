<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { definePageMeta, useUserStore } from '#imports'
  import { NButton, NEmpty, NGradientText, NGrid, NGridItem, NIcon, NSpace } from 'naive-ui'
  import type { IContest, IContestPlayers, IContestPrize } from '~/services/models'
  import { Camera, ChevronDown } from 'lucide-vue-next'
  import ContestCard from '~/components/contest/ContestCard.vue'
  import { EUserAccountType } from '~/services/enums'

  definePageMeta({
    layout: 'profile-layout',
    key: 'contest',
    middleware: 'auth'
  })

  const userStore = useUserStore()

  const activeContest = ref<IContest | undefined>()
  const activePlayers = ref<IContestPlayers | null>(null)
  const fetchActiveContest = async () => {
    fetch('/mock/mock-contest-prizes.json')
      .then(response => response.json())
      .then(data => {
        activeContest.value = data.contest as IContest
      })
  }
  const fetchActivePlayers = async () => {
    fetch('/mock/mock-contest-players.json')
      .then(response => response.json())
      .then(data => {
        activePlayers.value = data.contest as IContestPlayers
      })
  }

  const prizes = computed(() => {
    const sorted = activeContest.value?.prizes.sort(
      (a: IContestPrize, b: IContestPrize) => a.place - b.place
    )
    // Найти индекс элемента с place: 2
    const indexPlace2 = sorted.findIndex((prize: IContestPrize) => prize.place === 2)

    // Переместить элемент с place: 2 в начало массива
    const place2Element = sorted.splice(indexPlace2, 1)[0]
    sorted.unshift(place2Element)
    const indexPlace1 = sorted.findIndex((prize: IContestPrize) => prize.place === 1)
    const place1Element = sorted.splice(indexPlace1, 1)[0]
    const middleIndex = Math.floor(sorted.length / 2)
    sorted.splice(middleIndex, 0, place1Element)
    return sorted
  })

  const isUserModelAccount = computed(() => {
    return userStore.role === EUserAccountType.MODEL_ACCOUNT
  })

  onMounted(() => {
    fetchActiveContest()
    fetchActivePlayers()
  })
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
    <div id="prizes" class="pb-12">
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
      <div v-if="isUserModelAccount" class="flex items-center justify-center mt-16 w-full">
        <contest-user />
      </div>
      <div class="mt-16">
        <div class="text-[48px] mb-16">Участницы конкурса</div>
        <n-grid
          v-if="activePlayers && activePlayers.users.length > 0"
          cols="2 m:3 l:4"
          :x-gap="10"
          :y-gap="10"
          responsive="screen"
        >
          <n-grid-item v-for="(player, idx) in activePlayers.users" :key="idx">
            <contest-card :contest-item="player" />
          </n-grid-item>
        </n-grid>
        <div v-else>
          <n-empty description="Участниц пока нет(">
            <template #icon>
              <n-icon :size="36" color="#19A058">
                <Camera />
              </n-icon>
            </template>
            <template v-if="isUserModelAccount" #extra>
              <n-button size="large" type="primary" tag="a" href="#prizes" dashed>
                Стать участницей
              </n-button>
            </template>
          </n-empty>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
