<script setup lang="ts">
  import { useSettingsStore } from '~/stores/settings'
  import { useAuthStore } from '#imports'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'
  import {
    NConfigProvider,
    NDialogProvider,
    NGlobalStyle,
    NLoadingBarProvider,
    NMessageProvider,
    NModalProvider,
    NNotificationProvider
  } from 'naive-ui'

  const authStore = useAuthStore()
  const settingsStore = useSettingsStore()
  const { isMobile } = storeToRefs(settingsStore)

  const configProviderSettings = {
    breakpoints: {
      xs: 500,
      s: 640,
      m: 1024,
      l: 1280
    }
  }

  onMounted(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    isMobile.value = mq.matches
    mq.addEventListener('change', () => {
      isMobile.value = mq.matches
    })
  })
  onMounted(async () => {
    await authStore.profile()
    await settingsStore.setSettings()
  })
</script>
<template>
  <div class="h-screen">
    <n-config-provider
      :breakpoints="configProviderSettings.breakpoints"
      preflight-style-disabled
      class="h-full"
    >
      <n-loading-bar-provider class="h-full">
        <n-message-provider>
          <n-notification-provider>
            <n-modal-provider>
              <n-dialog-provider>
                <NuxtLayout>
                  <NuxtPage />
                </NuxtLayout>
              </n-dialog-provider>
            </n-modal-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-loading-bar-provider>
      <n-global-style />
    </n-config-provider>
  </div>
</template>
