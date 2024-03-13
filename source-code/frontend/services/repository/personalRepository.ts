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
  profile: () => {
    const { $http } = useNuxtApp()
    return $http.get('/api/auth/me')
  }
}
export default personalRepository

/*
const personalRepository = {
  refresh: () => http.get('api/private/v1/admin/auth/refresh'),
  profile: async () => {
    const { data } = await http.get('api/private/v1/admin/profile')
    return data.data
  },
  login: params => http.post('api/private/v1/admin/auth/login', params)
}

export default personalRepository
*/
