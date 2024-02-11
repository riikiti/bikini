<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import * as z from 'zod'
  const formSchema = toTypedSchema(
    z.object({
      email: z
        .string({
          required_error: 'Email is required'
        })
        .min(1, { message: 'reqq' })
        .email({ message: 'email is req' }),
      password: z
        .string({
          required_error: 'Password is required'
        })
        .min(8, 'Password >8 lengths')
    })
  )

  const { handleSubmit } = useForm({
    validationSchema: formSchema
  })

  import { FormControl, FormField, FormItem, FormMessage, FormLabel } from '~/components/ui/form'
  import { Input } from '~/components/ui/input'
  import { Button } from '~/components/ui/button'
  const onSubmit = handleSubmit(values => {
    console.log('123')
  })
</script>

<template>
  <div class="w-full">
    <form class="w-full flex flex-col gap-10" @submit="onSubmit">
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
      <Button type="submit"> Вход </Button>
      <div class="flex flex-col gap-2">
        <a href="" class="underline">Бесплатная регистрация</a>
        <a href="" class="underline">Забыли свой пароль?</a>
      </div>
    </form>
  </div>
</template>
