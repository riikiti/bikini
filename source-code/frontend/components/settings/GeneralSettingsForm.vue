<script setup lang="ts">
  import {
    NButton,
    NForm,
    NFormItem,
    NGrid,
    NGridItem,
    NIcon,
    NInput,
    NModal,
    NSelect,
    NSpace,
    NUpload
  } from 'naive-ui'
  import { computed, ref, h } from 'vue'
  import { useGenerateDateArray } from '~/services/utils'
  import type { UploadFileInfo } from 'naive-ui'
  import { COUNT_OF_YEARS } from '~/services/constants'
  import { storeToRefs } from 'pinia'
  import personalRepository from '~/services/repository/personalRepository.ts'
  import { LockKeyhole, UnlockKeyhole } from 'lucide-vue-next'

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

  const countryList = [
    { label: 'English', value: 6 },
    { label: 'French', value: 2 },
    { label: 'German', value: 3 },
    { label: 'Spanish', value: 4 },
    { label: 'Portuguese', value: 5 },
    { label: 'Russian', value: 1 },
    { label: 'Japanese', value: 7 },
    { label: 'Korean', value: 8 },
    { label: 'Chinese', value: 9 }
  ]

  interface IProps {
    settingsList: unknown
  }

  const props = defineProps<IProps>()

  const { settingsList } = toRefs(props)

  const birthdaySelect = computed(() => {
    return useGenerateDateArray(COUNT_OF_YEARS)
  })

  //upload block
  const showModalRef = ref(false)
  const previewImageUrlRef = ref('')
  function handlePreview(file: UploadFileInfo) {
    const { url } = file
    previewImageUrlRef.value = url as string
    showModalRef.value = true
  }

  const countries = computed(() => {
    return (
      settingsList.value?.countries.reduce((acc, val) => {
        acc.push({
          label: val.name,
          value: val.id
        })
        return acc
      }, []) ?? []
    )
  })

  ///

  interface ISettingsFields {
    name: string | null
    password: string | null
    confirmPassword: string | null
    birthday: string | number | null
    country: number | null
    city: string | null
    about: string | null
    avatar: string | null
  }

  const modelRef = ref<ISettingsFields>({
    name: user.value.name,
    password: '',
    confirmPassword: '',
    birthday: user.value.birthday,
    country: user.value.country?.id ?? null,
    city: user.value.info?.city,
    about: user.value.info?.about,
    avatar: user.value.avatar ?? null
  })

  console.log('model: ', modelRef.value)

  const rPasswordFormItemRef = ref<FormItemInst | null>(null)

  function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
    return (
      !!modelRef.value.password &&
      modelRef.value.password.startsWith(value) &&
      modelRef.value.password.length >= value.length
    )
  }
  function validatePasswordSame(rule, value) {
    return value === modelRef.value.password
  }

  const handlePasswordInput = () => {
    if (modelRef.value.confirmPassword) {
      rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
    }
  }

  const file = ref(null)

  console.log(user)

  const config = ref({
    route: `/api/auth/fill`,
    method: 'POST',
    name: 'avatar'
  })

  const setFileUpload = data => {
    file.value = data
    modelRef.value.avatar = data
  }

  const formRef = ref(null)
  const save = async () => {
    const x = Array.from(user.value.info)
    console.log('x: ', x)
    const savedData = { ...user.value.info, ...modelRef.value }
    const response = await personalRepository.save(savedData)
    await userStore.profile()
  }
</script>

<template>
  <n-space vertical class="mb-4">
    <div>Аватар</div>
    <n-space
      vertical
      :class="['p-2 rounded w-max', { 'border-gray-400 border-solid': user.avatar }]"
    >
      <img
        v-if="user.avatar"
        :src="user.avatar"
        alt=""
        class="max-w-[200px] h-[200px] rounded-lg"
      />
      <file-upload
        class="w-[300px]"
        :name="config.name"
        :route="config.route"
        :method="config.method"
        @uploaded="setFileUpload"
      />
    </n-space>
  </n-space>
  <n-form ref="formRef" :model="modelRef">
    <n-form-item label="Описание">
      <n-input
        v-model:value="modelRef.about"
        :resizable="false"
        :default-value="modelRef.about"
        type="textarea"
        placeholder="Расскажите о себе"
        maxlength="200"
        show-count
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item label="Псевдоним">
      <n-input v-model:value="modelRef.name" placeholder="Псевдоним" @keydown.enter.prevent />
    </n-form-item>
    <n-grid cols="1 xs:2" :x-gap="10" :y-gap="10" responsive="screen">
      <n-grid-item>
        <n-form-item label="Страна">
          <n-select
            v-model:value="modelRef.country"
            filterable
            placeholder="Страна"
            :options="countries"
          />
        </n-form-item>
      </n-grid-item>
      <n-grid-item>
        <n-form-item label="Город">
          <n-input v-model:value="modelRef.city" placeholder="Город" @keydown.enter.prevent />
        </n-form-item>
      </n-grid-item>
    </n-grid>
    <n-grid cols="1 xs:2" :x-gap="10" :y-gap="10" responsive="screen">
      <n-grid-item>
        <n-form-item label="Пароль" path="password">
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
      </n-grid-item>
      <n-grid-item>
        <n-form-item label="Повторить пароль" path="confirmPassword">
          <n-input
            v-model:value="modelRef.confirmPassword"
            show-password-on="click"
            placeholder="Повторите пароль"
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
      </n-grid-item>
    </n-grid>
    <n-space>
      <n-button type="info" @click="save">Сохранить</n-button>
    </n-space>
  </n-form>
</template>
