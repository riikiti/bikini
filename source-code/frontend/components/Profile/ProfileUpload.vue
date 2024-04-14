<script setup lang="ts">
  import { ref } from 'vue'
  import { NGradientText, NSpace } from 'naive-ui'

  const emits = defineEmits<{
    (e: 'uploaded'): void
  }>()

  const config = ref({
    route: `/api/auth/gallery-photo`,
    method: 'POST',
    name: 'image'
  })

  const setFileUpload = () => {
    emits('uploaded')
  }
</script>

<template>
  <div
    class="bg-gray-50/60 rounded-xl overflow-hidden sm:shadow-lg px-2 sm:px-4 md:px-8 py-6 sm:py-12"
  >
    <n-gradient-text :size="24" type="warning">
      <div class="font-extrabold text-2xl sm:text-3xl mb-6">Загрузка галлереи</div>
    </n-gradient-text>
    <n-space vertical class="border-gray-400 border-solid p-2 rounded">
      <file-upload
        :name="config.name"
        :route="config.route"
        :method="config.method"
        @uploaded="setFileUpload"
      />
    </n-space>
  </div>
</template>
