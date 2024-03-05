<script setup lang="ts">
  import { NAvatar, NButton, NSpace } from 'naive-ui'
  interface IProps {
    img: string
    name: string
    email?: string
    fallbackName?: string
  }
  withDefaults(defineProps<IProps>(), {
    fallbackName: 'SC',
    email: ''
  })
</script>

<template>
  <n-button quaternary size="medium">
    <n-space align="center">
      <n-avatar
        src="~/assets/images/header/user-empty.svg"
        :fallback-src="img"
        size="medium"
        round
      />
      <div class="flex flex-col gap-0.5">
        <div>{{ name }}</div>
        <div v-if="email" class="font-light italic">{{ email }}</div>
        <slot name="additional" />
      </div>
    </n-space>
  </n-button>
</template>
