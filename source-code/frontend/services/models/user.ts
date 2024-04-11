import { EUserAccountType } from '~/services/enums'
import type { ICountry } from '~/services/models/ICountry'

export interface IUser {
  id: number
  avatar: string
  name: string
  email: string
  created_at: string
  role: EUserAccountType
  country: ICountry | null
  info?: IUserModelInfo | null
  active_contest: boolean | null
  is_favorite: boolean | null
  is_winner: boolean | null
}

export interface IUserFan extends Omit<IUser, 'info | active_contest | is_winner'> {}

export interface IHair {
  id: number
  color: string
}

export interface IBreast {
  id: number
  size: string
}

export interface IUserModelMessageRules {
  from_subscribers: boolean | null
  from_all_model: boolean | null
  from_all_fans: boolean | null
  from_all_users: boolean | null
  from_no_one: boolean | null
}

export interface IUserModelInfo {
  birthdate?: number | null
  height?: number | null
  weight?: number | null
  size?: number | null
  waist?: number | null
  hips?: number | null
  city?: string | null
  about?: string | null
  hair_color: IHair | null
  breast: IBreast | null
  messages_status?: IUserModelMessageRules | null
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserRegister {
  email: string
  password: string
}

export interface IAccountCheck {
  title: string
  type: string
}

export interface IExtendedAccountCheck extends IAccountCheck {
  route?: string | null
  routeName?: string | null
}
