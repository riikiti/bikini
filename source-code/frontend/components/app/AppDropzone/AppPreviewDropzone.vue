<script setup lang="ts">
  import { toRefs } from 'vue'
  import { X } from 'lucide-vue-next'
  import { Button } from '~/components/ui/button'

  interface IProps {
    previewFiles: FileList[] | File[]
  }
  const props = defineProps<IProps>()
  const { previewFiles } = toRefs(props)

  const emits = defineEmits<{
    (e: 'remove', payload: number): void
  }>()

  const generateURL = (file: File) => {
    let fileSrc = URL.createObjectURL(file)
    setTimeout(() => {
      URL.revokeObjectURL(fileSrc)
    }, 1000)
    return fileSrc
  }
  const removeFile = (id: number) => {
    emits('remove', id)
  }
</script>

<template>
  <div class="py-6">
    <div class="w-full flex flex-wrap gap-6">
      <div v-for="(file, index) in previewFiles" :key="index">
        <div class="w-[150px] h-[100px] select-none overflow-hidden rounded-xl relative">
          <img :src="generateURL(file as File)" alt="" />
          <div class="absolute top-2 right-2 z-20">
            <Button variant="outline" size="icon" class="w-4 h-4 p-0" @click="removeFile(index)">
              <x />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
