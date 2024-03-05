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
  import { LockKeyhole, UnlockKeyhole } from 'lucide-vue-next'

  interface ILoginFields {
    email: string | null
    password: string | null
  }

  const modelRef = ref<ILoginFields>({
    email: null,
    password: null
  })

  const rules: FormRules = {
    email: [
      { type: 'email', message: 'Invalid email address' },
      { required: true, message: 'Email is required' }
    ],
    password: [
      {
        required: true,
        message: 'Password is required'
      }
    ]
  }

  const message = useMessage()

  const formRef = ref<FormInst | null>(null)

  const handleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
      if (!errors) {
        message.success('Valid')
      } else {
        console.log(errors)
        message.error('Invalid')
      }
    })
  }
</script>

<template>
  <div class="text-3xl mb-8 text-center font-bold">Вход в систему</div>
  <div class="w-full">
    <n-form ref="formRef" :model="modelRef" :rules="rules">
      <n-form-item path="email" label="E-mail">
        <n-input
          v-model:value="modelRef.email"
          placeholder="Please enter your E-mail"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="password" :label="$t('form_login.password')">
        <n-input
          v-model:value="modelRef.password"
          show-password-on="click"
          placeholder="Please enter your Password"
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
              :disabled="modelRef.email === null"
              strong
              secondary
              type="primary"
              class="w-full"
              @click="handleValidateButtonClick"
            >
              Вход
            </n-button>
          </div>
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>
