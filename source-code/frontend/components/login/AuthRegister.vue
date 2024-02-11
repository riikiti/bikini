<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod'
  import { useForm } from 'vee-validate'
  import * as z from 'zod'
  import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'

  const formSchema = toTypedSchema(
    z.object({
      type: z.enum(['fan', 'model'], {
        required_error: 'You need to select a notification type.'
      }),
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
        .min(8, 'Password >8 lengths'),
      refferalCode: z.string().optional(),
      oldest: z
        .boolean({
          required_error: 'oldest is Required'
        })
        .refine(val => val, {
          message: 'Value must be true'
        }),
      confirmed: z
        .boolean({
          required_error: 'confirmed is Required'
        })
        .refine(val => val, {
          message: 'Value must be true'
        })
    })
  )

  const { handleSubmit } = useForm({
    validationSchema: formSchema
  })

  import { FormControl, FormField, FormItem, FormMessage, FormLabel } from '~/components/ui/form'
  import { Input } from '~/components/ui/input'
  import { Button } from '~/components/ui/button'
  import { Checkbox } from '~/components/ui/checkbox'
  const onSubmit = handleSubmit(values => {
    console.log('123', values)
  })
</script>

<template>
  <div class="w-full">
    <form class="w-full flex flex-col gap-6" @submit="onSubmit">
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
      <div class="flex flex-col gap-2">
        <a href="" class="underline">Бесплатная регистрация</a>
        <a href="" class="underline">Забыли свой пароль?</a>
      </div>
    </form>
  </div>
</template>
