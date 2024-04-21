<script setup lang="ts">
  import vueFilePond from 'vue-filepond'
  import 'filepond/dist/filepond.min.css'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
  import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import FilePondPluginFilePoster from 'filepond-plugin-file-poster'
  import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

  const authStore = useAuthStore()
  const { apiUrl } = useRuntimeConfig().public

  import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
  import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
  import FilePondPluginImageResize from 'filepond-plugin-image-resize'
  import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
  const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFilePoster,
    FilePondPluginImageEdit,
    FilePondPluginImageCrop
  )

  interface IProps {
    route: string
    method: string
    name?: string
    files?: any[]
  }
  const props = withDefaults(defineProps<IProps>(), {
    name: 'image',
    files: () => []
  })

  const emits = defineEmits<{
    (e: 'uploaded', file: any): void
  }>()

  const handleFilePondLoad = data => {
    console.log('handle: ', data)
    emits('uploaded', data)
  }
  const handleErrorUpload = data => {
    console.log('err: ', data)
  }

  const serverConfig = reactive({
    url: apiUrl,
    timeout: 7000,
    process: {
      url: props.route,
      method: props.method,
      withCredentials: false,
      headers: { Authorization: `Bearer ${authStore.getToken()}` },
      onload: handleFilePondLoad,
      onerror: handleErrorUpload
    }
  })
</script>

<template>
  <file-pond
    :name="name"
    label-idle="Загрузить фотографию"
    :files="files"
    :allow-multiple="false"
    accept-file-types="image/png, imgage/jpeg"
    :server="serverConfig"
  />
</template>

<style scoped lang="scss">
  ::v-deep {
    & .filepond--credits {
      display: none;
    }
  }
</style>
