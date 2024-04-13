<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { definePageMeta, useSettingsStore, useAuthStore, storeToRefs } from '#imports'
  import type { IContestPrize, IContestBlock } from '~/services/models'
  import { EUserAccountType } from '~/services/enums'
  import contestRepository from '~/services/repository/contestRepository'
  import ContestActiveUsers from '~/components/contest/ContestActiveUsers.vue'
  import ContestWelcome from '~/components/contest/ContestWelcome.vue'

  definePageMeta({
    layout: 'profile-layout',
    key: 'contest',
    middleware: 'auth'
  })

  const settingsStore = useSettingsStore()
  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

  const activeContest = ref<IContestBlock | null>(null)

  const fetchActiveContest = async () => {
    try {
      const response = await contestRepository.prizeList()
      const { data } = response
      activeContest.value = data.contest as IContestBlock
    } catch (e) {
      console.log(e)
    }
  }

  const prizes = computed(() => {
    if (activeContest.value.prizes) {
      if (settingsStore.isMobile) {
        return activeContest.value.prizes
      }

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
    <contest-welcome :contest="activeContest" />
    <contest-prize-section :prize-list="prizes" />
    <div
      v-if="user.role === EUserAccountType.MODEL_ACCOUNT"
      class="flex items-center justify-center mt-16 w-full"
    >
      <contest-user />
    </div>
    <div class="mt-16">
      <div class="text-xl md:text-[48px] mb-16">Участницы конкурса</div>
      <contest-active-users :is-active-contest="activeContest.active" />
    </div>
  </div>
</template>
