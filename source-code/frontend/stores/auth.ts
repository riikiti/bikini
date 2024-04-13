import { defineStore } from 'pinia'
import personalRepository from '~/services/repository/personalRepository'
import type {
  IAccountCheck,
  IExtendedAccountCheck,
  IUser,
  IUserFan,
  IUserLogin,
  IUserRegister
} from '~/services/models/user'
import { persistedState } from '#imports'
import { RoutesNames } from '~/services/routes-names'
import { EUserAccountType } from '~/services/enums'

interface IAuthStore {
  isAuth: boolean
  authTokenKey: string
  user: IUser | IUserFan | null
  check: IAccountCheck[] | []
}

export const useAuthStore = defineStore('auth', {
  state: (): IAuthStore => ({
    isAuth: false,
    authTokenKey: 'JWT_SECRET',
    user: null,
    check: []
  }),
  persist: {
    storage: persistedState.localStorage
  },
  actions: {
    async refresh() {
      try {
        const response = await personalRepository.refresh()
        const { data } = response
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
        this.check = response.data.check.reduce(
          (acc: IExtendedAccountCheck[], val: IAccountCheck) => {
            if (val.type === 'settings') {
              const additionalParams = {
                route: RoutesNames.SETTINGS,
                routeName: 'Настройки'
              }
              acc.push({ ...val, ...additionalParams })
            } else if (val.type === 'portfolio') {
              const additionalParams = {
                route: RoutesNames.PROFILE + `${this.user?.id}`,
                routeName: 'Профиль'
              }
              acc.push({ ...val, ...additionalParams })
            } else {
              acc.push(val)
            }

            return acc as IExtendedAccountCheck[]
          },
          []
        )
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
