<script setup lang="ts">
  import { ref, type Ref } from 'vue'
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
</script>

<template>
  <div
    class="p-8 border border-solid border-black"
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
    <label for="fileInput" class="cursor-pointer block text-xl">
      <div v-if="isDragging">Release to drop files here.</div>
      <div v-else>Drop files here or click here to upload</div>
    </label>
  </div>
</template>

<style scoped></style>
