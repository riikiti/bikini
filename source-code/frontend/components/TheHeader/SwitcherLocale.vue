<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { FlagDeIcon, FlagEnIcon, FlagRuIcon } from '~/components/image-components/icons'
  import { useSwitchLocalePath } from '#imports'
  import { NButton, NPopselect, type SelectOption } from 'naive-ui'
  import { ref, h } from 'vue'

  const { locale, setLocale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const getFlagComponent = (localeCode: string) => {
    const flags = {
      en: FlagEnIcon,
      ru: FlagRuIcon,
      de: FlagDeIcon
    }
    return flags[localeCode]
  }
  const value = ref(locale)
  const options = ref([
    {
      value: 'en'
    },
    {
      value: 'ru'
    },
    {
      value: 'de'
    }
  ])

  const switchLocale = (newLocale: string) => {
    setLocale(newLocale)
    window.location.href = switchLocalePath(newLocale)
  }

  const renderOption: SelectOption = option => {
    return h(getFlagComponent(option?.value))
  }
</script>

<template>
  <n-popselect
    v-model:value="value"
    :on-update:value="val => switchLocale(val)"
    :options="options"
    size="medium"
    trigger="click"
    :render-label="option => renderOption(option)"
  >
    <n-button>
      <component :is="getFlagComponent(value)" />
    </n-button>
  </n-popselect>
</template>

<style scoped></style>
