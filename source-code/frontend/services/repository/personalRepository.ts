import { useNuxtApp } from '#imports'
import type { IUserLogin } from '~/services/models'

const personalRepository = {
  login: (params: IUserLogin) => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/login', params)
  },
  register: (params: IUserLogin) => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/register', params)
  },
  refresh: () => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/refresh')
  },
  profile: () => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/me')
  },
  settingsList: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('api/property?role=model')
    return response.data.data
  },
  like: params => {
    const { $http } = useNuxtApp()
    console.log('user id: ', params)
  }
}
export default personalRepository