<script setup lang="ts">
  import {
    type FormInst,
    type FormRules,
    type FormValidationError,
    NButton,
    NForm,
    NFormItem,
    NIcon,
    NInput,
    NRow,
    NCol,
    useMessage
  } from 'naive-ui'
  import { ref, h } from 'vue'

  interface ILoginFields {
    email: string | null
  }

  const modelRef = ref<ILoginFields>({
    email: null
  })

  const rules: FormRules = {
    email: [
      { type: 'email', message: 'Неверный адрес электронной почты' },
      { required: true, message: 'Электронная почта обязательна' }
    ]
  }

  const emits = defineEmits<{
    (e: 'validated', data: ILoginFields): void
  }>()

  const formRef = ref<FormInst | null>(null)

  const handleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
      if (!errors) {
        emits('validated', modelRef.value)
      }
    })
  }
</script>

<template>
  <div class="text-3xl mb-2 text-center font-bold">Cброс пароля</div>
  <div class="text-gray-400 text-center mb-4">
    Введите электронную почту, каторую вы указали при регистрации. Мы отправим ссылку для сброса
    пароля
  </div>
  <div class="w-full">
    <n-form ref="formRef" :model="modelRef" :rules="rules">
      <n-form-item path="email" label="Е-Мейл">
        <n-input v-model:value="modelRef.email" placeholder="Е-Мейл" @keydown.enter.prevent />
      </n-form-item>
      <n-row :gutter="[0, 24]">
        <n-col :span="24">
          <div class="flex">
            <n-button
              :disabled="modelRef.email === null"
              strong
              secondary
              type="primary"
              class="w-full"
              @click="handleValidateButtonClick"
            >
              Сбросить пароль
            </n-button>
          </div>
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>
