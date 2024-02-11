<script setup lang="ts">
  import { reactive } from 'vue'
  import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar'
  import { Button } from '~/components/ui/button'
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuGroup,
    DropdownMenuItem
  } from '~/components/ui/dropdown-menu'

  const user = reactive({
    img: 'https://www.shadcn-vue.com/avatars/01.png',
    username: 'usertest228',
    email: 'test228@mail.ru'
  })
  const navMenu = [
    {
      href: '/blog',
      name: 'Blog'
    },
    {
      href: '/box',
      name: 'Box'
    },
    {
      href: '/settings',
      name: 'Settings'
    },
    {
      href: '/finance',
      name: 'Finance'
    },
    {
      href: '/portfolio',
      name: 'Portfolio'
    },
    {
      href: '/portfolio',
      name: 'Portfolio'
    }
  ]
  const logoutUser = () => {
    console.log('logout')
  }
</script>

<template>
  <dropdown-menu>
    <dropdown-menu-trigger as-child>
      <button variant="ghost" class="relative h-8 rounded-full">
        <div class="flex items-center gap-2">
          <avatar class="h-8 w-8">
            <avatar-image :src="user.img" alt="image" />
            <avatar-fallback>SC</avatar-fallback>
          </avatar>
          <div>{{ user.username }}</div>
        </div>
      </button>
    </dropdown-menu-trigger>
    <dropdown-menu-content class="w-56 px-2" align="end">
      <DropdownMenuLabel class="font-normal flex">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">{{ user.username }}</p>
          <p class="text-xs leading-none text-muted-foreground">{{ user.email }}</p>
        </div>
      </DropdownMenuLabel>
      <dropdown-menu-separator />
      <dropdown-menu-group>
        <dropdown-menu-item v-for="(link, index) in navMenu" :key="index">
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
