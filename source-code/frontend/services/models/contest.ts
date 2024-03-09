import type { IUser } from '~/services/models/user'

export interface IContest {
  contest: IContestBlock
}
export interface IContestBlock {
  name: string
  start: string
  finish: string
  active: boolean
  prizes: IContestPrize[]
}
export interface IContestPrize {
  place: number
  name: string
  description: string
  image: string
}

export interface IContestPlayers {
  name: string
  users: IContestUser[]
}
export interface IContestUser {
  id: number
  rating: number | string
  image: string | null
  user: IUser
}
