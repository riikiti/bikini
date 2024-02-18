<script setup lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
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
  <div class="flex items-center gap-2">
    <avatar class="h-8 w-8">
      <avatar-image :src="img" alt="image" />
      <avatar-fallback>{{ fallbackName }}</avatar-fallback>
    </avatar>
    <div class="flex flex-col gap-0.5">
      <div>{{ name }}</div>
      <div v-if="email" class="font-light italic">{{ email }}</div>
      <slot name="additional" />
    </div>
  </div>
</template>
