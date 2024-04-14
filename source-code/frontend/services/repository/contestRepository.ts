import { useNuxtApp } from '#imports'

const contestRepository = {
  prizeList: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/auth/active-contest/prize-block')
  },
  currentUserList: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/auth/active-contest/model-block')
  },
  winnerList: async () => {
    const { $http } = useNuxtApp()
    const response = await $http.get('/api/auth/winners')
    console.log('winners: ', response)
    return response.data.data
  },
  uploadContestPhoto: data => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/active-contest/add-photo', data)
  },
  allModelList: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/auth/active-contest/all-publications-block')
  }
}

export default contestRepository
