<script setup lang="ts">
  import { RoutesNames } from '~/services/routes-names'
  import { NBreadcrumb, NBreadcrumbItem, NSpace } from 'naive-ui'
  import { useI18n, useLocalePath, useSettingsStore } from '#imports'

  const { t } = useI18n()
  const localePath = useLocalePath()

  const settingsStore = useSettingsStore()

  const authStore = useAuthStore()

  const staticUrls = [
    {
      route: RoutesNames.STATIC_PRIVACY,
      name: 'Политика конфиденциальности'
    },
    {
      route: RoutesNames.STATIC_USER_PRIVACY,
      name: 'Пользовательское соглашение'
    },
    {
      route: RoutesNames.STATIC_TERMS,
      name: 'Правила пользования сайтом'
    },
    {
      route: RoutesNames.STATIC_RULES,
      name: 'Правила Конкурса Bikini Star'
    }
  ]
</script>

<template>
  <div class="py-8 px-8 bg-gray-300 rounded">
    <n-space vertical>
      <n-breadcrumb>
        <n-breadcrumb-item v-for="url in staticUrls">
          <nuxt-link :to="url.route">{{ url.name }}</nuxt-link>
        </n-breadcrumb-item>
      </n-breadcrumb>
      <n-space align="center">
        <nuxt-link :to="localePath(RoutesNames.MAIN)" class="no-underline cursor-pointer">
          <div class="font-extrabold text-slate-600 text-lg md:text-2xl dark:text-white">
            ★ Bikini Star
          </div>
        </nuxt-link>
        <nuxt-link
          v-if="authStore.isAuth"
          class="text-gray-800 underline-offset-2 text-lg font-medium"
          :to="RoutesNames.MESSENGER + `/${settingsStore.moderatorId}`"
          >Контакты</nuxt-link
        >
      </n-space>
    </n-space>
  </div>
</template>

<style scoped></style>
