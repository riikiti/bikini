<script setup lang="ts">
  import usersRepository from '~/services/repository/usersRepository'
  import {
    definePageMeta,
    useSettingsStore,
    useAuthStore,
    storeToRefs,
    useRoute,
    useRouter
  } from '#imports'
  import { ref, onMounted, h, computed } from 'vue'
  import type { IUserProfileAction } from '~/services/models'
  import { EUserAccountType, EUserAction } from '~/services/enums'
  import { ArchiveRestore, Heart, MailPlus, Star, Trophy } from 'lucide-vue-next'
  import ProfileHeaderDesktop from '~/components/Profile/ProfileHeader/ProfileHeaderDesktop.vue'
  import ProfileUpload from '~/components/Profile/ProfileUpload.vue'
  import { NGradientText } from 'naive-ui'
  import ProfileActiveContest from '~/components/Profile/ProfileActiveContest.vue'
  import { RoutesNames } from '~/services/routes-names'

  definePageMeta({
    layout: 'profile-layout',
    middleware: ['auth']
  })

  const userRoute = useRoute()
  const router = useRouter()

  const profileId = userRoute.params.id
  const userProfile = ref(null)
  const settingsStore = useSettingsStore()
  const authStore = useAuthStore()

  const { user } = storeToRefs(authStore)

  const fetchUserProfile = async () => {
    userProfile.value = await usersRepository.profileById(profileId)
  }

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

  const userBaseStatistics = computed(() => {
    return [
      {
        header: 'Возраст',
        value: userProfile.value?.user.info?.birthdate
          ? `${userProfile.value?.user.info?.birthdate} год`
          : 'Не заполнено'
      },
      {
        header: 'Рост',
        value: userProfile.value?.user.info?.height
          ? `${userProfile.value?.user.info?.height} см`
          : 'Не заполнено'
      },
      {
        header: 'Цвет волос',
        value: userProfile.value?.user.info?.hair?.color
          ? userProfile.value?.user.info?.hair?.color
          : 'Не заполнено'
      },
      {
        header: 'Размер бюстгалтера',
        value: userProfile.value?.user.info?.breast?.size
          ? userProfile.value?.user.info?.breast?.size
          : 'Не заполнено'
      },
      {
        header: 'Вес',
        value: userProfile.value?.user.info?.weight
          ? `${userProfile.value?.user.info?.weight} кг`
          : 'Не заполнено'
      }
    ]
  })

  const hasCurrentUserPage = computed(() => {
    return user.value.id == profileId
  })

  onMounted(async () => {
    await fetchUserProfile()
    if (hasCurrentUserPage.value && user.value.role === EUserAccountType.USER_ACCOUNT) {
      await router.push(RoutesNames.ACTIVE_CONTEST)
    }
  })
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
    <profile-upload v-if="hasCurrentUserPage" @uploaded="fetchUserProfile()" />
    <div
      v-if="userProfile?.contest_photo"
      class="bg-gray-50/60 rounded-xl overflow-hidden sm:shadow-lg px-2 sm:px-4 md:px-8 py-6 sm:py-12"
    >
      <n-gradient-text :size="24" type="warning">
        <div class="font-extrabold text-2xl sm:text-3xl mb-6">Активный конкурс</div>
      </n-gradient-text>
      <div class="max-w-[600px] mx-auto">
        <profile-active-contest :active-contest="userProfile.contest_photo" />
      </div>
    </div>
    <profile-gallery :gallery="userProfile?.gallery_photo ?? []" />
  </div>
</template>

<style scoped></style>
