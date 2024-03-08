<script setup lang="ts">
  import { NButton, NModal, NSpace, type UploadFileInfo, useMessage } from 'naive-ui'
  import ContestUserUpload from '~/components/contest/ContestUserUpload.vue'
  import { ref } from 'vue'

  const emits = defineEmits<{
    (e: 'close'): void
  }>()

  const message = useMessage()
  const onPositiveClick = () => {
    message.success('Submit')
    emits('close')
  }
  const onNegativeClick = () => {
    message.success('Cancel')
    emits('close')
  }

  const uploadFiles = ref<UploadFileInfo>([
    {
      id: 'react',
      name: '我是react.png',
      status: 'finished',
      url: 'https://www.shadcn-vue.com/avatars/01.png'
    }
  ])
</script>

<template>
  <n-modal preset="dialog">
    <template #header>
      <div>Конкурс</div>
    </template>
    <div>
      <contest-user-upload :file-list="uploadFiles" />
    </div>
    <template #action>
      <n-space size="large">
        <n-button type="error" @click="onNegativeClick()">Отмена</n-button>
        <n-button type="primary" @click="onPositiveClick()">Сохранить</n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<style scoped></style>
