<script setup lang="ts">
  import { RoutesNames } from '~/services/routes-names'
  import type { ICountry } from '~/services/models'
  import type { IUserModelMessageRules } from '~/services/models/user'
  import { Heart, Mail, Star, BookmarkPlus, GalleryHorizontalEnd, Trophy } from 'lucide-vue-next'
  import { h, toRefs, computed } from 'vue'
  import { NIcon, NImage, NTag } from 'naive-ui'
  interface IUser {
    id: number
    name: string
    avatar?: string
    country: ICountry
    active_contest: boolean
    is_favorite: boolean
    is_winner: boolean
    info: IInfo
  }

  interface IInfo {
    messages_status: IUserModelMessageRules
  }
  interface IProps {
    card: IUser
  }
  const props = defineProps<IProps>()
  const { card } = toRefs(props)

  const canWriteModel = computed(() => {
    const {
      info: { messages_status }
    } = card.value

    if (messages_status) {
      for (const status in messages_status) {
        if (messages_status[status] !== false && messages_status[status] !== null) {
          return true
        }
      }
    }

    return false
  })
</script>

<template>
  <div class="rounded overflow-hidden relative bg-white dark:bg-muted border shadow-accent">
    <div class="absolute top-2 left-2 z-20">
      <n-tag v-if="card?.rating" round strong :bordered="false">
        <template #icon>
          <n-icon :component="h(Trophy)" />
        </template>
        {{ card.rating }}
      </n-tag>
    </div>
    <div class="h-[250px] relative overflow-hidden rounded-md">
      <n-image
        v-if="card.avatar"
        :src="card.avatar"
        fallback-src="~/assets/images/profile/user-default.png"
        width="100%"
        height="100%"
        object-fit="cover"
        class="w-full"
      />
      <img
        v-else
        src="~/assets/images/profile/user-default.png"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="space-y-1 mt-3">
      <h3 class="text-xl font-medium leading-none">
        {{ card.name }}
      </h3>
    </div>
    <div class="grid grid-cols-5 mt-2 self-center pb-2 pt-2">
      <div v-if="card.active_contest" class="text-gray-300 hover:text-red-600">
        <router-link :to="RoutesNames.ACTIVE_CONTEST" class="text-gray-300 hover:text-red-600">
          <n-icon :size="32">
            <heart :size="32" />
          </n-icon>
        </router-link>
      </div>
      <div v-if="canWriteModel" class="text-gray-300 hover:text-red-600">
        <n-icon :size="32">
          <mail :size="32" />
        </n-icon>
      </div>
      <div v-if="card.active_contest" class="text-gray-300 hover:text-red-600">
        <router-link :to="RoutesNames.ACTIVE_CONTEST" class="text-gray-300 hover:text-red-600">
          <n-icon :size="32">
            <star fill="currentColor" />
          </n-icon>
        </router-link>
      </div>
      <div :class="['text-gray-300 hover:text-red-600', { 'text-red-600': card.is_favorite }]">
        <n-icon :size="32">
          <bookmark-plus :size="32" />
        </n-icon>
      </div>
      <div v-if="card.is_winner" class="text-gray-300 hover:text-red-600">
        <router-link :to="RoutesNames.WINNER_PAGE" class="text-red-600">
          <n-icon :size="32">
            <trophy :size="32" />
          </n-icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
