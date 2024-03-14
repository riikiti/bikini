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
  allModelList: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/active-contest/all-publications-block')
  }
}

export default contestRepository
