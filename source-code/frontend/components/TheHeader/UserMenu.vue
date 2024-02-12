<script setup lang="ts">
  import { useLocalePath, useI18n } from '#imports'
  import { RoutesNames } from '~/services/routes-names'
  import GhostButton from '~/components/TheHeader/GhostButton.vue'

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
    <ul class="flex items-center gap-2">
      <li v-for="(link, index) in userMenu" :key="index">
        <ghost-button :link="link.href">
          {{ link.name }}
        </ghost-button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
