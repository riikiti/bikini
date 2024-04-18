<script setup lang="ts">
  import { h, computed, toRefs } from 'vue'
  import { ThumbsUp } from 'lucide-vue-next'
  import {
    NAlert,
    NButton,
    NGradientText,
    NGrid,
    NGridItem,
    NIcon,
    NImage,
    NSpace,
    NTooltip
  } from 'naive-ui'
  import type { IContestUser } from '~/services/models'
  import personalRepository from '~/services/repository/personalRepository'
  import { RoutesNames } from '~/services/routes-names'

  interface IProps {
    contestItem: IContestUser
    contestName?: string
    isEndingContest?: boolean
  }
  const props = withDefaults(defineProps<IProps>(), {
    contestName: '',
    isEndingContest: false
  })
  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

  const router = useRouter()

  const { contestItem } = toRefs(props)

  const emits = defineEmits<{
    (e: 'save', id: number): void
  }>()

  const canAddingFreeLike = computed(() => {
    return contestItem.value.is_free_payment
  })

  const freeLike = async type => {
    try {
      if (!canAddingFreeLike.value) {
        const data = {
          type: type,
          model_id: contestItem.value.user.id
        }
        await personalRepository.freeVoting(data)
        emits('save')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const premiumLike = async type => {
    const data = {
      type: type,
      model_id: contestItem.value.user.id
    }
    const response = await personalRepository.premiumVoting(data)
    window.open(response.link, '_blank')
    emits('save')
  }

  const canAddingVote = computed(() => {
    return contestItem.value.user.id !== user.value.id
  })
</script>

<template>
  <div
    :class="[
      'flex flex-col p-4 rounded-lg overflow-hidden shadow',
      { 'shadow-blue-300 shadow-lg': !canAddingVote }
    ]"
  >
    <div class="mb-2 flex justify-between items-center">
      <div v-if="contestName">Конкурс: {{ contestName }}</div>
      <n-alert :title="'Рейтинг:' + contestItem.rating" type="success" />
    </div>
    <div
      class="h-[250px] overflow-hidden rounded w-full max-h-full hover:cursor-pointer"
      @click="router.push(RoutesNames.PROFILE + `${contestItem.user.id}`)"
    >
      <img
        :src="contestItem.photo"
        class="w-full h-full max-w-full max-h-full aspect-square object-fill"
      />
    </div>
    <n-grid
      v-if="!isEndingContest && canAddingVote"
      :x-gap="12"
      :y-gap="12"
      :cols="3"
      class="w-full mt-4"
    >
      <n-grid-item>
        <n-space vertical>
          <n-tooltip trigger="hover" placement="bottom">
            <template #trigger>
              <n-button
                strong
                secondary
                size="large"
                circle
                type="warning"
                :disabled="canAddingFreeLike"
                @click="freeLike(1)"
              >
                <n-icon :size="24" :component="h(ThumbsUp)" />
              </n-button>
            </template>
            <div class="text-center">
              <span><b class="font-extrabold">+1</b> балл к рейтингу участницы</span>
            </div>
          </n-tooltip>
        </n-space>
      </n-grid-item>
      <n-grid-item :span="2">
        <n-space vertical align="end">
          <n-space>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <n-button
                  strong
                  secondary
                  size="large"
                  circle
                  type="warning"
                  @click="premiumLike(5)"
                >
                  +5
                </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <n-button
                  strong
                  secondary
                  size="large"
                  circle
                  type="warning"
                  @click="premiumLike(15)"
                >
                  +15
                </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <n-button
                  strong
                  secondary
                  size="large"
                  circle
                  type="warning"
                  @click="premiumLike(25)"
                >
                  +25
                </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <n-button
                  strong
                  secondary
                  size="large"
                  circle
                  type="warning"
                  @click="premiumLike(50)"
                >
                  +50
                </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
          </n-space>
        </n-space>
      </n-grid-item>
    </n-grid>
    <div v-else class="font-medium text-lg w-full break-words text-center my-4">
      <n-gradient-text>Это ВЫ! </n-gradient-text>
    </div>
    <n-space class="mt-4">
      <nuxt-link
        :to="RoutesNames.PROFILE + `${contestItem.user.id}`"
        class="no-underline text-lg font-bold text-black"
      >
        {{ contestItem.user.name }}
      </nuxt-link>
    </n-space>
  </div>
</template>

<style scoped></style>
