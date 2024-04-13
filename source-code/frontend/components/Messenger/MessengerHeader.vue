<script setup lang="ts">
  import { NImage, NSpace } from 'naive-ui'

  interface IMessengerUser {
    id: number
    name: string | null
    avatar: string | null
  }

  interface IProps {
    user: IMessengerUser
  }

  const props = defineProps<IProps>()
</script>

<template>
  <n-space size="large">
    <div class="h-[250px] w-[250px] relative overflow-hidden rounded-md">
      <n-image
        v-if="user?.avatar"
        :src="user?.avatar"
        fallback-src="~/assets/images/profile/user-default.png"
        width="100%"
        height="100%"
        object-fit="cover"
        class="w-full h-full"
      />
      <img
        v-else
        src="~/assets/images/profile/user-default.png"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="space-y-1">
      <h3 class="text-xl md:text-3xl font-medium leading-none">
        {{ user?.name }}
      </h3>
    </div>
  </n-space>
</template>

<style scoped></style>
