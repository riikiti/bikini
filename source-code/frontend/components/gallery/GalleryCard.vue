<script setup lang="ts">
  import type { IPhoto } from '~/services/models'
  import { NButton } from 'naive-ui'
  import { Trash2 } from 'lucide-vue-next'
  import { useSettingsStore, storeToRefs } from '#imports'

  interface IProps {
    item: IPhoto
    isDeletable?: boolean
  }

  const emits = defineEmits<{
    (e: 'delete', id: number): void
  }>()
  const settingsStore = useSettingsStore()
  const { isMobile } = storeToRefs(settingsStore)

  const props = withDefaults(defineProps<IProps>(), {
    isDeletable: false
  })
  const { item } = toRefs(props)

  const deletePhotoById = () => {
    emits('delete', item.value?.id ?? 0)
  }
</script>

<template>
  <div class="overflow-hidden rounded-[4px] w-full h-full relative group">
    <div
      v-if="isDeletable && !isMobile"
      class="opacity-0 absolute top-0 right-0 group-hover:opacity-100 transition-all"
    >
      <n-button type="error" @click.stop="deletePhotoById()">
        <template #icon>
          <n-icon>
            <trash2 />
          </n-icon>
        </template>
        Удалить
      </n-button>
    </div>
    <img
      :src="item.photo"
      :alt="item.description || 'gallery photo'"
      class="w-full h-full object-contain"
    />
    <div v-if="isDeletable && isMobile">
      <n-button block type="error" @click="deletePhotoById()">
        <template #icon>
          <n-icon>
            <trash2 />
          </n-icon>
        </template>
        Удалить
      </n-button>
    </div>
  </div>
</template>

<style scoped></style>
