<script setup lang="ts">
  import { definePageMeta, useRouter, useRoute } from '#imports'
  import { NImage, NSpace, NVirtualList, useMessage } from 'naive-ui'
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
      messenger.value = new Messenger(response.messenger) ?? null
      console.log('mess: ', messenger.value)
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
      <n-space v-if="messenger && messenger.messages.length" vertical>
        <div v-for="(message, idx) in messenger.messages" class="chat">
          <n-space>
            <n-space>
              <div class="h-[65px] relative overflow-hidden rounded-md">
                <template v-if="message.senderId === messenger.senderUser.id">
                  <n-image
                    v-if="messenger.senderUser.avatar"
                    :src="messenger.senderUser.avatar"
                    fallback-src="~/assets/images/profile/user-default.png"
                    width="100%"
                    height="100%"
                    object-fit="cover"
                    class="w-full h-full"
                  />
                  <img
                    v-else
                    src="~/assets/images/profile/user-default.png"
                    class="w-full h-full object-cover"
                  />
                </template>
                <template v-else-if="message.senderId === messenger.receiverUser.id">
                  <n-image
                    v-if="messenger.receiverUser.avatar"
                    :src="messenger.receiverUser.avatar"
                    fallback-src="~/assets/images/profile/user-default.png"
                    width="100%"
                    height="100%"
                    object-fit="cover"
                    class="w-full h-full"
                  />
                  <img
                    v-else
                    src="~/assets/images/profile/user-default.png"
                    class="w-full h-full object-cover"
                  />
                </template>
              </div>
            </n-space>
            <n-space vertical justify="space-between">
              <n-space class="font-medium">
                <div v-if="message.senderId === messenger.senderUser.id">
                  {{ messenger.senderUser.name }}
                </div>
                <div v-else-if="message.senderId === messenger.receiverUser.id">
                  {{ messenger.receiverUser.name }}
                </div>
                <div>
                  {{ message.createdAt }}
                </div>
              </n-space>
              {{ message.content }}
            </n-space>
          </n-space>
        </div>
      </n-space>
    </div>
  </n-space>
</template>

<style scoped></style>
