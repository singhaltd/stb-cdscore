import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     public: {
        BASE_URL: string,
    },

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    secretKey: string,

    base_api: string,
  }
}