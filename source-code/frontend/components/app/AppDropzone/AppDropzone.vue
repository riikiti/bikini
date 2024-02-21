<script setup lang="ts">
  import { ref, type Ref } from 'vue'
  import { cn } from '~/lib/utils'
  import AppPreviewDropzone from '~/components/app/AppDropzone/AppPreviewDropzone.vue'
  const isDragging = ref(false)
  const files: Ref<File[]> = ref([])
  const file: Ref<null | HTMLInputElement | FileList | File> = ref(null)
  const onChange = () => {
    if (file.value.value != null && file.value.files.length > 0) {
      files.value.push(...file.value.files)
    }
    console.log(files.value)
  }
  const dragOver = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = true
  }
  const dragLeave = () => {
    isDragging.value = false
  }
  const drop = (event: DragEvent) => {
    event.preventDefault()
    file.value.files = event.dataTransfer?.files
    onChange()
    isDragging.value = false
  }
  const removeFile = (index: number) => {
    files.value.splice(index, 1)
  }
</script>

<template>
  <div>
    <div
      :class="
        cn(
          'cursor-pointer min-h-[150px] bg-muted/40 flex items-center justify-center border border-solid border-muted shadow-sm p-8',
          {
            'border-sky-500 border-dashed': isDragging
          }
        )
      "
      @dragover="dragOver($event)"
      @dragleave="dragLeave()"
      @drop="drop($event)"
    >
      <input
        id="fileInput"
        ref="file"
        type="file"
        multiple
        name="file"
        class="invisible opacity-0 absolute w-0 h-0"
        accept=".pdf,.jpg,.jpeg,.png"
        @change="onChange()"
      />
      <label for="fileInput" class="cursor-pointer block text-xl h-full">
        <div v-if="isDragging" class="underline cursor-pointer">Release to drop files here.</div>
        <div v-else>Drop files here or click here to upload</div>
      </label>
    </div>
    <app-preview-dropzone :preview-files="files" @remove="removeFile($event)" />
  </div>
</template>

<style scoped></style>
