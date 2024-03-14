import { useNuxtApp } from '#imports'
import type { IUserLogin } from '~/services/models'

const personalRepository = {
  login: (params: IUserLogin) => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/login', params)
  },
  register: (params: IUserLogin) => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/register', params)
  },
  refresh: () => {
    const { $http } = useNuxtApp()
    return $http.post('/api/auth/refresh')
  },
  profile: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/auth/me')
  }
}
export default personalRepository
