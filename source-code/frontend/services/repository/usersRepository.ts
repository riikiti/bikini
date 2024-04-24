import { useNuxtApp } from '#imports'

const usersRepository = {
  models: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/auth/models')
    return response.data
  },
  favourites: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/auth/user-favorites')
    return response.data
  },
  profileById: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.get(`/api/auth/user/${id}`)
    return response.data.data
  },
  getGalleryPhotos: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.get(`/api/auth/model-photos/${id}`)
    return response.data.data
  },
  addGalleryPhoto: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/auth/gallery-photo`)
    return response
  }
}
export default usersRepository
