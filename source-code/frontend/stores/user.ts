import { defineStore } from 'pinia'

interface IUserStore {
  avatar: string
  username: string
  email: string
}

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    avatar: 'https://www.shadcn-vue.com/avatars/01.png',
    username: 'usertest228',
    email: 'test228@mail.ru'
  })
})
