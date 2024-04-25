<script setup lang="ts">
  import { ChevronDown } from 'lucide-vue-next'
  import AuthRegister from '~/components/login/AuthRegister.vue'
  import AuthResetPassword from '~/components/login/AuthResetPassword.vue'
  import AuthLogin from '~/components/login/AuthLogin.vue'
  import { NCard, useMessage } from 'naive-ui'
  import { ref } from 'vue'
  import { useAuthStore } from '~/stores/auth'
  import { useRouter, definePageMeta, useSettingsStore } from '#imports'
  import { RoutesNames } from '~/services/routes-names'
  import personalRepository from '~/services/repository/personalRepository'
  import MainHeroSection from '~/components/Main/MainHeroSection.vue'
  import wikiRepository from '~/services/repository/wikiRepository'

  definePageMeta({
    middleware: ['auth']
  })

  const message = useMessage()
  const authStore = useAuthStore()
  const settingsStore = useSettingsStore()

  const router = useRouter()

  const isLoginForm = ref<boolean>(true)
  const isResetForm = ref<boolean>(false)

  const toggleLoginForm = () => {
    isLoginForm.value = !isLoginForm.value
    isResetForm.value = false
  }
  const toggleResetForm = () => {
    if (isResetForm.value) {
      isResetForm.value = false
      isLoginForm.value = true
    } else {
      isResetForm.value = true
      isLoginForm.value = false
    }
  }

  const fetchMainPage = async () => {
    try {
      const response = await wikiRepository.main()
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  const login = async data => {
    await authStore.login(data)
    if (authStore.isAuth) {
      await authStore.profile()
      await router.push(RoutesNames.ACTIVE_CONTEST)
    }
  }

  const resetPassword = async data => {
    try {
      console.log('resp: ', data)
      const response = await personalRepository.refreshPassword({
        email: data.email
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  const register = async data => {
    const newData = {
      email: data.email,
      password: data.password,
      confirm_password: data.confirmPassword,
      name: data.name,
      role: data.role,
      birthdate: data.birthday
    }
    await authStore.register(newData)
    if (authStore.isAuth) {
      await authStore.profile()
      await settingsStore.setSettings()
      if (settingsStore.moderatorId) {
        await router.push(RoutesNames.MESSENGER + `/${settingsStore.moderatorId}`)
      }
    }
  }

  onMounted(async () => {
    await fetchMainPage()
  })
</script>

<template>
  <main-hero-section />
  <div
    id="auth"
    class="h-1/2 pb-8 sm:min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:py-0 bg-gray-100"
  >
    <n-card size="medium" class="max-w-[360px]">
      <template v-if="!isResetForm">
        <auth-login v-if="isLoginForm" @validated="login($event)" />
        <auth-register v-else @validated="register($event)" />
      </template>
      <auth-reset-password v-if="isResetForm" @validated="resetPassword($event)" />
      <div class="flex flex-col gap-2 mt-2">
        <div
          v-if="isLoginForm"
          class="underline text-gray-400 hover:text-gray-500 transition-all cursor-pointer"
          @click="toggleLoginForm()"
        >
          Бесплатная регистрация
        </div>
        <div
          v-if="!isLoginForm || isResetForm"
          class="underline text-gray-400 hover:text-gray-500 transition-all cursor-pointer"
          @click="toggleLoginForm()"
        >
          Вход
        </div>
        <div
          v-if="!isResetForm"
          class="underline text-gray-400 hover:text-gray-500 transition-all cursor-pointer"
          @click="toggleResetForm()"
        >
          Забыли свой пароль?
        </div>
      </div>
    </n-card>
  </div>
  <!--  <main-prizes-section />-->
  <main-voting-section />
  <main-info-section />
  <main-winner-section />
</template>

<style scoped></style>
