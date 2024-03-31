import { defineNuxtRouteMiddleware, useRuntimeConfig, abortNavigation } from '#imports'
import { navigateTo } from '#imports'
import { RoutesNames } from '~/services/routes-names'

export default defineNuxtRouteMiddleware(to => {
  const { authTokenKey } = useRuntimeConfig().public
  const token = localStorage.getItem(authTokenKey)
  if (token && to.path === '/') {
    return navigateTo(RoutesNames.ACTIVE_CONTEST)
  }
  if (!token && to.path !== RoutesNames.MAIN) {
    abortNavigation()
    return navigateTo(RoutesNames.MAIN)
  }
})
