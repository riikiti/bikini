<script setup lang="ts">
  import { definePageMeta } from '#imports'
  import { NButton, NDialog, NIcon, NImage, NSpace, useMessage, useDialog } from 'naive-ui'
  import { Mail, User, Heart, X } from 'lucide-vue-next'
  import { RoutesNames } from '~/services/routes-names'

  definePageMeta({
    layout: 'profile-layout',
    key: 'settings',
    middleware: 'auth'
  })

  const message = useMessage()
  const dialog = useDialog()

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
</script>

<template>
  <div class="text-2xl font-bold sm:text-3xl mb-10">Переписки</div>
  <n-space vertical size="large">
    <div
      v-for="(messege, idx) in userMessages"
      :key="idx"
      class="p-4 border-solid border-gray-400 border rounded-md overflow-hidden relative"
    >
      <n-button text size="large" class="absolute top-6 right-4" @click="handleConfirm(messege.id)">
        <n-icon :size="24">
          <x />
        </n-icon>
      </n-button>
      <n-space size="large" align="center">
        <div class="w-[64px] h-[64px] overflow-hidden rounded-lg">
          <n-image :src="messege.user.avatar" width="100%" height="100%" object-fit="cover" />
        </div>
        <n-space vertical>
          <div class="text-2xl font-bold">{{ messege.user.name }}</div>
          <n-space>
            <n-button>
              <n-icon :size="24">
                <heart />
              </n-icon>
            </n-button>
            <n-button>
              <n-icon :size="24">
                <mail />
              </n-icon>
            </n-button>
            <n-button>
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
