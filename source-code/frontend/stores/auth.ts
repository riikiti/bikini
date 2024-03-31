import { defineStore } from 'pinia'
import personalRepository from '~/services/repository/personalRepository'
import type { IUserLogin, IUserRegister } from '~/services/models/user'
import { persistedState } from '#imports'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false,
    authTokenKey: 'JWT_SECRET',
    user: null
  }),
  persist: {
    storage: persistedState.localStorage
  },
  actions: {
    async refresh() {
      try {
        const response = await personalRepository.refresh()
        const { data } = response
        console.log('ttL: ', data)
        const newToken = data.token.original.access_token
        localStorage.setItem(this.authTokenKey, newToken)
        await this.profile()
        this.isAuth = true
      } catch (e) {
        console.log(e)
      }
    },
    getToken() {
      const token = localStorage.getItem(this.authTokenKey)
      return token
    },
    async profile() {
      try {
        const response = await personalRepository.profile()
        this.user = response.data.user.original
      } catch (error) {
        console.log(error)
      }
    },
    async login(params: IUserLogin) {
      const response = await personalRepository.login(params)
      const { data } = response
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      await this.profile()
      this.isAuth = true
    },
    logout() {
      this.removeToken()
    },
    removeToken() {
      localStorage.removeItem(this.authTokenKey)
      this.isAuth = false
    },
    async register(params: IUserRegister) {
      const response = await personalRepository.register(params)
      const { data } = response
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      await this.profile()
      this.isAuth = true
    }
  }
})
