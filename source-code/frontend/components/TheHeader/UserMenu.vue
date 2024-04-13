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
      <n-button
        v-for="(link, index) in userMenu"
        :key="index"
        :size="'small'"
        quaternary
        tag="a"
        :href="link.href"
      >
        {{ link.name }}
      </n-button>
    </n-space>
  </nav>
</template>

<style scoped></style>
