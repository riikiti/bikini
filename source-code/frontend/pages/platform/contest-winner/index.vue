<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { definePageMeta, useUserStore } from '#imports'
  import {
    NAlert,
    NButton,
    NCard,
    NGradientText,
    NImage,
    NResult,
    NSkeleton,
    NSpace
  } from 'naive-ui'
  import type { IContestPrize, IContestBlock } from '~/services/models'
  import contestRepository from '~/services/repository/contestRepository'
  import { RoutesNames } from '~/services/routes-names'
  definePageMeta({
    layout: 'profile-layout',
    middleware: 'auth'
  })

  const userStore = useUserStore()

  const isLoading = ref(false)

  const activeContest = ref(null)
  const fetchActiveContest = async () => {
    isLoading.value = true
    try {
      activeContest.value = await contestRepository.winnerList()
    } catch (e) {
      console.log(e)
    }
    isLoading.value = false
  }

  onMounted(() => {
    fetchActiveContest()
  })

  const testWinners = [
    {
      id: 5,
      place: 1,
      user: {
        id: 1,
        name: 'Affff',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      contest_id: '1',
      created_at: '2024-03-28T12:08:20.000000Z',
      updated_at: '2024-03-28T12:08:20.000000Z'
    },
    {
      id: 6,
      place: 2,
      user: {
        id: 1,
        name: 'ававаав',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      contest_id: '1',
      created_at: '2024-03-28T12:08:20.000000Z',
      updated_at: '2024-03-28T12:08:20.000000Z'
    },
    {
      id: 7,
      place: 3,
      user: {
        id: 7,
        name: 'ffff',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      },
      contest_id: '1',
      created_at: '2024-03-28T12:08:20.000000Z',
      updated_at: '2024-03-28T12:08:20.000000Z'
    }
  ]
</script>

<template>
  <div class="h-full relative">
    <n-skeleton v-if="isLoading" text :repeat="2" :height="400" />
    <n-space v-for="(contestItem, idx) in activeContest" v-else :key="idx" vertical :size="40">
      <n-card>
        <n-space vertical align="center" justify="center">
          <n-gradient-text type="success">
            <div class="text-[64px]">{{ contestItem?.contest?.name }}</div>
          </n-gradient-text>
          <n-space v-if="contestItem.winners?.length || testWinners" size="large">
            <n-card v-for="(winner, idx) in testWinners" :key="idx">
              <n-space vertical>
                <div class="h-[250px] overflow-hidden rounded w-full max-h-full">
                  <n-image
                    v-if="winner?.user?.avatar"
                    :src="winner?.user.avatar"
                    height="100%"
                    width="100%"
                    max-height="100%"
                    max-width="100%"
                    class="w-full h-full"
                  />
                  <n-alert v-else title="Произошла ошибка" type="error"> Попробуйте позже </n-alert>
                </div>
                <div class="mt-3 text-xl font-medium text-center">
                  Место: <n-gradient-text>{{ winner.place }}</n-gradient-text>
                </div>
              </n-space>
            </n-card>
          </n-space>
          <template v-else>
            <n-result
              status="warning"
              title="Победителей пока нет"
              size="medium"
              description="На данный момент победителей у данного конкурса нет!"
            >
              <template #footer>
                <router-link :to="RoutesNames.ACTIVE_CONTEST">
                  <n-button>Посмотрите текущий контест</n-button>
                </router-link>
              </template>
            </n-result>
          </template>
          <div class="mt-6">
            <span class="text-3xl text-center"
              >c
              <n-gradient-text type="info">
                <div>{{ contestItem.contest?.start }}</div>
              </n-gradient-text>
              по
              <n-gradient-text type="error">
                <div>{{ contestItem.contest?.finish }}</div>
              </n-gradient-text>
            </span>
          </div>
        </n-space>
      </n-card>
    </n-space>
  </div>
</template>

<style scoped></style>
