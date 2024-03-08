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
