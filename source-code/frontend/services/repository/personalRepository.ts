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
  addToFavourite: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/favourite/${id}`)
    return response.data.data
  },
  removeFromFavourite: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.delete(`/api/favourite/${id}`)
    return response.data.data
  },
  settingsList: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/property?role=model')
    return response.data.data
  },
  save: async params => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/fill', params)
  }
}
export default personalRepository
