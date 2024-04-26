<script setup lang="ts">
  import { Menu, X } from 'lucide-vue-next'
  import { ref, toRefs } from 'vue'
  import type { ILinkSettings } from '~/services/models'
  import { storeToRefs } from 'pinia'
  import { RoutesNames } from '~/services/routes-names'
  import { useRouter, useAuthStore } from '#imports'

  interface IProps {
    userMenu: ILinkSettings[]
  }
  const props = defineProps<IProps>()

  const router = useRouter()

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)
  const { userMenu } = toRefs(props)
  const isOpen = ref(false)
  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }

  const logout = () => {
    userStore.logout()
    router.push(RoutesNames.MAIN)
    isOpen.value = false
  }

  const redirectOnPage = (link: string) => {
    router.push(link)
    isOpen.value = false
  }
</script>

<template>
  <div class="flex justify-center items-center">
    <n-button class="transition-all flex items-center justify-center" @click="toggleOpen()">
      <component :is="isOpen ? X : Menu"></component>
    </n-button>
    <div
      v-if="isOpen"
      class="fixed right-0 bottom-0 left-0 top-10 bg-gray-100 dark:bg-gray-100 z-[200]"
    >
      <div class="mt-2 flex flex-col items-end">
        <div v-for="(link, index) in userMenu" :key="index" class="px-4 py-2 border-b text-black">
          <span class="text-black no-underline text-[16px]" @click="redirectOnPage(link.href)">{{
            link.name
          }}</span>
        </div>
        <span
          class="px-4 py-2 border-b text-black no-underline text-[16px]"
          @click="redirectOnPage(RoutesNames.PROFILE + `${user.id}`)"
        >
          {{ user.name }}
        </span>
        <div class="px-4 py-2 border-b text-black no-underline text-[16px]" @click="logout()">
          {{ $t('header.logout') }}
        </div>
      </div>
    </div>
  </div>
</template>
