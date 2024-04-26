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

  const router = useRouter()

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
</script>

<template>
  <div class="h-full relative">
    <n-skeleton v-if="isLoading" text :repeat="2" :height="400" />
    <n-space v-for="(contestItem, idx) in activeContest" v-else :key="idx" vertical :size="40">
      <n-card>
        <n-space vertical align="center" justify="center">
          <span class="text-3xl sm:text-4xl md:text-[64px] line-height-[100%] sm:leading-normal">
            <n-gradient-text type="success" class="whitespace-normal text-center">
              {{ contestItem?.contest?.name }}
            </n-gradient-text>
          </span>
          <n-space v-if="contestItem.winners?.length" size="large">
            <n-card v-for="(winner, idx) in activeContest.winners" :key="idx">
              <n-space vertical>
                <div
                  class="h-[250px] overflow-hidden rounded w-full max-h-full"
                  @click="RoutesNames.PROFILE + `${winner?.user?.id}`"
                >
                  <img
                    v-if="winner?.user?.avatar"
                    :src="winner?.user.avatar"
                    height="100%"
                    width="100%"
                    class="w-full h-full max-w-full max-h-full object-cover"
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
                <nuxt-link :to="RoutesNames.ACTIVE_CONTEST">
                  <n-button>Посмотрите текущий контест</n-button>
                </nuxt-link>
              </template>
            </n-result>
          </template>
          <div class="flex items-center mt-6">
            <span class="text-xl sm:text-3xl text-center"
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
