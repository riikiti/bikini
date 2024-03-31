<script setup lang="ts">
  import { NButton, NForm, NFormItem, NInput, NModal, NSelect, NSpace, NUpload } from 'naive-ui'
  import { computed, ref } from 'vue'
  import { useGenerateDateArray } from '~/services/utils'
  import type { UploadFileInfo } from 'naive-ui'
  import { COUNT_OF_YEARS } from '~/services/constants'
  import { storeToRefs } from 'pinia'
  import personalRepository from '~/services/repository/personalRepository.ts'

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
  const previewFileList = ref<UploadFileInfo[]>([
    {
      id: 'react',
      name: '我是react.png',
      status: 'finished',
      url: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    }
  ])

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
  }

  const modelRef = ref<ISettingsFields>({
    name: user.value.name,
    password: null,
    confirmPassword: null,
    birthday: user.value.birthday,
    country: user.value.country?.id ?? null,
    city: null,
    about: user.value.about
  })

  const file = ref(null)

  console.log(user)

  const config = ref({
    route: `/api/auth/fill/${user.value.id}`,
    method: 'POST'
  })

  console.log(config.value)

  const setFileUpload = data => {
    file.value = data
    console.log('file-upload: ', file.value)
  }
</script>

<template>
  <n-space vertical>
    <div>Аватар</div>
    <file-upload :route="config.route" :method="config.method" @uploaded="setFileUpload" />
  </n-space>
  <n-form :model="modelRef">
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
      <n-input
        v-model:value="modelRef.name"
        placeholder="Please enter your name"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-space size="large" item-class="w-1/2" :wrap="false">
      <n-form-item label="Страна">
        <n-select
          v-model:value="modelRef.country"
          filterable
          placeholder="Страна"
          :options="countries"
        />
      </n-form-item>
      <n-form-item label="Город">
        <n-input
          v-model:value="modelRef.city"
          placeholder="Please enter your city"
          @keydown.enter.prevent
        />
      </n-form-item>
    </n-space>
    <n-space size="large" item-class="w-1/2" :wrap="false">
      <n-form-item label="Пароль">
        <n-input
          v-model:value="modelRef.city"
          placeholder="Please enter your city"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item label="Повторить пароль">
        <n-input
          v-model:value="modelRef.city"
          placeholder="Please enter your city"
          @keydown.enter.prevent
        />
      </n-form-item>
    </n-space>
    <n-space>
      <n-button type="info">Сохранить</n-button>
    </n-space>
  </n-form>
</template>

<style scoped></style>
