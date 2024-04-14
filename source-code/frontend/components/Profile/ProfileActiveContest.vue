<script setup lang="ts">
  import { computed, h } from 'vue'
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
  import ContestCard from '~/components/contest/ContestCard.vue'
  import personalRepository from '~/services/repository/personalRepository'

  interface IProps {
    activeContest: unknown
  }
  const props = defineProps<IProps>()
  const { activeContest } = toRefs(props)

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

  console.log(activeContest)

  const canAddingFreeLike = computed(() => {
    return !activeContest.value.is_free_payment
  })

  const freeLike = async type => {
    try {
      if (!canAddingFreeLike.value) {
        const data = {
          type: type,
          model_id: activeContest.value.user.id
        }
        await personalRepository.freeVoting(data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const premiumLike = async type => {
    const data = {
      type: type,
      model_id: activeContest.value.user.id
    }
    const response = await personalRepository.premiumVoting(data)
    window.open(response.link, '_blank')
  }

  const canAddingVote = computed(() => {
    return activeContest.value.user.id !== user.value.id
  })
</script>

<template>
  <n-space align="center" vertical justify="center">
    <div class="flex flex-col p-4 rounded-lg overflow-hidden shadow-lg min-w-[250px] min-h-[250px]">
      <div class="mb-2 flex justify-between items-center">
        <n-alert :title="`Рейтинг: ${activeContest.rating}`" type="success" />
      </div>
      <div class="max-h-[500px] overflow-hidden rounded w-full max-h-full">
        <n-image
          :src="activeContest.photo"
          height="100%"
          width="100%"
          max-height="100%"
          max-width="100%"
          class="w-full h-full"
        />
      </div>
      <n-grid v-if="canAddingVote" :x-gap="12" :y-gap="12" :cols="3" class="w-full mt-4">
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
      <div v-else class="font-medium text-lg">
        <n-gradient-text> Привелекайте пользователей для голосования! </n-gradient-text>
      </div>
    </div>
  </n-space>
</template>

<style scoped></style>
