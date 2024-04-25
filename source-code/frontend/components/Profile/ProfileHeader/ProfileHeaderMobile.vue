<script setup lang="ts">
  import type { IUser, IUserBaseStatistics } from '~/services/models'
  import { NCollapse, NCollapseItem, NIcon, NSpace, useMessage } from 'naive-ui'
  import { computed, toRefs } from 'vue'
  import personalRepository from '~/services/repository/personalRepository'
  import { RoutesNames } from '~/services/routes-names'
  import { BookmarkPlus, Heart, Mail, Star, Trophy } from 'lucide-vue-next'

  interface IProps {
    user: IUser
    userBaseStatistics: IUserBaseStatistics[]
  }

  const props = defineProps<IProps>()
  const { user } = toRefs(props)

  const authStore = useAuthStore()
  const canWriteModel = computed(() => {
    const {
      info: { messages_status }
    } = user.value

    if (messages_status) {
      for (const status in messages_status) {
        if (messages_status[status] !== false && messages_status[status] !== null) {
          return true
        }
      }
    }

    return false
  })

  //todo create hook useFavourite refactoring
  const emits = defineEmits<{
    (e: 'update'): void
  }>()
  const message = useMessage()
  const settingsStore = useSettingsStore()
  const addToFavourite = async () => {
    try {
      if (!user.value.is_favorite) {
        const response = await personalRepository.addToFavourite(user.value.id)
        message.success(response)
      } else {
        const response = await personalRepository.removeFromFavourite(user.value.id)
        message.warning(response)
      }
      await settingsStore.setSettings()
      await emits('update')
    } catch (e) {
      message.error('Ooops!Что-то пошло не так!')
    }
  }

  const modelMessengerLink = computed(() => RoutesNames.MESSENGER + `/${user.value.id}`)
</script>

<template>
  <div v-if="user">
    <n-space vertical size="large">
      <n-space vertical align="center">
        <div class="h-[150px] w-[150px] rounded-full overflow-hidden">
          <img v-if="user.avatar" :src="user.avatar" :alt="user.name" class="w-full h-full" />
          <img v-else src="~/assets/images/profile/user-default.png" class="w-full h-full" />
        </div>
        <div class="mt-4 font-bold text-2xl">{{ user.name }}</div>
      </n-space>
      <n-space v-if="user.id !== authStore.user.id" justify="center">
        <div v-if="user.active_contest" class="text-gray-300 hover:text-red-600">
          <nuxt-link :to="RoutesNames.ACTIVE_CONTEST" class="text-gray-300 hover:text-red-600">
            <n-icon :size="32">
              <star fill="currentColor" />
            </n-icon>
          </nuxt-link>
        </div>
        <div v-if="canWriteModel" class="text-gray-300 hover:text-red-600">
          <nuxt-link :to="modelMessengerLink" class="text-gray-300 hover:text-red-600">
            <n-icon :size="32">
              <mail :size="32" />
            </n-icon>
          </nuxt-link>
        </div>
        <div
          :class="['text-gray-300 hover:text-red-600', { 'text-red-600': user.is_favorite }]"
          @click="addToFavourite()"
        >
          <n-icon :size="32">
            <heart :size="32" />
          </n-icon>
        </div>
        <div v-if="user.is_winner" class="text-gray-300 hover:text-red-600">
          <nuxt-link :to="RoutesNames.WINNER_PAGE" class="text-red-600">
            <n-icon :size="32">
              <trophy :size="32" />
            </n-icon>
          </nuxt-link>
        </div>
      </n-space>
      <n-collapse>
        <n-collapse-item title="Показать еще">
          <n-space>
            <div class="mt-[74px]">
              <div>{{ user.info?.size }} cm</div>
              <div class="mt-1">{{ user.info?.waist }} cm</div>
              <div class="mt-1">{{ user.info?.hips }} cm</div>
            </div>
            <div class="h-full">
              <img
                src="~/assets/images/profile/contour.svg"
                alt="Woman params"
                class="object-contain min-w-[100px] w-[100px]"
              />
            </div>
            <n-space vertical justify="center" class="h-full">
              <n-space v-for="(userStat, idx) in userBaseStatistics" :key="idx" size="medium">
                <div class="font-bold">{{ userStat.header }}:</div>
                <div>{{ userStat.value }}</div>
              </n-space>
            </n-space>
          </n-space>
          <n-space vertical class="h-full mt-4">
            <n-space size="medium">
              <div class="font-bold">Страна:</div>
              <img :src="user.country?.icon" class="shadow-lg" />
            </n-space>
            <n-space size="medium">
              <div class="font-bold">Город:</div>
              <div>{{ user.info?.city }}</div>
            </n-space>
            <div>
              {{ user.info?.about }}
            </div>
          </n-space>
        </n-collapse-item>
      </n-collapse>
    </n-space>
  </div>
</template>

<style scoped></style>
