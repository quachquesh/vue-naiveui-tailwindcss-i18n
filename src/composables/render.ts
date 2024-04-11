import type { RendererNode } from 'vue'
import type { EllipsisProps } from 'naive-ui'
import type { IconifyIconProps } from '@iconify/vue'
import { NEllipsis } from 'naive-ui'
import { Icon } from '@iconify/vue'

export const useRender = () => {
  function renderIcon(props: IconifyIconProps) {
    return () => h(Icon, props)
  }

  function renderEllipsis(label: string | RendererNode, props?: EllipsisProps) {
    return () =>
      h(NEllipsis, { tooltip: { keepAliveOnHover: false }, ...props }, { default: () => label })
  }

  return {
    renderIcon,
    renderEllipsis
  }
}
