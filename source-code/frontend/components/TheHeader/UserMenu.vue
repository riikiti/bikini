<script setup lang="ts">
  import { useLocalePath, useI18n } from '#imports'
  import { RoutesNames } from '~/services/routes-names'
  import { NButton, NSpace } from 'naive-ui'

  const { t } = useI18n()
  const localePath = useLocalePath()
  const userMenu = [
    {
      href: localePath(RoutesNames.USERS),
      name: t('header.users')
    },
    {
      href: localePath(RoutesNames.BOX),
      name: t('header.box')
    },
    {
      href: localePath(RoutesNames.PORTFOLIO),
      name: t('header.portfolio')
    }
  ]
</script>

<template>
  <nav>
    <n-space>
      <n-button v-for="(link, index) in userMenu" :key="index" quaternary tag="a">
        {{ link.name }}
      </n-button>
    </n-space>
  </nav>
</template>

<style scoped></style>
