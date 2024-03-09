<script setup lang="ts">
  import { definePageMeta, useRouter, useRoute, useLocalePath, useI18n } from '#imports'
  import {
    NAvatar,
    NButton,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NPageHeader,
    NSpace,
    useMessage
  } from 'naive-ui'

  definePageMeta({
    layout: 'profile-layout',
    key: 'detail_messge',
    middleware: 'profile'
  })

  const route = useRoute()

  const { t } = useI18n()
  const localePath = useLocalePath()

  const message = useMessage()

  const handleBack = () => {
    message.info('[onBack]')
  }

  const router = useRouter()

  console.log(route)
</script>

<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header>
        <n-page-header subtitle="A podcast to improve designs" @back="handleBack">
          <template #title>
            <a href="https://anyway.fm/" style="text-decoration: none; color: inherit">
              Anyway.FM
            </a>
          </template>
          <template #avatar>
            <n-avatar
              src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
            />
          </template>
          <template #extra>
            <n-space>
              <n-button>Refresh</n-button>
            </n-space>
          </template>
        </n-page-header>
        <div>{{ route.params.id }}</div>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <div>fasdffds</div>
      </n-layout-content>
      <n-layout-footer>Chengfu Road</n-layout-footer>
    </n-layout>
  </n-space>
</template>

<style scoped></style>
