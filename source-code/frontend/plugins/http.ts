import { useRuntimeConfig, defineNuxtPlugin } from '#imports'
import axios, { type AxiosInstance } from 'axios'
import { stringify } from 'qs'
import { useAuthStore } from '#imports'

export default defineNuxtPlugin(() => {
  const { apiUrl, authTokenKey } = useRuntimeConfig().public
  const authStore = useAuthStore()
  const http = axios.create({
    baseURL: apiUrl,
    paramsSerializer: params => stringify(params)
  }) as AxiosInstance

  http.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem(authTokenKey)
      config.headers = {
        ...config.headers,
        ...(token && { Authorization: `Bearer ${token}` })
      }
      return config
    },
    function (error) {
      console.log('fsdafs:', error)
    }
  )
  http.interceptors.response.use(
    response => response,
    async error => {
      if (error.response.data.message === 'Token has expired') {
        await authStore.refresh()
        const token = localStorage.getItem(authTokenKey)
        error.config.headers.authorization = `Bearer ${token}`
        return http.request(error.config)
      }
      if (error.response.status === 401) {
        const router = useRouter()
        authStore.removeToken()
        router.push('/')
        return Promise.reject(error.response)
      }
    }
  )

  return {
    provide: {
      http
    }
  }
})
