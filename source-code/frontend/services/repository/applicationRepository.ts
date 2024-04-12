import { useNuxtApp } from '#imports'
import type { IUserLogin } from '~/services/models'

const applicationRepository = {
  application: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('api/application')
    console.log('resp app: ', response.data)
    return response.data
  }
}
export default applicationRepository
