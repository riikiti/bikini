<script setup lang="ts">
  import { useSettingsStore } from '~/stores/settings'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'
  import {
    NConfigProvider,
    NGlobalStyle,
    NLoadingBarProvider,
    NMessageProvider,
    NNotificationProvider
  } from 'naive-ui'

  const settingsStore = useSettingsStore()
  const { isMobile } = storeToRefs(settingsStore)
  onMounted(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    isMobile.value = mq.matches
    mq.addEventListener('change', () => {
      isMobile.value = mq.matches
    })
  })
</script>
<template>
  <div class="h-screen">
    <n-config-provider preflight-style-disabled>
      <n-loading-bar-provider>
        <n-message-provider>
          <n-notification-provider>
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
          </n-notification-provider>
        </n-message-provider>
      </n-loading-bar-provider>
      <n-global-style />
    </n-config-provider>
  </div>
</template>
