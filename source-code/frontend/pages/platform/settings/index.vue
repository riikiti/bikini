<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '~/components/ui/card'
  import { Input } from '~/components/ui/input'
  import { Label } from '~/components/ui/label'
  import { Button } from '~/components/ui/button'
  import AppSelect from '~/components/settings/AppSelect.vue'
  import { useForm } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as z from 'zod'

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

  const formSchema = toTypedSchema(
    z.object({
      language: z.string({
        required_error: 'Please select a language.'
      })
    })
  )

  const { handleSubmit, setValues, values } = useForm({
    validationSchema: formSchema
  })
  const selectValue = value => {
    setValues({
      language: value
    })
  }
</script>

<template>
  <the-header />
  <the-wrapper class="mt-12">
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription
          >Для смены е-мейла обратитесь к
          <a href="" class="underline">модератору</a></CardDescription
        >
      </CardHeader>
      <separator class="mb-4" />
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Username</Label>
              <Input id="name" placeholder="Type name" />
            </div>
            <div class="flex flex-col sm:flex-row md:gap-8">
              <div class="flex flex-grow flex-col">
                <Label> Country </Label>
                <app-select :data="languages" :selected="values.language" @select="selectValue" />
              </div>
              <div class="flex flex-grow flex-col">
                <Label for="newPassword">City</Label>
                <Input id="newPassword" type="password" placeholder="Type city" />
              </div>
            </div>

            <separator class="mt-2 mb-2" />

            <Label for="password" class="mb-2">Change Password</Label>
            <div class="flex flex-col sm:flex-row md:gap-8">
              <div class="flex flex-grow flex-col space-y-1.5">
                <Label for="password">Password</Label>
                <Input id="password" type="password" placeholder="Type password" />
              </div>
              <div class="flex flex-grow flex-col space-y-1.5">
                <Label for="newPassword">Repeat Password</Label>
                <Input id="newPassword" type="password" placeholder="Type password" />
              </div>
            </div>
            <separator class="my-4" />
            <div class="flex flex-col sm:flex-row md:gap-8"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button variant="outline"> Cancel </Button>
        <Button class="dark:text-white">Save changes</Button>
      </CardFooter>
    </Card>
  </the-wrapper>
</template>

<style scoped></style>
