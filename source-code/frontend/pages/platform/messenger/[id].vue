<script setup lang="ts">
  import { definePageMeta, useRouter, useRoute } from '#imports'
  import { NSpace, useMessage } from 'naive-ui'
  import { ref, onMounted } from 'vue'
  import messengerRepository from '~/services/repository/messengerRepository'
  import Messenger from '~/services/classes/Messenger'
  import MessengerHeader from '~/components/Messenger/MessengerHeader.vue'
  import MessngerForm from '~/components/Messenger/MessngerForm.vue'

  definePageMeta({
    layout: 'profile-layout',
    middleware: 'auth'
  })

  const route = useRoute()

  const message = useMessage()

  const router = useRouter()

  const messenger = ref(null)

  const fetchMessages = async () => {
    try {
      const response = await messengerRepository.getMessagesById(route.params.id)
      console.log('Response messenger: ', response)
      messenger.value = new Messenger(response.messages) ?? null
      console.log('mess: ', messenger.value)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  const sendMessage = async data => {
    try {
      console.log('data from form: ', data)
      const response = await messengerRepository.sendMessageById({
        receiver_id: route.params.id,
        content: data ?? ''
      })
      message.success(response)
      await fetchMessages()
    } catch (e) {
      console.log('error: to send message: ', e)
    }
  }

  onMounted(async () => {
    await fetchMessages()
  })
</script>

<template>
  <div>{{ route.params.id }}</div>
  <n-space vertical>
    <messenger-header :user="messenger?.receiverUser" />
    <div class="mt-4">
      <n-space vertical>
        <div class="text-xl mb-3">Сообщение</div>
        <messnger-form @validated="sendMessage($event)" />
      </n-space>
    </div>
    <div class="mt-6">
      <div class="text-xl mb-3">Переписка</div>
    </div>
  </n-space>
</template>

<style scoped></style>
