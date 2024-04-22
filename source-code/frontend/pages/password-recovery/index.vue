<script setup lang="ts">
  import { NCard, useMessage } from 'naive-ui'
  import { MainHeroSection } from '#components'
  import ResetForm from '~/components/Forms/ResetForm.vue'
  import personalRepository from '~/services/repository/personalRepository'
  import { useRoute, useRouter } from '#imports'
  import { RoutesNames } from '~/services/routes-names'
  import { EResponseStatus } from '~/services/enums'

  const route = useRoute()
  const router = useRouter()

  console.log(route.query)

  /*todo: cделать запрос на бек и получить актульную инфу о ссылке истек срок действия или нет*/

  const message = useMessage()
  const confirmRecovery = async data => {
    try {
      const newData = {
        id: route.query.id,
        password: data.password,
        password_confirm: data.confirmPassword
      }
      const response = await personalRepository.confirmRecovery(newData)
      if (response.status === EResponseStatus.SUCCESS) {
        message.success(response.message)
        await router.push(RoutesNames.MAIN)
      }
    } catch (e) {
      console.log(e)
    }
  }
</script>

<template>
  <main-hero-section />
  <div
    class="h-1/2 pb-8 sm:min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:py-0 bg-gray-100"
  >
    <n-card size="medium" class="max-w-[500px]">
      <div class="text-3xl mb-4 text-center font-bold">Восстановление пароля</div>
      <reset-form @validated="confirmRecovery($event)" />
      <nuxt-link
        class="mt-4 block underline text-gray-400 hover:text-gray-500 transition-all cursor-pointer"
        :to="RoutesNames.MAIN"
        >Войти</nuxt-link
      >
    </n-card>
  </div>
</template>

<style scoped></style>
