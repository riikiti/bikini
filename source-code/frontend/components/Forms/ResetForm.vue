<script setup lang="ts">
  import {
    type FormInst,
    type FormItemInst,
    type FormItemRule,
    type FormRules,
    type FormValidationError,
    NButton,
    NCol,
    NForm,
    NFormItem,
    NIcon,
    NInput,
    NRow
  } from 'naive-ui'
  import { LockKeyhole, UnlockKeyhole } from 'lucide-vue-next'
  import { ref } from 'vue'

  const rPasswordFormItemRef = ref<FormItemInst | null>(null)
  const formRef = ref<FormInst | null>(null)

  function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
    return (
      !!modelRef.value.password &&
      modelRef.value.password.startsWith(value) &&
      modelRef.value.password.length >= value.length
    )
  }
  function validatePasswordSame(rule: FormItemRule, value: string): boolean {
    return value === modelRef.value.password
  }

  const handlePasswordInput = () => {
    if (modelRef.value.confirmPassword) {
      rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
    }
  }

  const modelRef = ref({
    password: null,
    confirmPassword: null
  })

  const emits = defineEmits<{
    (e: 'validated', data: unknown): void
  }>()

  const rules: FormRules = {
    password: [
      {
        required: true,
        message: 'Пароль является обязательным полем'
      }
    ],
    confirmPassword: [
      {
        required: true,
        message: 'Требуется повторный ввод пароля',
        trigger: ['input', 'blur']
      },
      {
        validator: validatePasswordStartWith,
        message: 'Пароль не совпадает с введенным!',
        trigger: ['input']
      },
      {
        validator: validatePasswordSame,
        message: 'Пароль не совпадает с введенным!',
        trigger: ['blur', 'password-input']
      }
    ]
  }
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
  <n-form ref="formRef" :model="modelRef" :rules="rules">
    <n-form-item path="password" label="Пароль">
      <n-input
        v-model:value="modelRef.password"
        show-password-on="click"
        placeholder="Пароль"
        type="password"
        @input="handlePasswordInput"
        @keydown.enter.prevent
      >
        <template #password-visible-icon>
          <n-icon :size="16" :component="h(UnlockKeyhole)" />
        </template>
        <template #password-invisible-icon>
          <n-icon :size="16" :component="h(LockKeyhole)" />
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="confirmPassword" label="Поворите пароль">
      <n-input
        v-model:value="modelRef.confirmPassword"
        show-password-on="click"
        placeholder="Пароль"
        type="password"
        @keydown.enter.prevent
      >
        <template #password-visible-icon>
          <n-icon :size="16" :component="h(UnlockKeyhole)" />
        </template>
        <template #password-invisible-icon>
          <n-icon :size="16" :component="h(LockKeyhole)" />
        </template>
      </n-input>
    </n-form-item>
    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div class="flex">
          <n-button
            :disabled="modelRef.password === null"
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
</template>
