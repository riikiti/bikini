<script setup lang="ts">
  import { Mail, Heart } from 'lucide-vue-next'
  import UserNav from '~/components/TheHeader/UserNav.vue'
  import SwitcherLocale from '~/components/TheHeader/SwitcherLocale.vue'
  import UserMenu from '~/components/TheHeader/UserMenu.vue'
  import { useI18n, useLocalePath } from '#imports'
  import { RoutesNames } from '~/services/routes-names'
  import BurgerMenu from '~/components/TheHeader/BurgerMenu.vue'
  import { useSettingsStore } from '#imports'
  import { storeToRefs } from 'pinia'
  import type { ILinkSettings } from '~/services/models'
  import { NBadge, NButton } from 'naive-ui'

  const { t } = useI18n()
  const localePath = useLocalePath()
  const userLinks: ILinkSettings[] = [
    {
      href: localePath(RoutesNames.BLOG),
      name: t('header.blog')
    },
    {
      href: localePath(RoutesNames.BOX),
      name: t('header.box')
    },
    {
      href: localePath(RoutesNames.SETTINGS),
      name: t('header.settings')
    },
    {
      href: localePath(RoutesNames.FINANCE),
      name: t('header.finance')
    },
    {
      href: localePath(RoutesNames.PORTFOLIO),
      name: t('header.portfolio')
    }
  ]

  const settingsStore = useSettingsStore()
  const { isMobile, isBeta } = storeToRefs(settingsStore)
</script>

<template>
  <div class="sticky top-0 z-30 shadow-lg bg-white">
    <div class="max-w-[1368px] mx-auto px-2 sm:px-4">
      <div class="flex justify-between h-10 py-4 sm:h-16 sm:py-0">
        <div class="flex gap-2">
          <div class="shrink-0 flex items-center">
            <nuxt-link
              :to="localePath(RoutesNames.ACTIVE_CONTEST)"
              class="no-underline cursor-pointer"
            >
              <div class="font-extrabold text-slate-600 text-lg md:text-2xl dark:text-white">
                ★ Bikini Star
              </div>
            </nuxt-link>
          </div>
          <div v-if="!isBeta" class="flex items-center">
            <switcher-locale />
          </div>
          <div v-if="!isMobile" class="ml-3 flex items-center gap-3">
            <user-menu />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <router-link :to="localePath(RoutesNames.FAVORITES)">
            <n-button quaternary size="medium">
              <n-badge :value="settingsStore.favouritesCount">
                <heart />
              </n-badge>
            </n-button>
          </router-link>
          <router-link :to="localePath(RoutesNames.MESSENGER)">
            <n-button quaternary size="medium">
              <mail />
            </n-button>
          </router-link>
          <user-nav v-if="!isMobile" :user-menu="userLinks" />
          <burger-menu v-if="isMobile" :user-menu="userLinks" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
