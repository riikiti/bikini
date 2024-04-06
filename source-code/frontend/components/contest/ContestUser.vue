<script setup lang="ts">
  import { NButton, NGradientText, NSpace } from 'naive-ui'
  import { ref } from 'vue'
  import { ContestUserModal } from '#components'
  import { RoutesNames } from '~/services/routes-names'
  import contestRepository from '~/services/repository/contestRepository'

  const isEditForm = ref(false)

  const userStore = useAuthStore()

  const handleEditForm = () => {
    isEditForm.value = true
    handleModal()
  }

  const contestUser = ref(null)

  const fetchActiveModel = async () => {
    console.log('saver')
    const { data } = await contestRepository.currentUserList()
    contestUser.value = data.contest_model
    console.log(contestUser.value)
  }

  const currentModel = computed(() => contestUser.value)

  const save = async () => {
    await fetchActiveModel()
    await userStore.profile()
    handleCloseModal()
  }

  const showModal = ref(false)
  const handleModal = () => {
    showModal.value = !showModal.value
  }
  const handleCloseModal = () => {
    showModal.value = false
    isEditForm.value = false
  }
  onMounted(async () => {
    await fetchActiveModel()
  })
  /*todo refetch all active users*/
</script>

<template>
  <div class="w-full">
    <n-space v-if="!currentModel" justify="center">
      <n-button type="info" size="large" class="text-3xl py-8" @click="handleModal()"
        >Стать участником конкурса</n-button
      >
    </n-space>
    <div v-else class="bg-gray-100/50 w-full py-8">
      <n-space vertical size="large" align="center">
        <div class="text-2xl">
          Я участница конкурса,мой рейтинг
          <n-gradient-text gradient="linear-gradient(to right, #8a2387, #e94057, #f27121)">
            {{ currentModel.rating }}
          </n-gradient-text>
        </div>
        <div>
          <img :src="currentModel.photo" alt="" class="w-[150px] h-[150px]" />
        </div>
        <n-space class="mt-6">
          <n-button
            tag="a"
            :href="RoutesNames.PROFILE"
            class="uppercase"
            type="primary"
            size="large"
            dashed
            >Мой Профиль</n-button
          >
          <n-button class="uppercase" type="primary" size="large" dashed @click="handleEditForm"
            >Обновить фото</n-button
          >
          <n-button
            tag="a"
            :href="RoutesNames.STATISTICS"
            class="uppercase"
            type="primary"
            size="large"
            dashed
            >Статистика</n-button
          >
        </n-space>
      </n-space>
    </div>
  </div>
  <contest-user-modal
    v-model:show="showModal"
    :is-edit="isEditForm"
    @formsave="save"
    @close="handleCloseModal()"
  />
</template>

<style scoped></style>
