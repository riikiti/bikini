import { useNuxtApp } from '#imports'
import type { IUserLogin } from '~/services/models'

const messengerRepository = {
  allChats: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/messenger/messages')
    console.log('resp app: ', response.data)
    return response.data
  },
  getMessagesById: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.get(`/api/messenger/messages/${id}`)
    console.log('resp app: ', response.data.data)
    return response.data.data
  },
  sendMessageById: async params => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/messenger/messages/${params.receiver_id}`, {
      content: params.content
    })
    console.log('resp app: ', response.data)
    return response.data.data
  }
}
export default messengerRepository
