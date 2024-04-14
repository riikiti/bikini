<script setup lang="ts">
  import {
    NButton,
    NCheckbox,
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
  import personalRepository from '~/services/repository/personalRepository'

  const userStore = useAuthStore()
  const { user } = storeToRefs(userStore)

  interface IProps {
    settingsList: unknown
  }

  const props = defineProps<IProps>()

  const { settingsList } = toRefs(props)

  const birthdaySelect = computed(() => {
    return useGenerateDateArray(COUNT_OF_YEARS)
  })

  interface ISettingsFields {
    height: number | null
    weight: number | null
    birthdate: string | number | null
    waist: number | string | null
    country: number | null
    size: number | null
    hips: number | null
    city: string | null
    about: string | null
    hair_color: number | null
    breast: number | null
  }

  const modelRef = ref<ISettingsFields>({
    height: user.value.info?.height ?? null,
    weight: user.value.info?.weight ?? null,
    waist: user.value.info?.waist ?? null,
    hips: user.value.info?.hips ?? null,
    birthdate: user.value.info?.birthdate ?? null,
    size: user.value.info?.size ?? null,
    country: user.value.country?.id ?? null,
    hair_color: user.value.info?.hair?.id ?? null,
    breast: user.value.info?.breast?.id ?? null,
    city: user.value.info?.city ?? null,
    about: user.value.info?.about ?? null
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
  const save = async () => {
    const messages_status = JSON.parse(JSON.stringify(message_statuses))
    const savedData = { ...user.value, ...modelRef.value, messages_status }
    const response = await personalRepository.save(savedData)
    await userStore.profile()
  }

  const message_statuses = reactive({
    from_all_fans: user.value.info?.messages_status?.from_all_fans ?? false,
    from_all_models: user.value.info?.messages_status?.from_all_models ?? false,
    from_all_users: user.value.info?.messages_status?.from_all_users ?? false,
    from_no_one: user.value.info?.messages_status?.from_no_one ?? false,
    from_subscribers: user.value.info?.messages_status?.from_subscribers ?? false
  })

  const blockAllUser = value => {
    if (value) {
      Object.keys(message_statuses).map(item => {
        if (item === 'from_no_one') {
          message_statuses[item] = true
        } else {
          message_statuses[item] = false
        }
      })
    } else {
      Object.keys(message_statuses).map(item => {
        message_statuses[item] = false
      })
    }
  }

  const isBlockedCheckbox = computed(() => {
    return message_statuses.from_all_users || message_statuses.from_no_one
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
          <n-select v-model:value="modelRef.hair_color" placeholder="Select" :options="hairs" />
        </n-form-item>
      </n-grid-item>
      <n-grid-item>
        <n-form-item path="birthdate" label="Размер бюстгалтера">
          <n-select v-model:value="modelRef.breast" placeholder="Select" :options="breasts" />
        </n-form-item>
      </n-grid-item>
    </n-grid>
    <n-grid :x-gap="12" :y-gap="8" :cols="1">
      <n-grid-item>
        <div class="flex gap-2">
          <n-checkbox
            v-model:checked="message_statuses.from_subscribers"
            :disabled="isBlockedCheckbox"
          >
            <div class="uppercase">Рекомендуем</div>
          </n-checkbox>
        </div>
        <div class="flex flex-col gap-2">
          <div class="uppercase text-lg">ОТ МОИХ ПОДПИСЧИКОВ</div>
          <div>
            Только те кто заплатил вам за подписку на ваш блог или купил ваш платный бокс смогут
            написать вам сообщение. Если вы загрузили бесплатный бокс то пользователи так же смогут
            вам писать.
          </div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="flex gap-2">
          <n-checkbox
            v-model:checked="message_statuses.from_all_models"
            :disabled="isBlockedCheckbox"
            ><div class="uppercase">ОТ ВСЕХ МОДЕЛЕЙ</div>
          </n-checkbox>
        </div>
        <div class="flex flex-col gap-2">
          <div>
            Другие участницы не смогут написать сообщение. Только аккаунты зарегестрированные как
            “МОДЕЛИ” смогут написать вам сообщение.
          </div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="flex gap-2">
          <n-checkbox
            v-model:checked="message_statuses.from_all_fans"
            :disabled="isBlockedCheckbox"
          >
            <div class="uppercase">ОТ ВСЕХ ФАНОВ</div>
          </n-checkbox>
        </div>
        <div class="flex flex-col gap-2">
          <div>
            Другие участницы не смогут написать сообщение. Только аккаунты зарегестрированные как
            “ФАН” смогут написать вам сообщение.
          </div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="flex gap-2">
          <n-checkbox
            v-model:checked="message_statuses.from_all_users"
            :disabled="message_statuses.from_no_one"
          >
            <div class="uppercase">ОТ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ</div>
          </n-checkbox>
        </div>
        <div class="flex flex-col gap-2">
          <div>Любой зарегестрированный пользователь сможет написать вам сообщение.</div>
        </div>
      </n-grid-item>
      <n-grid-item>
        <div class="flex gap-2">
          <n-checkbox
            v-model:checked="message_statuses.from_no_one"
            @update:checked="blockAllUser($event)"
          >
            <div class="uppercase">НИ ОТ КОГО</div>
          </n-checkbox>
        </div>
        <div class="flex flex-col gap-2">
          <div>Ни кто не сможет вам написать сообщение</div>
        </div>
      </n-grid-item>
    </n-grid>
    <n-space>
      <n-button type="info" @click="save">Сохранить</n-button>
    </n-space>
  </n-form>
</template>

<style scoped></style>
