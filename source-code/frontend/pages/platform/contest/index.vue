<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { definePageMeta, useUserStore } from '#imports'
  import { NButton, NEmpty, NGradientText, NGrid, NGridItem, NIcon, NSpace } from 'naive-ui'
  import type { IContest, IContestPlayers, IContestPrize } from '~/services/models'
  import { Camera, ChevronDown } from 'lucide-vue-next'
  import ContestCard from '~/components/contest/ContestCard.vue'
  import { EUserAccountType } from '~/services/enums'
  import contestRepository from '~/services/repository/contestRepository'
  import ContestActiveUsers from '~/components/contest/ContestActiveUsers.vue'

  definePageMeta({
    layout: 'profile-layout',
    key: 'contest',
    middleware: 'auth'
  })

  const userStore = useUserStore()

  const activeContest = ref(null)

  const fetchActiveContest = async () => {
    try {
      const response = await contestRepository.prizeList()
      const { data } = response
      activeContest.value = data.contest ?? {}
      console.log(activeContest.value)
    } catch (e) {
      console.log(e)
    }
  }

  const prizes = computed(() => {
    if (activeContest.value.prizes) {
      const sorted = activeContest.value.prizes.sort(
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
    }
    return []
  })

  onMounted(() => {
    fetchActiveContest()
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
            <div>{{ activeContest?.start }}</div>
          </n-gradient-text>
          по
          <n-gradient-text type="error">
            <div>{{ activeContest?.finish }}</div>
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
      <div v-if="prizes" class="gap-8 columns-3 h-full my-8">
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
      <div
        v-if="userStore.accountType === EUserAccountType.MODEL_ACCOUNT"
        class="flex items-center justify-center mt-16 w-full"
      >
        <contest-user />
      </div>
      <div class="mt-16">
        <div class="text-xl md:text-[48px] mb-16">Участницы конкурса</div>
        <contest-active-users :is-active-contest="activeContest.active" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
