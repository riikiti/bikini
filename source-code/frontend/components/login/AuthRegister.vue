<script setup lang="ts">
  import { LockKeyhole, UnlockKeyhole } from 'lucide-vue-next'
  import {
    type FormInst,
    type FormItemInst,
    type FormItemRule,
    type FormRules,
    type FormValidationError,
    NButton,
    NForm,
    NFormItem,
    NIcon,
    NInput,
    NRadioButton,
    NRadioGroup,
    NSelect,
    NRow,
    NCol,
    useMessage
  } from 'naive-ui'
  import { computed, ref } from 'vue'
  import { EUserAccountType } from '~/services/enums'
  import { useGenerateDateArray } from '~/services/utils'

  const COUNT_OF_YEARS = 50

  interface IRegisterFields {
    email: string | null
    password: string | null
    confirmPassword: string | null
    name: string | null
    role: EUserAccountType
    birthday: string | number | null
  }

  const accountTypeList = [
    {
      value: EUserAccountType.USER_ACCOUNT,
      label: 'Поклонник'
    },
    {
      value: EUserAccountType.MODEL_ACCOUNT,
      label: 'Модель'
    }
  ]

  const birthdaySelect = computed(() => {
    return useGenerateDateArray(COUNT_OF_YEARS)
  })

  const rPasswordFormItemRef = ref<FormItemInst | null>(null)

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

  const modelRef = ref<IRegisterFields>({
    email: null,
    password: null,
    name: null,
    role: EUserAccountType.USER_ACCOUNT,
    confirmPassword: null,
    birthday: birthdaySelect.value[0].value
  })

  const rules: FormRules = {
    email: [
      { type: 'email', message: 'Неверный адрес электронной почты' },
      { required: true, message: 'Электронная почта обязательна' }
    ],
    name: [
      {
        required: true,
        message: 'Поле Имя является обязательным'
      }
    ],
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

  const message = useMessage()

  const formRef = ref<FormInst | null>(null)
  const emits = defineEmits<{
    (e: 'validated', data: IRegisterFields): void
    (e: 'rejected', data: FormValidationError): void
  }>()
  const handleValidateButtonClick = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
      if (!errors) {
        emits('validated', modelRef.value)
      } else {
        emits('rejected', errors)
      }
    })
  }
</script>

<template>
  <div class="w-full">
    <div class="text-3xl mb-8 text-center font-bold">Регистрация</div>
    <div class="w-full">
      <n-form ref="formRef" :model="modelRef" :rules="rules" class="w-full">
        <n-form-item label="Тип аккаунта" path="role">
          <n-radio-group
            v-model:value="modelRef.role"
            name="acount_type"
            size="medium"
            class="w-full"
          >
            <n-radio-button
              v-for="(accountType, idx) in accountTypeList"
              :key="idx"
              class="w-1/2 flex-1 text-center"
              :value="accountType.value"
            >
              {{ accountType.label }}
            </n-radio-button>
          </n-radio-group>
        </n-form-item>
        <n-form-item path="name" label="Имя пользователя">
          <n-input
            v-model:value="modelRef.name"
            placeholder="Имя пользователя"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="birthday" label="Год рождения">
          <n-select
            v-model:value="modelRef.birthday"
            placeholder="Select"
            :options="birthdaySelect"
          />
        </n-form-item>
        <n-form-item path="email" label="E-Мейл">
          <n-input v-model:value="modelRef.email" placeholder="E-Мейл" @keydown.enter.prevent />
        </n-form-item>
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
                :disabled="modelRef.email === null"
                strong
                secondary
                type="primary"
                class="w-full"
                @click="handleValidateButtonClick"
              >
                Регистрация
              </n-button>
            </div>
          </n-col>
        </n-row>
      </n-form>
    </div>
  </div>
</template>
