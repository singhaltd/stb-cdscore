import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "redirect"
declare module "D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}