import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/vendor',
    meta: {
      title: i18nRaw.t('menus.vendor-management.root')
    },
    children: [
      {
        path: 'list',
        name: RouteName.vendor.root,
        meta: {
          title: i18nRaw.t('menus.vendor-management.list')
        },
        redirect: {
          name: RouteName.vendor.index
        },
        children: [
          {
            path: '',
            name: RouteName.vendor.index,
            component: () => import('@/views/vendor-management/vendor-list/IndexView.vue')
          },
          {
            path: ':id',
            name: RouteName.vendor.detail.root,
            meta: {
              title: 'Test'
            },
            redirect: {
              name: RouteName.vendor.detail.index
            },
            children: [
              {
                path: '',
                name: RouteName.vendor.detail.index,
                component: () => import('@/views/vendor-management/vendor-list/DetailView.vue')
              },
              {
                path: 'child',
                name: RouteName.vendor.detail.child,
                component: () =>
                  import('@/views/vendor-management/vendor-list/DetailChildView.vue'),
                meta: {
                  title: 'Test child'
                }
              }
            ]
          }
        ]
      },
      {
        path: 'create',
        name: RouteName.vendor.create,
        component: () => import('@/views/vendor-management/new-vendor/IndexView.vue'),
        meta: {
          title: i18nRaw.t('menus.vendor-management.add')
        }
      }
    ]
  }
]

export default routes
