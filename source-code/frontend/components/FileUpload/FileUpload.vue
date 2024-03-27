<script setup lang="ts">
  import vueFilePond from 'vue-filepond'
  import 'filepond/dist/filepond.min.css'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
  import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import FilePondPluginFilePoster from 'filepond-plugin-file-poster'

  const authStore = useAuthStore()

  /*  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
  import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
  import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
  import FilePondPluginImageResize from 'filepond-plugin-image-resize'
  import FilePondPluginImageTransform from 'filepond-plugin-image-transform'*/
  const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginFilePoster
  )

  interface IProps {
    route: string
    method: string
  }
  const props = defineProps<IProps>()

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
    url: 'http://127.0.0.1:8000',
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
    name="image"
    :allow-multiple="false"
    accept-file-types="image/png, imgage/jpeg"
    :server="serverConfig"
  />
</template>

<style scoped></style>
