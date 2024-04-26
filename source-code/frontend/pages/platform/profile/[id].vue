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
  import { ref, onMounted, computed } from 'vue'
  import { EUserAccountType } from '~/services/enums'
  import ProfileHeaderDesktop from '~/components/Profile/ProfileHeader/ProfileHeaderDesktop.vue'
  import ProfileUpload from '~/components/Profile/ProfileUpload.vue'
  import { NGradientText, NSkeleton, NSpace, useMessage } from 'naive-ui'
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

  const message = useMessage()

  const { user } = storeToRefs(authStore)

  const isLoading = ref(false)

  const fetchUserProfile = async () => {
    isLoading.value = true
    try {
      userProfile.value = await usersRepository.profileById(profileId)
      await authStore.profile()
    } catch (e) {
      message.error('Ошибка сети')
    }
    isLoading.value = false
  }

  const deletePhotoById = async id => {
    try {
      const response = await usersRepository.deleteGalleryPhoto(id)
      await authStore.profile()
      message.success('Фото успешно удалено')
    } catch (e) {
      message.error('Ошибка удаления данных')
    }
  }

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
        value: userProfile.value?.user.info?.hair_color?.color
          ? userProfile.value?.user.info?.hair_color?.color
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
  <n-space v-if="isLoading" vertical size="large">
    <n-skeleton height="250px" width="100%" />
    <n-skeleton height="250px" width="100%" />
  </n-space>
  <div v-else class="flex flex-col gap-4 w-full">
    <div class="px-2">
      <profile-header-desktop
        v-if="!settingsStore.isMobile"
        :user="userProfile?.user"
        :user-base-statistics="userBaseStatistics"
        @update="fetchUserProfile()"
      />
      <profile-profile-header-mobile
        v-else
        :user="userProfile?.user"
        :user-base-statistics="userBaseStatistics"
        @update="fetchUserProfile()"
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
    <profile-gallery
      :is-deletable="hasCurrentUserPage"
      :gallery="userProfile?.gallery_photo ?? []"
      @delete="deletePhotoById($event)"
    />
  </div>
</template>

<style scoped></style>
