import type { MenuMixedOption } from 'naive-ui/es/menu/src/interface'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { NEllipsis } from 'naive-ui'
import type { RendererNode } from 'vue'

function renderIcon(icon: string) {
  return () => h(Icon, { icon })
}

function renderRoute(data: { label: string; name: string }) {
  return renderLabel(h(RouterLink, { to: { name: data.name } }, { default: data.label }))
}

function renderLabel(label: string | RendererNode) {
  return () => h(NEllipsis, { tooltip: { keepAliveOnHover: false } }, { default: () => label })
}

export const menuOptions = computed<MenuMixedOption[]>(() => [
  {
    label: renderRoute({
      label: t('menus.home'),
      name: RouteName.index
    }),
    key: RouteName.index,
    icon: renderIcon('fluent:home-16-regular'),
    props: {}
  },
  {
    label: renderLabel(t('menus.vendor-management.root')),
    key: 'vendor-management',
    icon: renderIcon('solar:user-circle-outline'),
    show: true,
    children: [
      {
        label: renderRoute({
          label: t('menus.vendor-management.add'),
          name: RouteName.vendor.create
        }),
        key: RouteName.vendor.create
      },
      {
        label: renderRoute({
          label: t('menus.vendor-management.list'),
          name: RouteName.vendor.root
        }),
        key: RouteName.vendor.root
      }
    ]
  }
])
