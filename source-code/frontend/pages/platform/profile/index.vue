<script setup lang="ts">
  import { definePageMeta, useSettingsStore, useUserStore } from '#imports'
  import { computed, h, ref, type Ref, onMounted } from 'vue'
  import { ArchiveRestore, Heart, MailPlus, Star, Trophy, ThumbsUp } from 'lucide-vue-next'
  import { EUserAction } from '~/services/enums'
  import ProfileHeaderDesktop from '~/components/Profile/ProfileHeader/ProfileHeaderDesktop.vue'
  import type { IUserProfileAction, IUserBaseStatistics, IPhoto } from '~/services/models'
  import ProfileActiveContest from '~/components/Profile/ProfileActiveContest.vue'
  import {
    NButton,
    NCarousel,
    NCarouselItem,
    NGradientText,
    NGrid,
    NGridItem,
    NModal,
    NSpace
  } from 'naive-ui'
  import { ContestUserModal, GalleryCard } from '#components'
  import { storeToRefs } from 'pinia'
  import contestRepository from '~/services/repository/contestRepository'
  import usersRepository from '~/services/repository/usersRepository'

  definePageMeta({
    layout: 'profile-layout',
    key: 'gallery',
    middleware: ['auth']
  })

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)
  const settingsStore = useSettingsStore()
  console.log('user: ', user.value)
  const modelYear = computed(() => {
    return new Date().getFullYear() - user.value.info?.birthdate || null
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

  const bodyStyle = ref({
    width: '600px'
  })
  const segmented = ref({
    content: 'soft',
    footer: 'soft'
  })
  const showModal = ref(false)
  const carouselRef = ref(null)
  const handleGalleryModal = (id: number): void => {
    console.log('open', id)
    showModal.value = true
    carouselRef.value?.to(id)
  }

  const userBaseStatistics = ref<IUserBaseStatistics[]>([
    {
      header: 'Возраст',
      value: `${modelYear.value} год`
    },
    {
      header: 'Рост',
      value: `${user.value.info?.height} см`
    },
    {
      header: 'Цвет волос',
      value: user.value.info?.hair?.color
    },
    {
      header: 'Размер бюстгалтера',
      value: user.value.info?.breast?.size ?? null
    },
    {
      header: 'Вес',
      value: `${user.value.info?.weight} кг`
    }
  ])
  const photos: Ref<IPhoto[]> = ref([])

  const fetchGalleryPhotos = async () => {
    const response = await usersRepository.getGalleryPhotos(user.value.id)
    photos.value = response
  }

  const save = async () => {
    //const val = await usersRepository.addGalleryPhoto()
    await fetchGalleryPhotos()
  }
  const config = ref({
    route: `/api/gallery-photo`,
    method: 'POST',
    name: 'image'
  })

  const file = ref(null)

  const setFileUpload = async data => {
    file.value = data
    await fetchGalleryPhotos()
  }

  onMounted(async () => {
    await fetchGalleryPhotos()
  })

  //todo refactor <Вынести в отдельный компоненты>
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="px-2">
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
    <div
      class="bg-gray-50/60 rounded-xl overflow-hidden sm:shadow-lg px-2 sm:px-4 md:px-8 py-6 sm:py-12"
    >
      <n-gradient-text :size="24" type="warning">
        <div class="font-extrabold text-2xl sm:text-3xl mb-6">Загрузка галлереи</div>
      </n-gradient-text>
      <n-space vertical class="border-gray-400 border-solid p-2 rounded">
        <file-upload
          :name="config.name"
          :route="config.route"
          :method="config.method"
          @uploaded="setFileUpload"
        />
      </n-space>
    </div>
    <div
      v-if="user.active_contest"
      class="bg-gray-50/60 rounded-xl overflow-hidden sm:shadow-lg px-2 sm:px-4 md:px-8 py-6 sm:py-12"
    >
      <n-gradient-text :size="24" type="warning">
        <div class="font-extrabold text-2xl sm:text-3xl mb-6">Активный конкурс</div>
      </n-gradient-text>
      <div class="max-w-[600px] mx-auto">
        <profile-active-contest :active-contest="user.active_contest" />
      </div>
    </div>
    <div
      class="bg-gray-50/60 rounded-xl overflow-hidden sm:shadow-lg px-2 sm:px-4 md:px-8 py-6 sm:py-12"
    >
      <n-gradient-text :size="24" type="success">
        <div class="font-extrabold text-2xl sm:text-3xl mb-6">Галерея</div>
      </n-gradient-text>
      <div>
        <div class="gap-4 sm:gap-8 columns-2 sm:columns-3">
          <gallery-card
            v-for="(photoItem, index) in photos"
            :key="index"
            :item="photoItem"
            :class="[
              { 'sm:aspect-video': index === 0 || index === 4 || index === 5 || index === 7 },
              {
                'sm:aspect-square':
                  index === 1 || index === 2 || index === 3 || index === 6 || index === 8
              },
              'mb-6'
            ]"
            @click="handleGalleryModal(index)"
          />
        </div>
        <n-modal
          v-model:show="showModal"
          :style="bodyStyle"
          :bordered="false"
          size="huge"
          preset="card"
          class="px-2"
        >
          <n-carousel
            ref="carouselRef"
            direction="vertical"
            dot-placement="right"
            mousewheel
            style="width: 100%; height: 800px"
          >
            <n-carousel-item
              v-for="(photoItem, index) in photos"
              :key="index"
              style="width: 100%; height: 100%"
            >
              <gallery-card :item="photoItem" class="h-full" />
            </n-carousel-item>
          </n-carousel>
        </n-modal>
      </div>
    </div>
  </div>
</template>

<style>
  .n-modal .n-card__content {
    @apply px-2;
  }
  .n-modal .n-carousel.n-carousel--right .n-carousel__dots {
    @apply bg-black/50 p-2 rounded-[12px];
  }
</style>
