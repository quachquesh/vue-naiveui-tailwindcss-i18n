import 'vue-router'

declare module 'vue-router' {
  export declare interface RouteMeta extends Record<string | number | symbol, unknown> {
    title?: string
  }
}
