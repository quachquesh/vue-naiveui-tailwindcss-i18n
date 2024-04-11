import router from '@/router'
import { Auth } from '@/types'

export const useCheckUserPermission = (authLevel?: number | number[], ignoreAdminRole = true) => {
  const authStore = useAuthStore()
  if (ignoreAdminRole) {
    const isAdmin = authStore.profile?.roles.some((r) => r.level === Auth.RoleLevel.administrator)
    if (isAdmin) return true
  }
  if (!authLevel) return false
  if (Array.isArray(authLevel)) {
    return authStore.profile?.roles.some((r) => authLevel.includes(r.level))
  } else {
    return authStore.profile?.roles.some((r) => r.level <= authLevel)
  }
}

export const useCheckPermissionRouter = (routerName: string) => {
  const route = router.resolve({ name: routerName })
  const isHasPermission = useCheckUserPermission(route.meta.roles)
  if (!isHasPermission) {
    return false
  }
  return true
}
