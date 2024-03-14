import { defineStore } from 'pinia'
import { useRuntimeConfig } from '#imports'
import personalRepository from '~/services/repository/personalRepository'
import type { IUserLogin, IUserRegister } from '~/services/models/user'
const { authTokenKey } = useRuntimeConfig().public

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false,
    authTokenKey: authTokenKey,
    refreshTimerId: null,
    refreshDelayMinutes: 30
  }),
  actions: {
    async refresh() {
      try {
        const response = await personalRepository.refresh()
        const { data } = response
        const newToken = data.token.original.access_token
        localStorage.setItem(this.authTokenKey, newToken)
        this.isAuth = true
        if (this.refreshTimerId === null) {
          this.startRefreshInterval()
        }
      } catch (e) {
        console.log(e)
      }
    },
    async login(params: IUserLogin) {
      const response = await personalRepository.login(params)
      const { data } = response
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
      if (this.refreshTimerId === null) {
        this.startRefreshInterval()
      }
    },
    logout() {
      this.removeToken()
    },
    removeToken() {
      localStorage.removeItem(this.authTokenKey)
      this.isAuth = false
      this.stopRefreshInterval()
    },
    startRefreshInterval() {
      this.refreshTimerId = setInterval(this.refresh, 1000 * 60 * this.refreshDelayMinutes)
    },
    stopRefreshInterval() {
      clearInterval(this.refreshTimerId)
      this.refreshTimerId = null
    },
    async register(params: IUserRegister) {
      const response = await personalRepository.register(params)
      const { data } = response
      const newToken = data.token.original.access_token
      localStorage.setItem(this.authTokenKey, newToken)
      this.isAuth = true
      if (this.refreshTimerId === null) {
        this.startRefreshInterval()
      }
    }
  }
})
