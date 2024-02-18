<script setup lang="ts">
  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
  import { Label } from '~/components/ui/label'
  import { Input } from '~/components/ui/input'
  import { Textarea } from '@/components/ui/textarea'

  import { useForm } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as z from 'zod'
  import { useGenerateDateArray } from '~/services/utils/useGenerateDateArray'
  import { Button } from '~/components/ui/button'
  import { AppInput, AppSelect, AppTextarea } from '~/components/app'

  const years = useGenerateDateArray(50)

  const formSchema = toTypedSchema(
    z.object({
      years: z.string({
        required_error: 'Please select a year.'
      })
    })
  )

  const { handleSubmit, setValues, values } = useForm({
    validationSchema: formSchema
  })
  const selectValue = value => {
    setValues({
      years: value
    })
  }
  const text = ref('')
</script>

<template>
  <the-header />
  <the-wrapper class="mt-12 pb-12">
    <card>
      <card-header>
        <card-title>Шапка профиля</card-title>
      </card-header>
      <separator class="mb-4" />
      <card-content>
        <div class="h-[300px] bg-red-300 flex items-center justify-center text-white">
          change photo/etc (нужно понять что в этом блоке можно менять)
        </div>
      </card-content>
    </card>
    <card class="mt-6">
      <card-header>
        <card-title>Краткая информация</card-title>
      </card-header>
      <separator class="mb-4" />
      <card-content>
        <form>
          <div class="grid items-center w-full gap-8">
            <div class="flex flex-col space-y-3">
              <app-input placeholder="Введите ваш никнейм" label="Никнейм" />
            </div>
            <div class="flex flex-col space-y-3">
              <app-textarea v-model="text" placeholder="О себе" label="О себе" />
            </div>
            <div class="flex flex-grow flex-col space-y-3">
              <app-select
                :data="years"
                label="Год рождения"
                :selected="values.years"
                @select="selectValue"
              />
            </div>
            <div class="grid grid-cols-2 gap-8">
              <div class="flex flex-col space-y-3">
                <app-input label="Рост" placeholder="Введите ваш рост" />
              </div>
              <div class="flex flex-col space-y-3">
                <app-input label="Вес" placeholder="Введите ваш вес" />
              </div>
            </div>
          </div>
        </form>
      </card-content>
    </card>
    <card class="mt-6">
      <card-header>
        <card-title>Размеры</card-title>
      </card-header>
      <separator class="mb-4" />
      <card-content>
        <form>
          <div class="grid lg:grid-cols-3 gap-8">
            <div class="flex flex-col space-y-3">
              <app-input label="Грудь" placeholder="Введите ваш размер" />
            </div>
            <div class="flex flex-col space-y-3">
              <app-input label="Талия" placeholder="Введите вашу талию" />
            </div>
            <div class="flex flex-col space-y-3">
              <app-input label="Бедра" placeholder="Введите ваши бедра" />
            </div>
          </div>
          <separator class="my-4" />
          <div class="grid grid-cols-2 items-center w-full gap-8">
            <div class="flex flex-col space-y-3">
              <app-select
                :data="years"
                label="Цвет волос"
                :selected="values.years"
                @select="selectValue"
              />
            </div>
            <div class="flex flex-col space-y-3">
              <app-select
                :data="years"
                label="Размер бюстгалтера"
                :selected="values.years"
                @select="selectValue"
              />
            </div>
          </div>
        </form>
      </card-content>
      <separator class="my-4" />
      <card-footer class="flex justify-between px-6">
        <Button variant="outline"> Отменить </Button>
        <Button class="dark:text-white">Сохранить изменения</Button>
      </card-footer>
    </card>
  </the-wrapper>
</template>
