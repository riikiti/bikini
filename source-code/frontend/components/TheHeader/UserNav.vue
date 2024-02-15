<script setup lang="ts">
  import { toRefs } from 'vue'
  import { Button } from '~/components/ui/button'
  import type { ILinkSettings } from '~/services/models'
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem
  } from '~/components/ui/dropdown-menu'
  import UserAvatar from '~/components/TheHeader/UserAvatar.vue'
  import { useUserStore } from '~/stores/user'

  interface IProps {
    userMenu: ILinkSettings[]
  }
  const props = defineProps<IProps>()
  const { userMenu } = toRefs(props)

  const userStore = useUserStore()
  const logoutUser = () => {
    console.log('logout')
  }
</script>

<template>
  <dropdown-menu>
    <dropdown-menu-trigger as-child>
      <button variant="ghost" class="relative h-8 rounded-full">
        <user-avatar :img="userStore.avatar" :name="userStore.username" />
      </button>
    </dropdown-menu-trigger>
    <dropdown-menu-content class="w-56 px-2" align="end">
      <DropdownMenuLabel class="font-normal flex">
        <a href="/portfolio/profile" class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">{{ userStore.username }}</p>
          <p class="text-xs leading-none text-muted-foreground">{{ userStore.email }}</p>
        </a>
      </DropdownMenuLabel>
      <dropdown-menu-separator />
      <dropdown-menu-group>
        <dropdown-menu-item v-for="(link, index) in userMenu" :key="index">
          <a :href="link.href">{{ link.name }}</a>
        </dropdown-menu-item>
        <dropdown-menu-item @click="logoutUser()">
          <div>Logout</div>
        </dropdown-menu-item>
      </dropdown-menu-group>
    </dropdown-menu-content>
  </dropdown-menu>
</template>

<style scoped></style>
