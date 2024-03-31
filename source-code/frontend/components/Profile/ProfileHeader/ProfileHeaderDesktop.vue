<script setup lang="ts">
  import { EUserAccountType } from '~/services/enums'
  import type { IUserBaseStatistics, IUserProfileAction } from '~/services/models'
  import { NButton, NEllipsis, NGrid, NGridItem, NIcon, NSpace, NTooltip } from 'naive-ui'
  import { storeToRefs } from 'pinia'

  interface IProps {
    userActions: IUserProfileAction[]
    userBaseStatistics: IUserBaseStatistics[]
  }

  const props = defineProps<IProps>()

  const userStore = useAuthStore()
  const user = storeToRefs(userStore)
</script>

<template>
  <div class="bg-gray-50/60 min-h-[250px] rounded-2xl overflow-hidden shadow-lg py-4 px-6 w-full">
    <n-grid :x-gap="12" :y-gap="12" :cols="5" class="h-full">
      <n-grid-item>
        <n-space align="center" size="large">
          <n-space vertical>
            <div class="h-[150px] w-[150px] rounded-full overflow-hidden">
              <img v-if="user.avatar" :src="user.avatar" :alt="user.name" class="w-full h-full" />
              <img v-else src="~/assets/images/profile/user-default.png" class="w-full h-full" />
            </div>
            <div class="mt-4 font-bold text-2xl">{{ user.name }}</div>
          </n-space>
          <n-space vertical>
            <div v-for="(userAction, idx) in userActions" :key="idx">
              <n-tooltip trigger="hover" placement="bottom">
                <template #trigger>
                  <n-button @click="userAction.callback(user.id)">
                    <n-icon :size="24" :component="userAction.component" />
                  </n-button>
                </template>
                {{ userAction.tooltip }}
              </n-tooltip>
            </div>
          </n-space>
        </n-space>
      </n-grid-item>
      <n-grid-item v-if="user.role === EUserAccountType.MODEL_ACCOUNT" :span="2">
        <n-space justify="center">
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
      </n-grid-item>
      <n-grid-item v-if="user.role === EUserAccountType.MODEL_ACCOUNT" :span="2">
        <n-space vertical class="h-full">
          <n-space size="medium">
            <div class="font-bold">Страна:</div>
            <n-tooltip trigger="hover" placement="bottom">
              <template #trigger>
                <img :src="user.country?.icon" class="shadow-lg w-[20px] h-[20px]" />
              </template>
              {{ user.country?.name }}
            </n-tooltip>
          </n-space>
          <n-space size="medium">
            <div class="font-bold">Город:</div>
            <div>{{ user.info?.city }}</div>
          </n-space>
          <div>
            <n-ellipsis expand-trigger="click" line-clamp="3" :tooltip="false">
              {{ user.info?.about }}
            </n-ellipsis>
          </div>
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style scoped></style>
