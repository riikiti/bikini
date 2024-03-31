<script setup lang="ts">
  import { h, ref, type Component } from 'vue'
  import UserAvatar from '~/components/TheHeader/UserAvatar.vue'
  import { NDropdown, NIcon } from 'naive-ui'
  import { useI18n, useRouter } from '#imports'
  import { Settings, User, Wallet, LogOut } from 'lucide-vue-next'
  import { RoutesNames } from '~/services/routes-names'
  import { useAuthStore } from '#imports'
  import { storeToRefs } from 'pinia'

  const router = useRouter()

  const { t } = useI18n()

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

  enum UserAction {
    'SETTINGS',
    'PROFILE',
    'FINANCE',
    'LOGOUT'
  }
  const renderIcon = (icon: Component) => {
    return () => {
      return h(NIcon, null, {
        default: () => h(icon)
      })
    }
  }

  const logout = () => {
    userStore.logout()
    router.push(RoutesNames.MAIN)
  }

  const userOptions = ref([
    {
      label: () => t('header.profile'),
      key: UserAction.PROFILE,
      icon: renderIcon(User)
    },
    {
      label: () => t('header.finance'),
      key: UserAction.FINANCE,
      icon: renderIcon(Wallet)
    },
    {
      label: () => t('header.settings'),
      key: UserAction.SETTINGS,
      icon: renderIcon(Settings)
    },
    {
      label: () => t('header.logout'),
      key: UserAction.LOGOUT,
      icon: renderIcon(LogOut)
    }
  ])

  const selectUserOption = (key: UserAction) => {
    switch (key) {
      case UserAction.SETTINGS:
        router.push(RoutesNames.SETTINGS)
        break
      case UserAction.FINANCE:
        router.push(RoutesNames.FINANCE)
        break
      case UserAction.PROFILE:
        router.push(RoutesNames.PROFILE)
        break
      case UserAction.LOGOUT:
        logout()
        break
      default:
        break
    }
  }
</script>

<template>
  <div v-if="user">
    <n-dropdown trigger="click" :options="userOptions" @select="selectUserOption">
      <user-avatar :img="user.avatar" :name="user.name" />
    </n-dropdown>
  </div>
</template>

<style scoped></style>
