<script setup lang="ts">
  import { Button } from '~/components/ui/button'
  import { RoutesNames } from '~/services/routes-names'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const profileNav = [
    {
      link: RoutesNames.PLATFORM_GALLERY,
      name: t('profile.platform_links.gallery')
    },
    {
      link: RoutesNames.PLATFORM_BLOG,
      name: t('profile.platform_links.blog')
    },
    {
      link: RoutesNames.PLATFORM_BOX,
      name: t('profile.platform_links.box')
    }
  ]
</script>

<template>
  <div>
    <div class="bg-white h-[50px] rounded-lg p-2 flex gap-2">
      <Button
        v-for="(linkItem, index) in profileNav"
        :key="index"
        :variant="linkItem.link.includes(route.meta.key) ? 'default' : 'outline'"
        class="w-full h-full rounded-lg"
        as-child
      >
        <nuxt-link-locale :to="linkItem.link">{{ linkItem.name }}</nuxt-link-locale>
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
