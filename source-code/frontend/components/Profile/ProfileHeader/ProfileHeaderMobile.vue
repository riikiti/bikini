<script setup lang="ts">
  import { useUserStore } from '~/stores/user'
  import type { IUserBaseStatistics, IUserProfileAction } from '~/services/models'
  import { NButton, NCollapse, NCollapseItem, NIcon, NSpace } from 'naive-ui'

  interface IProps {
    userActions: IUserProfileAction[]
    userBaseStatistics: IUserBaseStatistics[]
  }

  const props = defineProps<IProps>()

  const userStore = useUserStore()
</script>

<template>
  <div>
    <n-space vertical size="large">
      <n-space vertical align="center">
        <div class="h-[150px] w-[150px] rounded-full overflow-hidden">
          <img :src="userStore.avatar" :alt="userStore.name" class="w-full h-full" />
        </div>
        <div class="mt-4 font-bold text-2xl">{{ userStore.name }}</div>
      </n-space>
      <n-space justify="center">
        <div v-for="(userAction, idx) in userActions" :key="idx">
          <n-button @click="userAction.callback(userStore.id)">
            <n-icon :size="24" :component="userAction.component" />
          </n-button>
        </div>
      </n-space>
      <n-collapse>
        <n-collapse-item title="Показать еще">
          <n-space>
            <div class="mt-[74px]">
              <div>{{ userStore.info?.size }} cm</div>
              <div class="mt-1">{{ userStore.info?.waist }} cm</div>
              <div class="mt-1">{{ userStore.info?.hips }} cm</div>
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
              <img :src="userStore.country?.icon" class="shadow-lg" />
            </n-space>
            <n-space size="medium">
              <div class="font-bold">Город:</div>
              <div>{{ userStore.info?.city }}</div>
            </n-space>
            <div>
              {{ userStore.info?.about }}
            </div>
          </n-space>
        </n-collapse-item>
      </n-collapse>
    </n-space>
  </div>
</template>

<style scoped></style>
