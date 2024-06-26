<script setup lang="ts">
  import { definePageMeta, useRouter, useAuthStore, storeToRefs, useSettingsStore } from '#imports'
  import { EUserAccountType } from '~/services/enums'
  import { RoutesNames } from '~/services/routes-names'
  import { NAlert, NGradientText, NSpace, useMessage } from 'naive-ui'
  import personalRepository from '~/services/repository/personalRepository'
  import { ref, computed, onMounted } from 'vue'

  definePageMeta({
    layout: 'profile-layout',
    middleware: 'auth'
  })

  const authStore = useAuthStore()
  const settingsStore = useSettingsStore()
  const { user } = storeToRefs(authStore)
  const router = useRouter()
  const message = useMessage()

  const totalFinance = ref(null)
  const fetchTotalEarnedMoney = async () => {
    try {
      const { money } = await personalRepository.finance()
      totalFinance.value = money
      message.success('Успешно получены данные!')
    } catch (e) {
      console.log(e)
      message.error('Ошибка получения данных!')
    }
  }

  const money = computed(() => {
    return totalFinance.value ? `${totalFinance.value} руб.` : '0 руб.'
  })

  onMounted(async () => {
    if (user.value && user.value.role === EUserAccountType.USER_ACCOUNT) {
      await router.push(RoutesNames.ACTIVE_CONTEST)
    }
    await fetchTotalEarnedMoney()
  })
</script>

<template>
  <n-space vertical align="center" size="large">
    <h1>Финансы</h1>
    <div class="flex gap-2 uppercase justify-center text-xl md:text-3xl font-medium">
      ЗАРАБАТЫВАЙ <n-gradient-text>МНОГО</n-gradient-text>
    </div>
    <div class="flex gap-2 uppercase justify-center text-xl md:text-3xl font-medium">
      ЗАРАБАТЫВАЙ <n-gradient-text>ЗДЕСЬ</n-gradient-text>
    </div>
    <div class="flex gap-2 justify-center text-xl md:text-3xl font-medium">
      потому что <n-gradient-text class="uppercase">ЗДЕСЬ</n-gradient-text>
    </div>
    <h3 class="text-xl md:text-3xl font-medium italic my-6 md:my-12">
      наиболее активные участницы зарабатывают более <n-gradient-text>100 000</n-gradient-text> руб.
    </h3>
  </n-space>
  <n-space vertical size="large" class="max-w-[1024px] mx-auto">
    <div class="text-xl md:text-2xl font-medium">
      <n-gradient-text class="">Бонус-выплата</n-gradient-text>
      до 50% активным участницам конкурса, если набрано более 10 000 руб дополнительные баллов
    </div>
    <div class="text-xl md:text-2xl font-medium">
      <p>30% если набрано 5 000 руб</p>
      <p>20% если набрано 1 000 руб</p>
    </div>
    <div class="my-4">
      <n-alert title="Сумма к выплате" type="success">
        <p class="text-xl font-medium">
          твой баланс Бонус-выплаты в текущем конкурсе составляет:
          <n-gradient-text class="">{{ money }}</n-gradient-text>
        </p>
      </n-alert>
    </div>
    <div>
      <p class="text-xl font-medium">
        Выплата осуществляется после завершения конкурса в течении 5 банковских дней. По заявке на
        выплату, пожалуйста свяжитесь с
        <nuxt-link
          class="text-gray-400 underline-offset-4"
          :to="RoutesNames.MESSENGER + `/${settingsStore.moderatorId}`"
          >модератором</nuxt-link
        >
      </p>
    </div>
  </n-space>
</template>

<style scoped></style>
