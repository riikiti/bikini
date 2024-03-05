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
    radioAccountType: EUserAccountType
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
    radioAccountType: EUserAccountType.USER_ACCOUNT,
    confirmPassword: null,
    birthday: birthdaySelect.value[0].value
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
    ],
    confirmPassword: [
      {
        required: true,
        message: 'Re-entered password is required',
        trigger: ['input', 'blur']
      },
      {
        validator: validatePasswordStartWith,
        message: 'Password is not same as re-entered password!',
        trigger: ['input']
      },
      {
        validator: validatePasswordSame,
        message: 'Password is not same as re-entered password!',
        trigger: ['blur', 'password-input']
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
  <div class="w-full">
    <div class="text-3xl mb-8 text-center font-bold">Регистрация</div>
    <div class="w-full">
      <n-form ref="formRef" :model="modelRef" :rules="rules" class="w-full">
        <n-form-item label="Тип аккаунта" path="radioAccountType">
          <n-radio-group
            v-model:value="modelRef.radioAccountType"
            name="acoount_type"
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
        <n-form-item
          v-if="modelRef.radioAccountType === EUserAccountType.MODEL_ACCOUNT"
          path="birthday"
          label="Год рождения"
        >
          <n-select
            v-model:value="modelRef.birthday"
            placeholder="Select"
            :options="birthdaySelect"
          />
        </n-form-item>
        <n-form-item path="email" label="E-mail">
          <n-input
            v-model:value="modelRef.email"
            placeholder="Please enter your E-mail"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="password" label="Пароль">
          <n-input
            v-model:value="modelRef.password"
            show-password-on="click"
            placeholder="Please enter your Password"
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
            placeholder="Please repeat your Password"
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
  </div>
  <div class="w-full">
    <!--    <form class="w-full flex flex-col gap-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" type="radio" name="type">
        <FormItem>
          <FormControl>
            <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
              <FormItem class="flex items-center space-y-0 gap-x-3">
                <FormControl>
                  <RadioGroupItem value="fan" />
                </FormControl>
                <FormLabel class="font-normal"> Поклоник </FormLabel>
              </FormItem>
              <FormItem class="flex items-center space-y-0 gap-x-3">
                <FormControl>
                  <RadioGroupItem value="model" />
                </FormControl>
                <FormLabel class="font-normal"> Участница </FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormControl>
            <Input type="text" placeholder="E-мейл" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormControl>
            <Input type="text" placeholder="Пароль" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="refferalCode">
        <FormLabel>Реферальный код</FormLabel>
        <FormItem>
          <FormControl>
            <Input type="text" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormDescription>
          Реферальный код не обязательное поле и можете оставить пустым
        </FormDescription>
      </FormField>
      <FormField v-slot="{ value, handleChange }" type="checkbox" name="oldest">
        <FormItem class="flex flex-col items-start gap-x-3">
          <FormControl class="space-y-0 flex items-center">
            <label class="flex items-center">
              <Checkbox :checked="value" @update:checked="handleChange" />
              <div class="ml-3">Да, мне 18 лет</div>
            </label>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ value, handleChange }" type="checkbox" name="confirmed">
        <FormItem class="flex flex-col items-start gap-x-3">
          <FormControl class="space-y-0 flex items-center">
            <label class="flex items-center">
              <Checkbox :checked="value" @update:checked="handleChange" />
              <div class="ml-3">Условия прочитал и согласен</div>
            </label>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit"> Вход </Button>
    </form>-->
  </div>
</template>
