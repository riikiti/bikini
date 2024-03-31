import { defineNuxtRouteMiddleware } from '#imports'
import { navigateTo } from '#imports'
import { RoutesNames } from '~/services/routes-names'
import { useLocalePath } from '#imports'

export default defineNuxtRouteMiddleware(to => {
  if (
    to.fullPath.includes(RoutesNames.PLATFORM_BLOG) ||
    to.fullPath.includes(RoutesNames.PLATFORM_BOX) ||
    to.fullPath.includes(RoutesNames.PLATFORM_GALLERY)
  ) {
    const localePath = useLocalePath()
    return navigateTo(localePath(RoutesNames.PROFILE))
  }
})
