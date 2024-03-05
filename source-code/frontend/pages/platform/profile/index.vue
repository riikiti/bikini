<script setup lang="ts">
  import { definePageMeta, useSettingsStore, useUserStore } from '#imports'
  import { computed, h, ref, type Ref, onMounted } from 'vue'
  import { ArchiveRestore, Heart, MailPlus, Star, Trophy, ThumbsUp } from 'lucide-vue-next'
  import { EUserAction } from '~/services/enums'
  import ProfileHeaderDesktop from '~/components/Profile/ProfileHeader/ProfileHeaderDesktop.vue'
  import type { IUserProfileAction, IUserBaseStatistics, IPhoto } from '~/services/models'
  import ProfileActiveContest from '~/components/Profile/ProfileActiveContest.vue'
  import { NGradientText, NGrid, NGridItem } from 'naive-ui'
  import { GalleryCard } from '#components'

  definePageMeta({
    layout: 'profile-layout',
    key: 'gallery',
    middleware: 'profile'
  })

  const userStore = useUserStore()
  const settingsStore = useSettingsStore()

  const modelYear = computed(() => {
    return new Date().getFullYear() - userStore.info?.birthdate || null
  })

  const userActions = ref<IUserProfileAction[]>([
    {
      action: EUserAction.LIKE,
      component: h(Heart),
      tooltip: 'Какой-то тултип',
      callback: (userId?: null | number): void => {
        console.log(userId)
      }
    },
    {
      action: EUserAction.ADD_VOTING,
      component: h(Star),
      tooltip: 'Какой-то тултип',
      callback: (userId?: null | number): void => {
        console.log(userId)
      }
    },
    {
      action: EUserAction.SEND_MESSAGE,
      component: h(MailPlus),
      tooltip: 'Какой-то тултип',
      callback: (userId?: null | number): void => {
        console.log(userId)
      }
    },
    {
      action: EUserAction.WINNER,
      component: h(Trophy),
      tooltip: 'Какой-то тултип',
      callback: (userId?: null | number): void => {
        console.log(userId)
      }
    },
    {
      action: EUserAction.SUBSCRIBE,
      component: h(ArchiveRestore),
      tooltip: 'Какой-то тултип',
      callback: (userId?: null | number): void => {
        console.log(userId)
      }
    }
  ])

  const userBaseStatistics = ref<IUserBaseStatistics[]>([
    {
      header: 'Возраст',
      value: `${modelYear.value} год`
    },
    {
      header: 'Рост',
      value: `${userStore.info?.height} см`
    },
    {
      header: 'Цвет волос',
      value: userStore.info?.hair.color
    },
    {
      header: 'Размер бюстгалтера',
      value: userStore.info?.breast.size
    },
    {
      header: 'Вес',
      value: `${userStore.info?.weight} кг`
    }
  ])
  const photos: Ref<IPhoto[]> = ref([])
  const fetchPhotos = async () => {
    fetch('/mock/mock-model-photos.json')
      .then(response => response.json())
      .then(data => {
        photos.value = data.photos as IPhoto[]
      })
  }

  onMounted(() => {
    fetchPhotos()
  })
  //todo refactor <Вынести в отдельный компоненты>
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <div>
      <profile-header-desktop
        v-if="!settingsStore.isMobile"
        :user-base-statistics="userBaseStatistics"
        :user-actions="userActions"
      />
      <profile-profile-header-mobile
        v-else
        :user-base-statistics="userBaseStatistics"
        :user-actions="userActions"
      />
    </div>
    <div class="bg-gray-50/60 rounded-2xl overflow-hidden shadow-lg px-8 py-12">
      <n-gradient-text :size="24" type="warning">
        <div class="font-extrabold text-3xl mb-6">Активный конкурс</div>
      </n-gradient-text>
      <div class="max-w-[600px] mx-auto">
        <profile-active-contest />
      </div>
    </div>
    <div class="bg-gray-50/60 rounded-2xl overflow-hidden shadow-lg px-8 py-12">
      <n-gradient-text :size="24" type="success">
        <div class="font-extrabold text-3xl mb-6">Галерея</div>
      </n-gradient-text>
      <div class="gap-8 columns-3">
        <gallery-card
          v-for="(photoItem, index) in photos"
          :key="index"
          :item="photoItem"
          :class="[
            { 'aspect-video': index === 0 || index === 4 || index === 5 || index === 7 },
            {
              'aspect-square':
                index === 1 || index === 2 || index === 3 || index === 6 || index === 8
            },
            'mb-6'
          ]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
