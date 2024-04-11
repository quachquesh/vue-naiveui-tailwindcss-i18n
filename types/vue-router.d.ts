import 'vue-router'
import { Auth } from '@/types'

declare module 'vue-router' {
  export declare interface RouteMeta extends Record<string | number | symbol, unknown> {
    roles?: Auth.RoleLevel[]
    title?: string
  }
}
