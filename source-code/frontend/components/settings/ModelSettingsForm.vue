<script setup lang="ts">
  import {
    NButton,
    NForm,
    NFormItem,
    NGrid,
    NGridItem,
    NInput,
    NInputNumber,
    NSelect,
    NSpace
  } from 'naive-ui'
  import { computed, ref } from 'vue'
  import { useGenerateDateArray } from '~/services/utils'

  import {
    COUNT_MIN_HEIGHT,
    COUNT_MIN_HIPS,
    COUNT_MIN_WAIST,
    COUNT_MIN_WEIGHT,
    COUNT_OF_YEARS
  } from '~/services/constants'
  import { storeToRefs } from 'pinia'

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

  interface IProps {
    settingsList: unknown
  }

  const props = defineProps<IProps>()

  const { settingsList } = toRefs(props)

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

  interface ISettingsFields {
    height: number | null
    weight: number | null
    birthdate: string | number | null
    waist: number | string
    country: number | null
    size: number | null
    city: string | null
  }

  const modelRef = ref<ISettingsFields>({
    height: user.value.info?.height ?? null,
    weight: user.value.info?.weight ?? null,
    waist: user.value.info?.waist ?? null,
    hips: user.value.info?.hips ?? null,
    birthdate: user.value.info?.birthdate ?? null,
    size: user.value.info?.size ?? null,
    country: user.value.country?.id ?? null,
    city: user.value.info?.city ?? null
  })

  const breasts = computed(() => {
    return (
      settingsList.value?.breasts?.reduce((acc, val) => {
        acc.push({
          label: val.size,
          value: val.id
        })
        return acc
      }, []) ?? []
    )
  })
  const hairs = computed(() => {
    return (
      settingsList.value?.hair_colors?.reduce((acc, val) => {
        acc.push({
          label: val.color,
          value: val.id
        })
        return acc
      }, []) ?? []
    )
  })
</script>

<template>
  <n-form :model="modelRef">
    <n-grid :x-gap="12" :y-gap="8" :cols="3">
      <n-grid-item>
        <n-form-item path="birthdate" label="Год рождения">
          <n-select
            v-model:value="modelRef.birthdate"
            placeholder="Select"
            :options="birthdaySelect"
          />
        </n-form-item>
      </n-grid-item>
      <n-grid-item>
        <n-form-item label="Рост" path="height">
          <n-input-number
            v-model:value="modelRef.height"
            :update-value-on-input="false"
            :min="COUNT_MIN_HEIGHT"
            class="w-full"
            placeholder="Please enter your height"
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-grid-item>
      <n-grid-item>
        <n-form-item label="Вес" path="weight">
          <n-input-number
            v-model:value="modelRef.weight"
            class="w-full"
            :update-value-on-input="false"
            :min="COUNT_MIN_WEIGHT"
            placeholder="Please enter your weight"
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-grid-item>
    </n-grid>
    <n-grid :x-gap="12" :y-gap="8" :cols="3">
      <n-grid-item>
        <n-form-item label="Грудь" path="size">
          <n-input-number
            v-model:value="modelRef.size"
            :update-value-on-input="false"
            :min="COUNT_MIN_HEIGHT"
            class="w-full"
            placeholder="Please enter your size"
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-grid-item>
      <n-grid-item>
        <n-form-item label="Талия" path="waist">
          <n-input-number
            v-model:value="modelRef.waist"
            :update-value-on-input="false"
            :min="COUNT_MIN_WAIST"
            class="w-full"
            placeholder="Please enter your waist"
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-grid-item>
      <n-grid-item>
        <n-form-item label="Бедра" path="hips">
          <n-input-number
            v-model:value="modelRef.hips"
            class="w-full"
            :update-value-on-input="false"
            :min="COUNT_MIN_HIPS"
            placeholder="Please enter your hips"
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-grid-item>
    </n-grid>
    <n-grid :x-gap="12" :y-gap="8" :cols="2">
      <n-grid-item>
        <n-form-item path="birthdate" label="Цвет волос">
          <n-select v-model:value="modelRef.birthdate" placeholder="Select" :options="hairs" />
        </n-form-item>
      </n-grid-item>
      <n-grid-item>
        <n-form-item path="birthdate" label="Размер бюстгалтера">
          <n-select v-model:value="modelRef.birthdate" placeholder="Select" :options="breasts" />
        </n-form-item>
      </n-grid-item>
    </n-grid>
    <n-space>
      <n-button type="info">Сохранить</n-button>
    </n-space>
  </n-form>
</template>

<style scoped></style>
