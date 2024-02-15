import { defineStore } from 'pinia'

interface IUserStore {
  isAuth: boolean
  avatar: string
  username: string
  email: string
}

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    isAuth: true,
    avatar: 'https://www.shadcn-vue.com/avatars/01.png',
    username: 'usertest228',
    email: 'test228@mail.ru'
  })
})
