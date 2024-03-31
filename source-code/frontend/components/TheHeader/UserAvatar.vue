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
  <div class="max-w-[200px]]">
    <n-button quaternary size="medium">
      <n-space align="center" :wrap="false">
        <n-avatar
          src="https://vimcare.com/assets/empty_user-e28be29d09f6ea715f3916ebebb525103ea068eea8842da42b414206c2523d01.png"
          :fallback-src="img"
          size="medium"
          round
        />
        <div class="flex flex-col gap-0.5">
          <div class="truncate max-w-[100px]">{{ name }}</div>
          <div v-if="email" class="font-light italic">{{ email }}</div>
          <slot name="additional" />
        </div>
      </n-space>
    </n-button>
  </div>
</template>
