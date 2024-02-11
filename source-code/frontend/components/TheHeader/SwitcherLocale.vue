<script setup lang="ts">
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
  } from '~/components/ui/dropdown-menu'
  import { useI18n } from 'vue-i18n'
  import { FlagDeIcon, FlagEnIcon, FlagRuIcon } from '~/components/image-components/icons'
  import { useSwitchLocalePath } from '#imports'
  import GhostButton from '~/components/TheHeader/GhostButton.vue'

  const { locale, localeCodes, setLocale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const getFlagComponent = (localeCode: string) => {
    const flags = {
      en: FlagEnIcon,
      ru: FlagRuIcon,
      de: FlagDeIcon
    }
    return flags[localeCode]
  }
  const switchLocale = (newLocale: string) => {
    setLocale(newLocale)
    window.location.href = switchLocalePath(newLocale)
  }
</script>

<template>
  <dropdown-menu>
    <dropdown-menu-trigger>
      <ghost-button class="relative h-8 rounded-full">
        <component :is="getFlagComponent(locale)" />
      </ghost-button>
    </dropdown-menu-trigger>
    <dropdown-menu-content class="w-8 min-w-11">
      <dropdown-menu-item
        v-for="(localeItem, index) in localeCodes"
        :key="index"
        @click="switchLocale(localeItem)"
      >
        <component :is="getFlagComponent(localeItem)" class="w-4 h-4" />
      </dropdown-menu-item>
    </dropdown-menu-content>
  </dropdown-menu>
</template>

<style scoped></style>
