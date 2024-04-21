<script setup lang="ts">
  import { NCard, NTabPane, NTabs } from 'naive-ui'
  import GeneralSettingsForm from '~/components/settings/GeneralSettingsForm.vue'
  import ModelSettingsForm from '~/components/settings/ModelSettingsForm.vue'
  import { useUserStore } from '~/stores/user'
  import { EUserAccountType } from '~/services/enums'
  import { definePageMeta } from '#imports'
  import { ref } from 'vue'
  import personalRepository from '~/services/repository/personalRepository'
  import { RoutesNames } from '~/services/routes-names'

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)
  const settingsStore = useSettingsStore()
  const { moderatorId } = storeToRefs(settingsStore)

  definePageMeta({
    layout: 'profile-layout',
    key: 'settings',
    middleware: 'auth'
  })
  const settingsList = ref(null)

  const fetchSettingsList = async () => {
    const response = await personalRepository.settingsList()
    console.log(response)
    settingsList.value = response
  }
  onMounted(async () => {
    await fetchSettingsList()
  })
</script>

<template>
  <n-tabs v-if="user.role === EUserAccountType.MODEL_ACCOUNT" type="segment" animated>
    <n-tab-pane name="oasis" tab="Общие настройки">
      <div class="p-4 sm:p-8 border border-solid rounded border-gray-400">
        <div class="text-xl sm:text-3xl font-medium mb-4">Общие настройки</div>
        <div class="text-gray-400 text-lg mb-4">
          Для смены е-мейла обратитесь к
          <nuxt-link :to="RoutesNames.MESSENGER + `/${moderatorId}`" class="underline text-gray-400"
            >модератору</nuxt-link
          >
        </div>
        <!-- todo: вынести в отдельный компонент ибо 2 формы хранить на стр такое себе         -->
        <general-settings-form :settings-list="settingsList" />
      </div>
    </n-tab-pane>
    <n-tab-pane name="test" tab="Настройки модели">
      <div class="p-4 sm:p-8 border border-solid rounded border-gray-400">
        <div class="text-xl sm:text-3xl font-medium mb-4">Настройки модели</div>
        <model-settings-form :settings-list="settingsList" />
      </div>
    </n-tab-pane>
  </n-tabs>
  <n-card v-else title="Общие настройки" size="large">
    <general-settings-form :settings-list="settingsList" />
  </n-card>
</template>

<style scoped></style>
