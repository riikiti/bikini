import type { Component } from 'vue'
import { EUserAction } from '~/services/enums'

export interface IUserProfileAction {
  action: EUserAction
  component?: Component
  tooltip?: string
  callback?: () => void
}

export interface IUserBaseStatistics {
  header: string
  value: string
}
