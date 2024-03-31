import { useNuxtApp } from '#imports'

const contestRepository = {
  prizeList: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/active-contest/prize-block')
  },
  currentUserList: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/active-contest/model-block')
  },
  uploadContestPhoto: data => {
    const { $http } = useNuxtApp()
    return $http.post('/api/active-contest/add-photo', data)
  },
  allModelList: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/active-contest/all-publications-block')
  }
}

export default contestRepository
