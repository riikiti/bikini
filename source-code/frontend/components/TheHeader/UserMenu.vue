<script setup lang="ts">
  import { useLocalePath, useI18n } from '#imports'
  import { RoutesNames } from '~/services/routes-names'
  import { NButton, NSpace } from 'naive-ui'

  const { t } = useI18n()
  const localePath = useLocalePath()
  const userMenu = [
    {
      href: localePath(RoutesNames.WINNER_PAGE),
      name: t('header.winner')
    },
    {
      href: localePath(RoutesNames.USERS),
      name: t('header.users')
    }
  ]
</script>

<template>
  <nav>
    <n-space :size="0">
      <router-link v-for="(link, index) in userMenu" :key="index" :to="link.href">
        <n-button :size="'small'" quaternary>
          {{ link.name }}
        </n-button>
      </router-link>
    </n-space>
  </nav>
</template>

<style scoped></style>
