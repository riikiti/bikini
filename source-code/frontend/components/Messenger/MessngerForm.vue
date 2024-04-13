<script setup lang="ts">
  import { type FormRules, NButton, NForm, NFormItem, NInput } from 'naive-ui'

  const rules: FormRules = {
    textarea: {
      required: true,
      trigger: ['blur', 'input'],
      message: 'Please input textareaValue'
    }
  }

  const modelRef = ref({
    textarea: ''
  })

  const formRef = ref(null)

  const emits = defineEmits<{
    (e: 'validated', data: string): void
    (e: 'rejected'): void
  }>()
  const handleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate(errors => {
      if (!errors) {
        emits('validated', modelRef.value.textarea)
      } else {
        emits('rejected')
      }
    })
  }
</script>

<template>
  <n-form ref="formRef" :model="modelRef" :rules="rules">
    <n-form-item :span="12" path="textarea">
      <n-input
        v-model:value="modelRef.textarea"
        type="textarea"
        :autosize="{
          minRows: 3,
          maxRows: 5
        }"
        placeholder="Введите ваше сообщение"
        round
        clearable
      />
    </n-form-item>
    <n-space>
      <n-button round type="primary" @click="handleValidateButtonClick"> Отправить </n-button>
    </n-space>
  </n-form>
</template>

<style scoped></style>
