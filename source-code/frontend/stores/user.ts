import { defineStore } from 'pinia'
import { EUserAccountType } from '~/services/enums'
import type { IUser } from '~/services/models'
import personalRepository from '~/services/repository/personalRepository'

interface IUserStore extends IUser {
  isAuth: boolean
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  getters: {
    accountType: state => {
      if (state.user) {
        return state.user.role
      }
    }
  },
  actions: {}
})

/*isAuth: true,
    id: 1,
    avatar: 'https://www.shadcn-vue.com/avatars/01.png',
    name: 'usertest228',
    email: 'test228@mail.ru',
    created_at: '20.02.2024',
    role: EUserAccountType.MODEL_ACCOUNT,
    country: {
  id: 1,
      name: 'Russia',
      icon: 'https://www.flagcolorcodes.com/data/flag-of-russia.png'
},
info: {
  birthdate: 1991,
      height: 175,
      weight: 68,
      size: 88,
      waist: 88,
      hips: 88,
      city: 'HELSINKI',
      about:
  'I would describe myself as positive, self-sufficient, supportive of other people, passionate about my work I would describe myself as positive, self-sufficient, supportive of other people, passionate about my work I would describe myself as positive, self-sufficient, supportive of other people, passionate about my work ',
      hair: {
    id: 1,
        color: 'светлые блондинка'
  },
  breast: {
    id: 1,
        size: 'AA'
  },
  messages_status: {
    from_subscribers: null,
        from_all_models: null,
        from_all_fans: null,
        from_all_users: null,
        from_no_one: null
  }
}*/
