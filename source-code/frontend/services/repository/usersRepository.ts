import { useNuxtApp } from '#imports'

const usersRepository = {
  models: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/models')
    return response.data
  }
}

export default usersRepository
