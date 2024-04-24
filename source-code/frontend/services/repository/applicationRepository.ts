import { useNuxtApp } from '#imports'
import type { IUserLogin } from '~/services/models'

const applicationRepository = {
  application: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('api/auth/application')
    return response.data
  }
}
export default applicationRepository
