<script setup lang="ts">
  import { ChevronDown } from 'lucide-vue-next'
  import AuthRegister from '~/components/login/AuthRegister.vue'
  import AuthResetPassword from '~/components/login/AuthResetPassword.vue'
  import AuthLogin from '~/components/login/AuthLogin.vue'
  import { NCard } from 'naive-ui'
  import { ref } from 'vue'
  import { useAuthStore } from '~/stores/auth'
  import { useRouter } from '#imports'
  import { RoutesNames } from '~/services/routes-names'

  const authStore = useAuthStore()
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

  const login = async data => {
    await authStore.login(data)
    if (authStore.isAuth) {
      await router.push(RoutesNames.ACTIVE_CONTEST)
    }
  }
  const register = async data => {
    console.log(data)
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
      await router.push(RoutesNames.ACTIVE_CONTEST)
    }
    console.log(newData)
  }
</script>

<template>
  <div class="h-screen relative">
    <img
      src="/assets/images/login/woman.webp"
      alt="Woman"
      width="1680"
      height="1246"
      class="absolute top-0 left-0 w-full h-screen object-cover -z-[5] brightness-75"
    />
    <div class="max-w-[1368px] mx-auto px-2 sm:px-4 h-screen flex flex-col justify-center">
      <h1 class="text-5xl text-center sm:text-left sm:text-[82px] text-white font-extrabold">
        BIKINI STAR
      </h1>
      <div class="max-w-[800px] mx-auto mt-6">
        <div class="text-2xl sm:text-[42px] font-extrabold text-white">
          ИНТЕРНАЦИОНАЛЬНЫЙ Конкурс
        </div>
        <div class="text-2xl sm:text-[42px] font-extrabold text-white">
          сетевой проект, объединяющий
        </div>
        <div class="text-2xl sm:text-[42px] font-extrabold text-white">любителей фотографии</div>
      </div>
      <div
        class="text-white absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div class="animate-bounce">
          <ChevronDown :size="48" />
        </div>
      </div>
    </div>
  </div>
  <div
    class="h-1/2 pb-8 sm:min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:py-0 bg-gray-100"
  >
    <n-card size="medium" class="max-w-[360px]">
      <template v-if="!isResetForm">
        <auth-login v-if="isLoginForm" @validated="login($event)" />
        <auth-register v-else @validated="register($event)" />
      </template>
      <auth-reset-password v-if="isResetForm" />
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

    <!--    <auth-register class="max-w-[360px]" />-->
    <!--    <auth-reset-password class="max-w-[360px]" />-->
  </div>
</template>

<style scoped></style>
