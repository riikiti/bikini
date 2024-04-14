<script setup lang="ts">
  import { NCard, NTabPane, NTabs } from 'naive-ui'
  import GeneralSettingsForm from '~/components/settings/GeneralSettingsForm.vue'
  import ModelSettingsForm from '~/components/settings/ModelSettingsForm.vue'
  import { useUserStore } from '~/stores/user'
  import { EUserAccountType } from '~/services/enums'
  import { definePageMeta } from '#imports'
  import { ref } from 'vue'
  import personalRepository from '~/services/repository/personalRepository'

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

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
      <n-card title="Общие настройки" size="large">
        <div class="text-gray-400 text-lg mb-4">
          Для смены е-мейла обратитесь к
          <a href="" class="underline text-gray-400">модератору</a>
        </div>
        <!-- todo: вынести в отдельный компонент ибо 2 формы хранить на стр такое себе         -->
        <general-settings-form :settings-list="settingsList" />
      </n-card>
    </n-tab-pane>
    <n-tab-pane name="test" tab="Настройки модели">
      <n-card title="Настройки модели" size="large">
        <model-settings-form :settings-list="settingsList" />
      </n-card>
    </n-tab-pane>
  </n-tabs>
  <n-card v-else title="Общие настройки" size="large">
    <general-settings-form :settings-list="settingsList" />
  </n-card>
</template>

<style scoped></style>
