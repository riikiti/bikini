<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { NButton, NDialog, NIcon, NImage, NSpace, useMessage, useDialog } from 'naive-ui'
  import { Mail, User, Heart, X } from 'lucide-vue-next'
  import { RoutesNames } from '~/services/routes-names'
  import messengerRepository from '~/services/repository/messengerRepository'
  import Messenger from '~/services/classes/Messenger'

  definePageMeta({
    layout: 'profile-layout',
    key: 'settings',
    middleware: 'auth'
  })

  const message = useMessage()
  const dialog = useDialog()

  const chats = ref(null)

  const fetchMessages = async () => {
    try {
      const response = await messengerRepository.allChats()
      console.log('Response messenger: ', response)
      chats.value = response.user_chats
    } catch (e) {
      console.log(e)
    }
  }

  const handleConfirm = messege_id => {
    dialog.warning({
      title: 'Confirm',
      content: `Are you sure? To delete ${messege_id}`,
      positiveText: 'Sure',
      negativeText: 'Not Sure',
      onPositiveClick: () => {
        message.success('Sure')
      },
      onNegativeClick: () => {
        message.error('Not Sure')
      }
    })
  }

  const userMessages = [
    {
      id: 1,
      user: {
        id: 1,
        avatar: 'https://www.shadcn-vue.com/avatars/01.png',
        name: 'usertest228',
        email: 'test228@mail.ru'
      }
    },
    {
      id: 2,
      user: {
        id: 2,
        avatar: 'https://www.shadcn-vue.com/avatars/01.png',
        name: 'usertest228',
        email: 'test228@mail.ru'
      }
    }
  ]
  const handleNegativeClick = () => {
    message.warning('Cancel')
  }
  const handlePositiveClick = () => {
    message.success('Confirm')
  }

  onMounted(async () => {
    await fetchMessages()
  })
</script>

<template>
  <div class="text-2xl font-bold sm:text-3xl mb-10">Переписки</div>
  <n-space vertical size="large">
    <div
      v-for="(messege, idx) in chats"
      :key="idx"
      class="p-4 border-solid border-gray-400 border rounded-md overflow-hidden relative"
    >
      <n-space size="large" align="center">
        <div class="w-[64px] h-[64px] overflow-hidden rounded-lg">
          <n-image
            v-if="messege.avatar"
            :src="messege.avatar"
            width="100%"
            height="100%"
            object-fit="cover"
          />
          <img
            v-else
            src="~/assets/images/profile/user-default.png"
            class="w-full h-full object-cover"
          />
        </div>
        <n-space vertical>
          <div class="text-2xl font-bold">{{ messege.name }}</div>
          <n-space>
            <n-button tag="a" :href="RoutesNames.MESSENGER + `/${messege.id}`">
              <n-icon :size="24">
                <mail />
              </n-icon>
            </n-button>
            <n-button tag="a" :href="RoutesNames.PROFILE + `${messege.id}`">
              <n-icon :size="24">
                <user />
              </n-icon>
            </n-button>
          </n-space>
        </n-space>
      </n-space>
    </div>
  </n-space>
</template>

<style scoped></style>
