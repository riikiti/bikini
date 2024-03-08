<script setup lang="ts">
  import { NModal, NUpload, type UploadFileInfo } from 'naive-ui'
  import { ref, toRefs } from 'vue'

  interface IProps {
    fileList: UploadFileInfo[]
  }

  const props = defineProps<IProps>()

  const { fileList } = toRefs(props)

  const showPreviewModal = ref(false)

  const previewImageUrl = ref('')
  function handlePreview(file: UploadFileInfo) {
    const { url } = file
    previewImageUrl.value = url as string
    showPreviewModal.value = true
  }
</script>

<template>
  <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="fileList"
    list-type="image-card"
    :multiple="false"
    @preview="handlePreview"
  />
  <n-modal v-model:show="showPreviewModal" preset="card" style="width: 600px" title="Предпросмотр">
    <img :src="previewImageUrl" style="width: 100%" />
  </n-modal>
</template>

<style scoped></style>
