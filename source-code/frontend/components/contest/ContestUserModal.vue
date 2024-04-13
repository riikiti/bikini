<script setup lang="ts">
  import { NButton, NModal, NSpace, useMessage } from 'naive-ui'
  import { ref } from 'vue'

  interface IProps {
    isEdit: boolean
  }

  const props = defineProps<IProps>()
  const emits = defineEmits<{
    (e: 'formsave', data: any): void
  }>()

  const message = useMessage()
  const onPositiveClick = () => {
    message.success('Submit')
    emits('formsave', file.value)
  }
  const onNegativeClick = () => {
    emits('formclose')
  }

  const file = ref(null)

  const setFileUpload = data => {
    file.value = data
    console.log('file-upload: ', file.value)
  }

  const config = ref({
    add: {
      route: '/api/active-contest/add-photo',
      method: 'POST'
    },
    update: {
      route: '/api/active-contest/update-photo',
      method: 'POST'
    }
  })

  const activeConfig = computed(() => {
    return config.value[props.isEdit ? 'update' : 'add']
  })

  console.log(activeConfig)
</script>

<template>
  <n-modal preset="dialog">
    <template #header>
      <div>Конкурс</div>
    </template>
    <div>
      <file-upload
        :route="activeConfig.route"
        :method="activeConfig.method"
        @uploaded="setFileUpload"
      />
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
