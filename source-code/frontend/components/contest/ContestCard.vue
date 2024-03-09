<script setup lang="ts">
  import { h, computed, toRefs } from 'vue'
  import { ThumbsUp } from 'lucide-vue-next'
  import { NAlert, NButton, NGrid, NGridItem, NIcon, NImage, NSpace, NTooltip } from 'naive-ui'
  import type { IContestUser } from '~/services/models'

  interface IProps {
    contestItem: IContestUser
    contestName?: string
  }
  const props = withDefaults(defineProps<IProps>(), {
    contestName: ''
  })

  const { contestItem } = toRefs(props)

  const userCurrentAge = computed(() => {
    return new Date().getFullYear() - contestItem.value.user.info?.birthdate
  })
</script>

<template>
  <div class="flex flex-col p-4 rounded-lg overflow-hidden shadow-2xl">
    <div class="mb-2 flex justify-between items-center">
      <div v-if="contestName">Конкурс: {{ contestName }}</div>
      <n-alert :title="'Рейтинг:' + contestItem.rating" type="success" />
    </div>
    <div class="max-h-[500px]">
      <n-image :src="contestItem.image" height="auto" width="100%" />
    </div>
    <!--    <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" class="max-h-[500px]" />-->
    <n-grid :x-gap="12" :y-gap="12" :cols="3" class="w-full mt-4">
      <n-grid-item>
        <n-space vertical>
          <n-tooltip trigger="hover" placement="bottom">
            <template #trigger>
              <n-button strong secondary size="large" circle type="warning">
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
                <n-button strong secondary size="large" circle type="warning"> +5 </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <n-button strong secondary size="large" circle type="warning"> +15 </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <n-button strong secondary size="large" circle type="warning"> +25 </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <n-button strong secondary size="large" circle type="warning"> +50 </n-button>
              </template>
              <div class="text-center">Участница увидит что именно <b>ВЫ</b> добавили баллы</div>
            </n-tooltip>
          </n-space>
        </n-space>
      </n-grid-item>
    </n-grid>
    <n-space class="mt-4">
      <div class="text-lg font-bold">{{ contestItem.user.name }}, {{ userCurrentAge }}</div>
    </n-space>
  </div>
</template>

<style scoped></style>
