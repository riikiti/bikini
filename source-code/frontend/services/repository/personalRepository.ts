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
  refreshPassword: data => {
    const { $http } = useNuxtApp()
    //password-recovery
    console.log(data)
    return $http.get('/api/mail', {
      params: {
        email: data.email
      }
    })
  },
  confirmRecovery: async params => {
    const { $http } = useNuxtApp()
    const { data } = await $http.post('/api/confirm-password', params)
    return data
  },
  profile: () => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/me')
  },
  addToFavourite: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/auth/favourite/${id}`)
    return response.data.data
  },
  removeFromFavourite: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.delete(`/api/auth/favourite/${id}`)
    return response.data.data
  },
  settingsList: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/auth/property?role=model')
    return response.data.data
  },
  finance: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/auth/finance')
    return response.data
  },
  save: async params => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/fill', params)
  },
  freeVoting: async params => {
    const { $http } = useNuxtApp()
    const response = await $http.post('api/auth/payment/create-free', params)
    return response.data.data
  },
  premiumVoting: async params => {
    const { $http } = useNuxtApp()
    const response = await $http.post('api/auth/payment/create', params)
    return response.data
  }
}
export default personalRepository
