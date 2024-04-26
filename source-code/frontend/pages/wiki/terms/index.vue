<script setup lang="ts">
  import { TheWrapper } from '#components'
  import wikiRepository from '~/services/repository/wikiRepository'
  import { onMounted } from '#imports'
  import { NSkeleton } from 'naive-ui'

  const userPrivacy = ref(null)
  const isLoading = ref(false)

  const fetchUserPrivacy = async () => {
    isLoading.value = true
    try {
      const response = await wikiRepository.terms()
      console.log(response)
      userPrivacy.value = response
    } catch (e) {
      console.log(e)
    }
    isLoading.value = false
  }

  onMounted(async () => {
    await fetchUserPrivacy()
  })
</script>

<template>
  <the-wrapper v-if="isLoading">
    <n-skeleton text :repeat="6" :sharp="false" size="large" />
  </the-wrapper>
  <the-wrapper>
    <h1 class="text-center text-xl md:text-4xl">Правила пользования Сайтом БИКИНИ СТАР</h1>

    <div v-if="userPrivacy" class="mt-6 md:mt-12">
      <div v-for="(block, idx) in userPrivacy.data" :key="idx">
        <h3 v-if="block.title">{{ block.title }}</h3>
        <div v-html="block.description" />
      </div>
    </div>
    <div class="text-center text-2xl font-medium my-6 sm:my-12">
      Редакция от {{ userPrivacy?.updated }}
    </div>
  </the-wrapper>
</template>

<style scoped lang="scss">
  :deep(p, p span, span) {
    font-size: 24px !important;
    line-height: 1.5 !important;
  }
  :deep(span) {
    font-size: 24px !important;
    line-height: 1.5 !important;
  }
  :deep(h3) {
    @apply font-medium text-xl md:text-3xl;
  }
</style>
