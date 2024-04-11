import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layouts/LayoutDefault.vue'
import remainingRoutes from './modules/remaining'

const modules = import.meta.glob(['./modules/**/*.ts', '!./modules/**/remaining.ts'], {
  import: 'default',
  eager: true
})

let routes: any[] = []
for (const path in modules) routes = routes.concat(modules[path])

const router = createRouter({
  history: createWebHistory(),
  // routes: routes.concat(remainingRoutes),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: {
        name: RouteName.index
      },
      children: routes
    },
    ...remainingRoutes
  ]
})

router.beforeEach(async (to, from, next) => {
  // -------- Authentication --------
  const authStore = useAuthStore()
  if (authStore.profile === null) {
    await authStore.getMe().catch(() => {})
  }
  // -------- END Authentication --------

  if (authStore.profile) {
    // Nếu đã đăng nhập thì không cho vào trang login
    if (to.name === RouteName.login) {
      return next({ name: RouteName.index })
    }
  } else {
    // Nếu chưa đăng nhập thì không cho vào các trang khác trừ login
    if (to.name !== RouteName.login) {
      return next({ name: RouteName.login })
    }
  }

  // Check permission
  if (authStore.profile && to.name !== '403') {
    if (!useCheckUserPermission(to.meta.roles)) {
      return next({ name: '403' })
    }
  }

  next()
})

router.afterEach((to) => {
  const appStore = useAppStore()
  const routeUtils = useRouteUtils()

  const params = to.params as Record<string, string>

  appStore.breadcrumbs = []
  to.matched.forEach((route) => {
    console.log(route)
    if (route.meta.title) {
      appStore.breadcrumbs.push({
        text: route.meta.title,
        to: route.name ? routeUtils.replaceParamsInPath(route.path, params) : undefined,
        routeName: route.name ? route.name.toString() : undefined
      })
    }
  })
})
export default router
