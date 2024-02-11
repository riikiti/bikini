<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import * as z from 'zod'
  import { FormControl, FormField, FormItem, FormMessage, FormLabel } from '~/components/ui/form'
  import { Input } from '~/components/ui/input'
  import { Button } from '~/components/ui/button'

  const formSchema = toTypedSchema(
    z.object({
      email: z
        .string({
          required_error: 'Email is required'
        })
        .min(1, { message: 'reqq' })
        .email({ message: 'email is req' })
    })
  )

  const { handleSubmit } = useForm({
    validationSchema: formSchema
  })
  const onSubmit = handleSubmit(values => {
    console.log('123')
  })
</script>

<template>
  <div class="w-full">
    <div>
      Введите электронную почту, каторую вы указали при регистрации. Мы отправим ссылку для сброса
      пароля,
    </div>
    <form class="w-full flex flex-col gap-10 mt-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormControl>
            <Input type="text" placeholder="E-мейл" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit"> Отправить </Button>
      <div class="flex flex-col gap-2">
        <a href="" class="underline">Войти</a>
      </div>
    </form>
  </div>
</template>
