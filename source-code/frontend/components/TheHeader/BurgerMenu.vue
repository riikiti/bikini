<script setup lang="ts">
  import { Menu, X } from 'lucide-vue-next'
  import GhostButton from '~/components/TheHeader/GhostButton.vue'
  import { ref, toRefs } from 'vue'
  import type { ILinkSettings } from '~/services/models'
  import UserAvatar from '~/components/TheHeader/UserAvatar.vue'
  import { useUserStore } from '~/stores/user'
  import { useI18n } from '#imports'

  interface IProps {
    userMenu: ILinkSettings[]
  }
  const props = defineProps<IProps>()

  const { t } = useI18n()
  const userStore = useUserStore()
  const { userMenu } = toRefs(props)
  const isOpen = ref(false)
  const toggleOpen = () => {
    isOpen.value = !isOpen.value
  }
</script>

<template>
  <div class="h-9 flex items-center z-10">
    <ghost-button class="transition-all" @click="toggleOpen()">
      <component :is="isOpen ? X : Menu"></component>
    </ghost-button>
    <div
      v-if="isOpen"
      class="fixed right-0 bottom-0 left-0 top-11 bg-white dark:bg-background z-50"
    >
      <div class="flex flex-col px-4 py-2 border-b">
        <user-avatar :img="userStore.avatar" :name="userStore.username" :email="userStore.email" />
      </div>
      <div class="mt-2">
        <div v-for="(link, index) in userMenu" :key="index" class="px-4 py-2 border-b">
          <a :href="link.href">{{ link.name }}</a>
        </div>
        <div class="px-4 py-2 border-b">
          {{ $t('header.logout') }}
        </div>
      </div>
    </div>
  </div>
</template>
