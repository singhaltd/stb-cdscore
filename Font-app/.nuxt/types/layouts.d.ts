import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "default"
declare module "D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}