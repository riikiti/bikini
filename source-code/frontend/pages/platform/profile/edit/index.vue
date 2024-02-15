<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '~/components/ui/card'
  import { Label } from '~/components/ui/label'
  import { Input } from '~/components/ui/input'
  import { Textarea } from '@/components/ui/textarea'
  import AppSelect from '~/components/settings/AppSelect.vue'

  import { useForm } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as z from 'zod'
  import { useGenerateDateArray } from '~/services/utils/UseGenerateDateArray'
  import { Button } from '~/components/ui/button'

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' }
  ]

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
</script>

<template>
  <the-header />
  <the-wrapper class="mt-12 pb-12">
    <Card>
      <CardHeader>
        <CardTitle>Шапка профиля</CardTitle>
      </CardHeader>
      <separator class="mb-4" />
      <CardContent>
        <div class="h-[300px] bg-red-300 flex items-center justify-center text-white">
          change photo/etc (нужно понять что в этом блоке можно менять)
        </div>
      </CardContent>
    </Card>
    <Card class="mt-6">
      <CardHeader>
        <CardTitle>Краткая информация</CardTitle>
      </CardHeader>
      <separator class="mb-4" />
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-8">
            <div class="flex flex-col space-y-3">
              <Label for="name">Никнейм</Label>
              <Input id="name" placeholder="Введите имя" />
            </div>
            <div class="flex flex-col space-y-3">
              <Label for="message">О себе</Label>
              <Textarea id="message" class="resize-none h-[100px]" placeholder="О себе" />
            </div>
            <div class="flex flex-grow flex-col space-y-3">
              <Label> Год рождения </Label>
              <app-select :data="years" :selected="values.years" @select="selectValue" />
            </div>
            <div class="grid grid-cols-2 gap-8">
              <div class="flex flex-col space-y-3">
                <Label for="name">Рост</Label>
                <Input id="name" placeholder="Введите ваш рост" />
              </div>
              <div class="flex flex-col space-y-3">
                <Label for="name">Вес</Label>
                <Input id="name" placeholder="Введите ваш вес" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    <Card class="mt-6">
      <CardHeader>
        <CardTitle>Размеры</CardTitle>
      </CardHeader>
      <separator class="mb-4" />
      <CardContent>
        <form>
          <div class="grid lg:grid-cols-3 gap-8">
            <div class="flex flex-col space-y-3">
              <Label for="name">Грудь</Label>
              <Input id="name" placeholder="Введите ваш рост" />
            </div>
            <div class="flex flex-col space-y-3">
              <Label for="name">Талия</Label>
              <Input id="name" placeholder="Введите ваш рост" />
            </div>
            <div class="flex flex-col space-y-3">
              <Label for="name">Бедра</Label>
              <Input id="name" placeholder="Введите ваш рост" />
            </div>
          </div>
          <separator class="my-4" />
          <div class="grid grid-cols-2 items-center w-full gap-8">
            <div class="flex flex-col space-y-3">
              <Label for="name">Цвет волос</Label>
              <app-select :data="years" :selected="values.years" @select="selectValue" />
            </div>
            <div class="flex flex-col space-y-3">
              <Label for="name">Размер бюстгалтера</Label>
              <app-select :data="years" :selected="values.years" @select="selectValue" />
            </div>
          </div>
        </form>
      </CardContent>
      <separator class="my-4" />
      <CardFooter class="flex justify-between px-6">
        <Button variant="outline"> Cancel </Button>
        <Button class="dark:text-white">Save changes</Button>
      </CardFooter>
    </Card>
  </the-wrapper>
</template>

<style scoped></style>
