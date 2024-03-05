<script setup lang="ts">
  import { NButton, NForm, NFormItem, NInput, NModal, NSelect, NSpace, NUpload } from 'naive-ui'
  import { computed, ref } from 'vue'
  import { useGenerateDateArray } from '~/services/utils'
  import { useUserStore } from '~/stores/user'
  import type { UploadFileInfo } from 'naive-ui'
  import { COUNT_OF_YEARS } from '~/services/constants'

  const userStore = useUserStore()

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
    name: userStore.name,
    password: null,
    confirmPassword: null,
    birthday: userStore.birthday,
    country: userStore.country?.id ?? null,
    city: null,
    about: userStore.about
  })
</script>

<template>
  <n-form :model="modelRef">
    <n-form-item label="Аватар">
      <n-upload
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        :default-file-list="previewFileList"
        list-type="image-card"
        :multiple="false"
        @preview="handlePreview"
      />
      <n-modal
        v-model:show="showModalRef"
        preset="card"
        style="width: 600px"
        title="A Cool Picture"
      >
        <img :src="previewImageUrlRef" style="width: 100%" />
      </n-modal>
    </n-form-item>
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
          :options="countryList"
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
