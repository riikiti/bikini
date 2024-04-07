import { useNuxtApp } from '#imports'

const usersRepository = {
  models: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/models')
    return response.data
  },
  getGalleryPhotos: async id => {
    const { $http } = useNuxtApp()
    const response = await $http.get(`/api/model-photos/${id}`)
    return response.data.data
  },
  addGalleryPhoto: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.post(`/api/gallery-photo`)
    return response
  }
}

export default usersRepository
