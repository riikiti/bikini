import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#imports'
import personalRepository from '~/services/repository/personalRepository'
const { authTokenKey } = useRuntimeConfig().public

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false,
    authTokenKey: authTokenKey,
    refreshTimerId: null,
    refreshDelayMinutes: 30
  }),
  actions: {
    async login(params) {
      const response = await personalRepository.login(params)
      const { data } = response
      console.log('data: ', data)
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
    },
    async register(params) {
      const response = await personalRepository.register(params)
      const { data } = response
      console.log('data reg: ', data)
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
    }
  }
})
