import { defineStore } from 'pinia'
import applicationRepository from '~/services/repository/applicationRepository'
import Application from '~/services/classes/Application'

interface ISettingsStore {
  isMobile: boolean
  moderatorId: string | number | null
  favouritesCount: string | number | null
}
export const useSettingsStore = defineStore('settings', {
  state: (): ISettingsStore => ({
    isMobile: false,
    moderatorId: null,
    favouritesCount: null
  }),
  actions: {
    async setSettings() {
      try {
        const response = await applicationRepository.application()
        console.log('app: ', response)
        const settings = new Application(response)
        this.moderatorId = settings.moderatorId
        this.favouritesCount = settings.favouritesCount
      } catch (e) {
        console.log(e)
      }
    }
  }
})
