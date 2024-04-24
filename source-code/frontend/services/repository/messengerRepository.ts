import { useNuxtApp } from '#imports'
import type { IUserLogin } from '~/services/models'

const messengerRepository = {
  allChats: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/auth/messenger/messages')
    return response.data
  },
  getMessagesById: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.get(`/api/auth/messenger/messages/${id}`)
    return response.data.data
  },
  sendMessageById: async params => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/auth/messenger/messages/${params.receiver_id}`, {
      content: params.content
    })
    return response.data.data
  }
}
export default messengerRepository
