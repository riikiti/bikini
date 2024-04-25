import { useNuxtApp } from '#imports'

const wikiRepository = {
  userPrivacy: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/agreement')
    return response.data
  },
  privacy: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/policy')
    return response.data
  },
  terms: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/terms')
    return response.data
  },
  main: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/main')
    return response.data
  }
}
export default wikiRepository
