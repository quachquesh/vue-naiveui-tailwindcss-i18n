import type { MenuMixedOption } from 'naive-ui/es/menu/src/interface'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { NEllipsis } from 'naive-ui'
import type { RendererNode } from 'vue'

function renderIcon(icon: string) {
  return () => h(Icon, { icon })
}

function renderRoute(data: { label: string; name: string }) {
  return renderLabel(h(RouterLink, { to: { name: data.name } }, { default: () => data.label }))
}

function renderLabel(label: string | RendererNode) {
  const { sideBarCollapsed } = useAppStore()
  if (sideBarCollapsed) {
    return () => h(() => label)
  }
  return () => h(NEllipsis, { tooltip: { keepAliveOnHover: false } }, { default: () => label })
}

export const menuOptions = computed<MenuMixedOption[]>(() => [
  {
    label: renderRoute({
      label: $t('menus.home'),
      name: RouteName.index
    }),
    key: RouteName.index,
    icon: renderIcon('fluent:home-16-regular'),
    props: {}
  },
  {
    label: renderLabel($t('menus.page_1.root')),
    key: 'page_1',
    icon: renderIcon('solar:user-circle-outline'),
    show: true,
    children: [
      {
        label: renderRoute({
          label: $t('menus.page_1.list'),
          name: RouteName.page_1.root
        }),
        key: RouteName.page_1.root
      }
    ]
  }
])
