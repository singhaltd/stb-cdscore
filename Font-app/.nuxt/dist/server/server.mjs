
// --------------------
// Request: D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/paths.mjs ($id_7d6c0eca)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/css.mjs ($id_d2738ebc)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/root-component.mjs ($id_5f5043d6)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/app-component.mjs ($id_2c254086)
// --------------------
const $id_94d2e41e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/components.plugin.mjs ($id_267ebbe2)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /pages/cdquestion/index.vue?macro=true ($id_be557372)
// - /components/profile/customer.vue ($id_cc4e0c4e)
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /components/table/customer.vue ($id_587613ac)
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /composables/locale.ts ($id_35d5db4b)
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /pages/users/[id].vue?macro=true ($id_bfb117aa)
// - /components/modal/sm.vue ($id_bf07e772)
// - /pages/users/index.vue?macro=true ($id_2240d037)
// - /pages/cdquestion/index.vue ($id_8b8710c4)
// - /pages/customer/[id].vue ($id_60c52b89)
// - /pages/customer/form.vue ($id_fccc8ef6)
// - /pages/customer/index.vue ($id_55a62451)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login/index.vue ($id_d006def6)
// - /pages/users/[id].vue ($id_036f2303)
// - /pages/users/index.vue ($id_34524033)
// - /plugins/apiAuth.ts ($id_72efcc68)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/layouts.mjs ($id_12ab3ca9)
// - /components/navbar/authtop.vue ($id_d79eeb69)
// - /components/navbar/aside.vue ($id_66aeca7d)
// - /layouts/auth.vue ($id_9a19ccb3)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/paths.mjs
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_7d6c0eca = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/paths.mjs ($id_7d6c0eca)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /pages/cdquestion/index.vue?macro=true ($id_be557372)
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /composables/locale.ts ($id_35d5db4b)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /pages/users/[id].vue?macro=true ($id_bfb117aa)
// - /pages/users/index.vue?macro=true ($id_2240d037)
// - /pages/cdquestion/index.vue ($id_8b8710c4)
// - /pages/customer/[id].vue ($id_60c52b89)
// - /pages/customer/form.vue ($id_fccc8ef6)
// - /pages/customer/index.vue ($id_55a62451)
// - /pages/login/index.vue ($id_d006def6)
// - /pages/users/[id].vue ($id_036f2303)
// - /pages/users/index.vue ($id_34524033)
// - /plugins/apiAuth.ts ($id_72efcc68)
// - /plugins/auth.ts ($id_0cce0b34)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /layouts/auth.vue ($id_9a19ccb3)
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, opts]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_1__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_1__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = router.resolve(to).fullPath;
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /components/table/customer.vue ($id_587613ac)
// - /pages/customer/index.vue ($id_55a62451)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /components/navbar/aside.vue ($id_66aeca7d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// - /layouts/auth.vue ($id_9a19ccb3)
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/css.mjs
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// - /assets/css/app.css ($id_ce6d0f9c)
// --------------------
const $id_d2738ebc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/css/app.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/css.mjs ($id_d2738ebc)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:Noto Sans Lao,sans-serif;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}:root,[data-theme]{background-color:hsla(var(--b1)/var(--tw-bg-opacity,1));color:hsla(var(--bc)/var(--tw-text-opacity,1))}html{-webkit-tap-highlight-color:transparent}:root,[data-theme=light]{--p:259 94% 51%;--pf:259 94% 41%;--sf:314 100% 38%;--af:174 60% 41%;--nf:219 14% 22%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:0 0% 100%;--s:314 100% 47%;--sc:0 0% 100%;--a:174 60% 51%;--ac:175 44% 15%;--n:219 14% 28%;--nc:0 0% 100%;--b1:0 0% 100%;--b2:0 0% 95%;--b3:180 2% 90%;--bc:215 28% 17%}[data-theme=dark]{--p:262 80% 50%;--pf:262 80% 40%;--sf:316 70% 40%;--af:175 70% 33%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:0 0% 100%;--s:316 70% 50%;--sc:0 0% 100%;--a:175 70% 41%;--ac:0 0% 100%;--n:218 18% 12%;--nf:223 17% 8%;--nc:220 13% 69%;--b1:220 18% 20%;--b2:220 17% 17%;--b3:219 18% 15%;--bc:220 13% 69%}[data-theme=cupcake]{--p:183 47% 59%;--pf:183 47% 47%;--sf:338 71% 62%;--af:39 84% 46%;--nf:280 46% 11%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--pc:183 100% 12%;--sc:338 100% 16%;--ac:39 100% 12%;--nc:280 83% 83%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--s:338 71% 78%;--a:39 84% 58%;--n:280 46% 14%;--b1:24 33% 97%;--b2:27 22% 92%;--b3:22 14% 89%;--bc:280 46% 14%;--rounded-btn:1.9rem;--tab-border:2px;--tab-radius:.5rem}[data-theme=bumblebee]{--p:41 74% 53%;--pf:41 74% 42%;--sf:50 94% 46%;--af:240 33% 11%;--nf:240 33% 11%;--b2:0 0% 90%;--b3:0 0% 81%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--bc:0 0% 20%;--ac:240 60% 83%;--nc:240 60% 83%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:240 33% 14%;--s:50 94% 58%;--sc:240 33% 14%;--a:240 33% 14%;--n:240 33% 14%;--b1:0 0% 100%}[data-theme=emerald]{--p:141 50% 60%;--pf:141 50% 48%;--sf:219 96% 48%;--af:10 81% 45%;--nf:219 20% 20%;--b2:0 0% 90%;--b3:0 0% 81%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--btn-text-case:uppercase;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:151 28% 19%;--s:219 96% 60%;--sc:210 20% 98%;--a:10 81% 56%;--ac:210 20% 98%;--n:219 20% 25%;--nc:210 20% 98%;--b1:0 0% 100%;--bc:219 20% 25%;--animation-btn:0;--animation-input:0;--btn-focus-scale:1}[data-theme=corporate]{--p:229 96% 64%;--pf:229 96% 51%;--sf:215 26% 47%;--af:154 49% 48%;--nf:233 27% 10%;--b2:0 0% 90%;--b3:0 0% 81%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--pc:229 100% 93%;--sc:215 100% 12%;--ac:154 100% 12%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--btn-text-case:uppercase;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:215 26% 59%;--a:154 49% 60%;--n:233 27% 13%;--nc:210 38% 95%;--b1:0 0% 100%;--bc:233 27% 13%;--rounded-box:0.25rem;--rounded-btn:.125rem;--rounded-badge:.125rem;--animation-btn:0;--animation-input:0;--btn-focus-scale:1}[data-theme=synthwave]{--p:321 70% 69%;--pf:321 70% 55%;--sf:197 87% 52%;--af:48 89% 46%;--nf:253 61% 15%;--b2:254 59% 23%;--b3:254 59% 21%;--pc:321 100% 14%;--sc:197 100% 13%;--ac:48 100% 11%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:197 87% 65%;--a:48 89% 57%;--n:253 61% 19%;--nc:260 60% 98%;--b1:254 59% 26%;--bc:260 60% 98%;--in:199 87% 64%;--inc:257 63% 17%;--su:168 74% 68%;--suc:257 63% 17%;--wa:48 89% 57%;--wac:257 63% 17%;--er:352 74% 57%;--erc:260 60% 98%}[data-theme=retro]{--p:3 74% 76%;--pf:3 74% 61%;--sf:145 27% 58%;--af:49 67% 61%;--nf:42 17% 34%;--inc:221 100% 91%;--suc:142 100% 87%;--wac:32 100% 9%;--erc:0 100% 90%;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:345 5% 15%;--s:145 27% 72%;--sc:345 5% 15%;--a:49 67% 76%;--ac:345 5% 15%;--n:42 17% 42%;--nc:45 47% 80%;--b1:45 47% 80%;--b2:45 37% 72%;--b3:42 36% 65%;--bc:345 5% 15%;--in:221 83% 53%;--su:142 76% 36%;--wa:32 95% 44%;--er:0 72% 51%;--rounded-box:0.4rem;--rounded-btn:0.4rem;--rounded-badge:0.4rem}[data-theme=cyberpunk]{--pf:345 100% 58%;--sf:195 80% 56%;--af:276 74% 57%;--nf:57 100% 10%;--b2:56 100% 45%;--b3:56 100% 41%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--bc:56 100% 10%;--pc:345 100% 15%;--sc:195 100% 14%;--ac:276 100% 14%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--p:345 100% 73%;--s:195 80% 70%;--a:276 74% 71%;--n:57 100% 13%;--nc:56 100% 50%;--b1:56 100% 50%;--rounded-box:0;--rounded-btn:0;--rounded-badge:0;--tab-radius:0;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}[data-theme=valentine]{--p:353 74% 67%;--pf:353 74% 54%;--sf:254 86% 61%;--af:181 56% 56%;--nf:336 43% 38%;--b2:318 46% 80%;--b3:318 46% 72%;--pc:353 100% 13%;--sc:254 100% 15%;--ac:181 100% 14%;--inc:221 100% 91%;--suc:142 100% 87%;--wac:32 100% 9%;--erc:0 100% 90%;--rounded-box:1rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:254 86% 77%;--a:181 56% 70%;--n:336 43% 48%;--nc:318 46% 89%;--b1:318 46% 89%;--bc:344 38% 28%;--in:221 83% 53%;--su:142 76% 36%;--wa:32 95% 44%;--er:0 72% 51%;--rounded-btn:1.9rem}[data-theme=halloween]{--p:32 89% 52%;--pf:32 89% 42%;--sf:271 46% 34%;--af:91 100% 26%;--nf:180 4% 9%;--b2:0 0% 12%;--b3:0 0% 10%;--bc:0 0% 83%;--sc:271 100% 88%;--ac:91 100% 7%;--nc:180 5% 82%;--inc:221 100% 91%;--suc:142 100% 87%;--wac:32 100% 9%;--erc:0 100% 90%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:180 7% 8%;--s:271 46% 42%;--a:91 100% 33%;--n:180 4% 11%;--b1:0 0% 13%;--in:221 83% 53%;--su:142 76% 36%;--wa:32 95% 44%;--er:0 72% 51%}[data-theme=garden]{--p:139 16% 43%;--pf:139 16% 34%;--sf:97 37% 75%;--af:0 68% 75%;--nf:0 4% 28%;--b2:0 4% 82%;--b3:0 4% 74%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--pc:139 100% 89%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:97 37% 93%;--sc:96 32% 15%;--a:0 68% 94%;--ac:0 22% 16%;--n:0 4% 35%;--nc:0 4% 91%;--b1:0 4% 91%;--bc:0 3% 6%}[data-theme=forest]{--p:141 72% 42%;--pf:141 72% 34%;--sf:141 75% 38%;--af:35 69% 42%;--nf:0 10% 5%;--b2:0 12% 7%;--b3:0 12% 7%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--bc:0 12% 82%;--pc:141 100% 8%;--sc:141 100% 10%;--ac:35 100% 10%;--nc:0 7% 81%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:141 75% 48%;--a:35 69% 52%;--n:0 10% 6%;--b1:0 12% 8%;--rounded-btn:1.9rem}[data-theme=aqua]{--p:182 93% 49%;--pf:182 93% 40%;--sf:274 31% 45%;--af:47 100% 64%;--nf:205 54% 40%;--b2:219 53% 39%;--b3:219 53% 35%;--bc:219 100% 89%;--sc:274 100% 91%;--ac:47 100% 16%;--nc:205 100% 90%;--inc:221 100% 91%;--suc:142 100% 87%;--wac:32 100% 9%;--erc:0 100% 90%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--pc:181 100% 17%;--s:274 31% 57%;--a:47 100% 80%;--n:205 54% 50%;--b1:219 53% 43%;--in:221 83% 53%;--su:142 76% 36%;--wa:32 95% 44%;--er:0 72% 51%}[data-theme=lofi]{--p:0 0% 5%;--pf:0 0% 4%;--sf:0 2% 8%;--af:0 0% 12%;--nf:0 0% 0%;--btn-text-case:uppercase;--border-btn:1px;--tab-border:1px;--pc:0 0% 100%;--s:0 2% 10%;--sc:0 0% 100%;--a:0 0% 15%;--ac:0 0% 100%;--n:0 0% 0%;--nc:0 0% 100%;--b1:0 0% 100%;--b2:0 0% 95%;--b3:0 2% 90%;--bc:0 0% 0%;--in:212 100% 48%;--inc:0 0% 100%;--su:137 72% 46%;--suc:0 0% 100%;--wa:5 100% 66%;--wac:0 0% 100%;--er:325 78% 49%;--erc:0 0% 100%;--rounded-box:0.25rem;--rounded-btn:0.125rem;--rounded-badge:0.125rem;--animation-btn:0;--animation-input:0;--btn-focus-scale:1;--tab-radius:0}[data-theme=pastel]{--p:284 22% 80%;--pf:284 22% 64%;--sf:352 70% 70%;--af:158 55% 65%;--nf:199 44% 49%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--bc:0 0% 20%;--pc:284 59% 16%;--sc:352 100% 18%;--ac:158 100% 16%;--nc:199 100% 12%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:352 70% 88%;--a:158 55% 81%;--n:199 44% 61%;--b1:0 0% 100%;--b2:210 20% 98%;--b3:216 12% 84%;--rounded-btn:1.9rem}[data-theme=fantasy]{--p:296 83% 25%;--pf:296 83% 20%;--sf:200 100% 30%;--af:31 94% 41%;--nf:215 28% 13%;--b2:0 0% 90%;--b3:0 0% 81%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--pc:296 100% 85%;--sc:200 100% 87%;--ac:31 100% 10%;--nc:215 62% 83%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:200 100% 37%;--a:31 94% 51%;--n:215 28% 17%;--b1:0 0% 100%;--bc:215 28% 17%}[data-theme=wireframe]{--pf:0 0% 58%;--sf:0 0% 58%;--af:0 0% 58%;--nf:0 0% 74%;--bc:0 0% 20%;--pc:0 0% 14%;--sc:0 0% 14%;--ac:0 0% 14%;--nc:0 0% 18%;--inc:240 100% 90%;--suc:120 100% 85%;--wac:60 100% 10%;--erc:0 100% 90%;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--p:0 0% 72%;--s:0 0% 72%;--a:0 0% 72%;--n:0 0% 92%;--b1:0 0% 100%;--b2:0 0% 93%;--b3:0 0% 87%;--in:240 100% 50%;--su:120 100% 25%;--wa:60 30% 50%;--er:0 100% 50%;--rounded-box:0.2rem;--rounded-btn:0.2rem;--rounded-badge:0.2rem;--tab-radius:0.2rem;font-family:Chalkboard,comic sans ms,\"sanssecondaryerif\"}[data-theme=black]{--p:0 2% 20%;--pf:0 2% 16%;--sf:0 2% 16%;--af:0 2% 16%;--bc:0 0% 80%;--pc:0 5% 84%;--sc:0 5% 84%;--ac:0 5% 84%;--nc:0 3% 83%;--inc:240 100% 90%;--suc:120 100% 85%;--wac:60 100% 10%;--erc:0 100% 90%;--border-btn:1px;--tab-border:1px;--s:0 2% 20%;--a:0 2% 20%;--b1:0 0% 0%;--b2:0 0% 5%;--b3:0 2% 10%;--n:0 1% 15%;--nf:0 2% 20%;--in:240 100% 50%;--su:120 100% 25%;--wa:60 100% 50%;--er:0 100% 50%;--rounded-box:0;--rounded-btn:0;--rounded-badge:0;--animation-btn:0;--animation-input:0;--btn-text-case:lowercase;--btn-focus-scale:1;--tab-radius:0}[data-theme=luxury]{--p:0 0% 100%;--pf:0 0% 80%;--sf:218 54% 14%;--af:319 22% 21%;--nf:270 4% 7%;--pc:0 0% 20%;--sc:218 100% 84%;--ac:319 85% 85%;--inc:202 100% 14%;--suc:89 100% 10%;--wac:54 100% 13%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:218 54% 18%;--a:319 22% 26%;--n:270 4% 9%;--nc:37 67% 58%;--b1:240 10% 4%;--b2:270 4% 9%;--b3:270 2% 18%;--bc:37 67% 58%;--in:202 100% 70%;--su:89 62% 52%;--wa:54 69% 64%;--er:0 100% 72%}[data-theme=dracula]{--p:326 100% 74%;--pf:326 100% 59%;--sf:265 89% 62%;--af:31 100% 57%;--nf:230 15% 24%;--b2:231 15% 17%;--b3:231 15% 15%;--pc:326 100% 15%;--sc:265 100% 16%;--ac:31 100% 14%;--nc:230 71% 86%;--inc:191 100% 15%;--suc:135 100% 13%;--wac:65 100% 15%;--erc:0 100% 93%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:265 89% 78%;--a:31 100% 71%;--n:230 15% 30%;--b1:231 15% 18%;--bc:60 30% 96%;--in:191 97% 77%;--su:135 94% 65%;--wa:65 92% 76%;--er:0 100% 67%}[data-theme=cmyk]{--p:203 83% 60%;--pf:203 83% 48%;--sf:335 78% 48%;--af:56 100% 48%;--nf:0 0% 8%;--b2:0 0% 90%;--b3:0 0% 81%;--bc:0 0% 20%;--pc:203 100% 12%;--sc:335 100% 92%;--ac:56 100% 12%;--nc:0 0% 82%;--inc:192 100% 10%;--suc:291 100% 88%;--wac:25 100% 11%;--erc:4 100% 91%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:335 78% 60%;--a:56 100% 60%;--n:0 0% 10%;--b1:0 0% 100%;--in:192 48% 52%;--su:291 48% 38%;--wa:25 85% 57%;--er:4 81% 56%}[data-theme=autumn]{--p:344 96% 28%;--pf:344 96% 22%;--sf:0 63% 47%;--af:27 56% 50%;--nf:22 17% 35%;--b2:0 0% 85%;--b3:0 0% 77%;--bc:0 0% 19%;--pc:344 100% 86%;--sc:0 100% 92%;--ac:27 100% 13%;--nc:22 100% 89%;--inc:187 100% 10%;--suc:165 100% 9%;--wac:30 100% 10%;--erc:354 100% 90%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:0 63% 58%;--a:27 56% 63%;--n:22 17% 44%;--b1:0 0% 95%;--in:187 48% 50%;--su:165 34% 43%;--wa:30 84% 50%;--er:354 79% 49%}[data-theme=business]{--p:210 64% 31%;--pf:210 64% 24%;--sf:200 13% 44%;--af:13 80% 48%;--nf:213 14% 13%;--b2:0 0% 11%;--b3:0 0% 10%;--bc:0 0% 83%;--pc:210 100% 86%;--sc:200 100% 11%;--ac:13 100% 12%;--nc:213 28% 83%;--inc:199 100% 88%;--suc:144 100% 11%;--wac:39 100% 12%;--erc:6 100% 89%;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:200 13% 55%;--a:13 80% 60%;--n:213 14% 16%;--b1:0 0% 13%;--in:199 100% 42%;--su:144 31% 56%;--wa:39 64% 60%;--er:6 56% 43%;--rounded-box:0.25rem;--rounded-btn:.125rem;--rounded-badge:.125rem}[data-theme=acid]{--p:303 100% 50%;--pf:303 100% 40%;--sf:27 100% 40%;--af:72 98% 40%;--nf:238 43% 14%;--b2:0 0% 88%;--b3:0 0% 79%;--bc:0 0% 20%;--pc:303 100% 90%;--sc:27 100% 10%;--ac:72 100% 10%;--nc:238 99% 83%;--inc:210 100% 12%;--suc:149 100% 12%;--wac:53 100% 11%;--erc:1 100% 89%;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:27 100% 50%;--a:72 98% 50%;--n:238 43% 17%;--b1:0 0% 98%;--in:210 92% 58%;--su:149 50% 58%;--wa:53 93% 57%;--er:1 100% 45%;--rounded-box:1.25rem;--rounded-btn:1rem;--rounded-badge:1rem}[data-theme=lemonade]{--p:89 96% 31%;--pf:89 96% 24%;--sf:60 81% 44%;--af:63 80% 71%;--nf:238 43% 14%;--b2:0 0% 90%;--b3:0 0% 81%;--bc:0 0% 20%;--pc:89 100% 86%;--sc:60 100% 11%;--ac:63 100% 18%;--nc:238 99% 83%;--inc:192 79% 17%;--suc:74 100% 16%;--wac:50 100% 15%;--erc:1 100% 17%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:60 81% 55%;--a:63 80% 88%;--n:238 43% 17%;--b1:0 0% 100%;--in:192 39% 85%;--su:74 76% 79%;--wa:50 87% 75%;--er:1 70% 83%}[data-theme=night]{--p:198 93% 60%;--pf:198 93% 48%;--sf:234 89% 59%;--af:329 86% 56%;--b2:222 47% 10%;--b3:222 47% 9%;--bc:222 66% 82%;--pc:198 100% 12%;--sc:234 100% 15%;--ac:329 100% 14%;--nc:217 76% 83%;--inc:198 100% 10%;--suc:172 100% 10%;--wac:41 100% 13%;--erc:351 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:234 89% 74%;--a:329 86% 70%;--n:217 33% 17%;--nf:217 30% 22%;--b1:222 47% 11%;--in:198 90% 48%;--su:172 66% 50%;--wa:41 88% 64%;--er:351 95% 71%}[data-theme=coffee]{--p:30 67% 58%;--pf:30 67% 46%;--sf:182 25% 16%;--af:194 74% 20%;--nf:300 20% 5%;--b2:306 19% 10%;--b3:306 19% 9%;--pc:30 100% 12%;--sc:182 67% 84%;--ac:194 100% 85%;--nc:300 14% 81%;--inc:171 100% 13%;--suc:93 100% 12%;--wac:43 100% 14%;--erc:10 100% 15%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:182 25% 20%;--a:194 74% 25%;--n:300 20% 6%;--b1:306 19% 11%;--bc:37 8% 42%;--in:171 37% 67%;--su:93 25% 62%;--wa:43 100% 69%;--er:10 95% 75%}[data-theme=winter]{--p:212 100% 51%;--pf:212 100% 41%;--sf:247 47% 35%;--af:310 49% 42%;--nf:217 92% 8%;--pc:212 100% 90%;--sc:247 100% 89%;--ac:310 100% 90%;--nc:217 100% 82%;--inc:192 100% 16%;--suc:182 100% 13%;--wac:32 100% 17%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--s:247 47% 43%;--a:310 49% 52%;--n:217 92% 10%;--b1:0 0% 100%;--b2:217 100% 97%;--b3:219 44% 92%;--bc:214 30% 32%;--in:192 93% 78%;--su:182 47% 66%;--wa:32 62% 84%;--er:0 63% 72%}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.avatar{display:inline-flex;position:relative}.avatar>div{aspect-ratio:1/1;display:block;overflow:hidden}.avatar img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.avatar.placeholder>div{align-items:center;display:flex;justify-content:center}.badge{border-color:hsl(var(--n)/var(--tw-border-opacity));border-radius:var(--rounded-badge,1.9rem);border-width:1px;height:1.25rem;padding-left:.563rem;padding-right:.563rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.badge,.btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--nc)/var(--tw-text-opacity));display:inline-flex;font-size:.875rem;justify-content:center;line-height:1.25rem;transition-duration:.2s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.btn{-webkit-animation:button-pop var(--animation-btn,.25s) ease-out;animation:button-pop var(--animation-btn,.25s) ease-out;border-color:transparent;border-color:hsl(var(--n)/var(--tw-border-opacity));border-radius:var(--rounded-btn,.5rem);border-width:var(--border-btn,1px);cursor:pointer;flex-shrink:0;flex-wrap:wrap;font-weight:600;height:3rem;line-height:1em;min-height:3rem;padding-left:1rem;padding-right:1rem;text-align:center;-webkit-text-decoration-line:none;text-decoration-line:none;text-transform:uppercase;text-transform:var(--btn-text-case,uppercase);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn-disabled,.btn[disabled]{pointer-events:none}.btn-circle,.btn-square{height:3rem;padding:0;width:3rem}.btn-circle{border-radius:9999px}.btn.loading,.btn.loading:hover{pointer-events:none}.btn.loading:before{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;border-color:transparent currentColor currentColor transparent;border-radius:9999px;border-width:2px;content:\"\";height:1rem;margin-right:.5rem;width:1rem}@media (prefers-reduced-motion:reduce){.btn.loading:before{-webkit-animation:spin 10s linear infinite;animation:spin 10s linear infinite}}@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}.card{border-radius:var(--rounded-box,1rem);display:flex;flex-direction:column;overflow:hidden;position:relative}.card:focus{outline:2px solid transparent;outline-offset:2px}.card-body{display:flex;flex:1 1 auto;flex-direction:column;gap:.5rem;padding:var(--padding-card,2rem)}.card-body :where(p){flex-grow:1}.card-actions{align-items:flex-start;display:flex;flex-wrap:wrap;gap:.5rem}.card figure{align-items:center;display:flex;justify-content:center}.card.image-full{display:grid}.card.image-full:before{--tw-bg-opacity:1;background-color:hsl(var(--n)/var(--tw-bg-opacity));border-radius:var(--rounded-box,1rem);content:\"\";opacity:.75;position:relative;z-index:10}.card.image-full:before,.card.image-full>*{grid-column-start:1;grid-row-start:1}.card.image-full>figure img{height:100%;-o-object-fit:cover;object-fit:cover}.card.image-full>.card-body{--tw-text-opacity:1;color:hsl(var(--nc)/var(--tw-text-opacity));position:relative;z-index:20}.checkbox{--chkbg:var(--bc);--chkfg:var(--b1);--tw-border-opacity:0.2;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:hsl(var(--bc)/var(--tw-border-opacity));border-radius:var(--rounded-btn,.5rem);border-width:1px;cursor:pointer;flex-shrink:0;height:1.5rem;width:1.5rem}.dropdown{display:inline-block;position:relative}.dropdown>:focus{outline:2px solid transparent;outline-offset:2px}.dropdown .dropdown-content{--tw-scale-x:.95;--tw-scale-y:.95;opacity:0;position:absolute;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform-origin:top;transition-duration:.2s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;z-index:50}.dropdown-end .dropdown-content{right:0}.dropdown-left .dropdown-content{bottom:auto;right:100%;top:0;transform-origin:right}.dropdown-right .dropdown-content{bottom:auto;left:100%;top:0;transform-origin:left}.dropdown-top .dropdown-content{bottom:100%;top:auto;transform-origin:bottom}.dropdown-end.dropdown-left .dropdown-content,.dropdown-end.dropdown-right .dropdown-content{bottom:0;top:auto}.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:not(.dropdown-hover):focus .dropdown-content,.dropdown:not(.dropdown-hover):focus-within .dropdown-content{opacity:1;visibility:visible}.footer{-moz-column-gap:1rem;column-gap:1rem;font-size:.875rem;grid-auto-flow:row;line-height:1.25rem;row-gap:2.5rem;width:100%}.footer,.footer>*{display:grid;place-items:start}.footer>*{gap:.5rem}@media (min-width:48rem){.footer{grid-auto-flow:column}.footer-center{grid-auto-flow:row dense}}.form-control{flex-direction:column}.form-control,.label{display:flex}.label{align-items:center;justify-content:space-between;padding:.5rem .25rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.indicator{display:inline-flex;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.indicator :where(.indicator-item){position:absolute;z-index:1}.input{--tw-border-opacity:0;--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity));border-color:hsl(var(--bc)/var(--tw-border-opacity));border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:.875rem;height:3rem;line-height:1.25rem;line-height:2;padding-left:1rem;padding-right:1rem;transition-duration:.2s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.input-group>*,.input-group>.input{border-radius:0}.link{cursor:pointer;-webkit-text-decoration-line:underline;text-decoration-line:underline}.link-hover{-webkit-text-decoration-line:none;text-decoration-line:none}.link-hover:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.mask{-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain}.menu{display:flex;flex-direction:column}.menu.horizontal{display:inline-flex;flex-direction:row}.menu.horizontal :where(li){flex-direction:row}.menu :where(li){align-items:stretch;display:flex;flex-direction:column;flex-wrap:wrap;position:relative}.menu :where(li:not(.menu-title))>:where(:not(ul)){display:flex}.menu :where(li:not(.disabled):not(.menu-title))>:where(:not(ul)){align-items:center;cursor:pointer;outline:2px solid transparent;outline-offset:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu>:where(li>:not(ul):focus){outline:2px solid transparent;outline-offset:2px}.menu>:where(li.disabled>:not(ul):focus){cursor:auto}.menu>:where(li) :where(ul){align-items:stretch;display:flex;flex-direction:column}.menu>:where(li)>:where(ul){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:inherit;border-top-right-radius:inherit;display:none;left:100%;position:absolute;top:auto}.menu>:where(li:hover)>:where(ul){display:flex}.menu>:where(li:focus)>:where(ul){display:flex}.modal{--tw-bg-opacity:0.4;-ms-scroll-chaining:none;background-color:hsl(var(--nf,var(--n))/var(--tw-bg-opacity));bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow-y:hidden;overscroll-behavior:contain;pointer-events:none;position:fixed;right:0;top:0;transition-duration:.2s;transition-property:transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden;z-index:999}:where(.modal){align-items:center}.modal-box{--tw-bg-opacity:1;--tw-scale-x:.9;--tw-scale-y:.9;-ms-scroll-chaining:none;background-color:hsl(var(--b1)/var(--tw-bg-opacity));border-bottom-left-radius:var(--rounded-box,1rem);border-bottom-right-radius:var(--rounded-box,1rem);border-top-left-radius:var(--rounded-box,1rem);border-top-right-radius:var(--rounded-box,1rem);box-shadow:0 25px 50px -12px rgba(0,0,0,.25);max-height:calc(100vh - 5em);max-width:32rem;overflow-y:auto;overscroll-behavior:contain;padding:1.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.2s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);width:91.666667%}.modal-open,.modal-toggle:checked+.modal,.modal:target{opacity:1;pointer-events:auto;visibility:visible}.modal-action{display:flex;justify-content:flex-end;margin-top:1.5rem}.modal-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:0;opacity:0;position:fixed;width:0}.navbar{align-items:center;display:flex;min-height:4rem;padding:var(--navbar-padding,.5rem);width:100%}:where(.navbar>*){align-items:center;display:inline-flex}.radio{--chkbg:var(--bc);--tw-border-opacity:0.2;border-radius:9999px;height:1.5rem;transition:background,box-shadow var(--animation-input,.2s) ease-in-out;width:1.5rem}.radio,.select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:hsl(var(--bc)/var(--tw-border-opacity));border-width:1px;cursor:pointer;flex-shrink:0}.select{--tw-border-opacity:0;--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity));background-image:linear-gradient(45deg,transparent 50%,currentColor 0),linear-gradient(135deg,currentColor 50%,transparent 0);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-radius:var(--rounded-btn,.5rem);display:inline-flex;font-size:.875rem;font-weight:600;height:3rem;line-height:1.25rem;line-height:2;min-height:3rem;padding-left:1rem;padding-right:2.5rem;transition-duration:.2s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-disabled,.select[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:0.2;background-color:hsl(var(--b2,var(--b1))/var(--tw-bg-opacity));border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity));cursor:not-allowed;pointer-events:none}.steps{counter-reset:step;display:inline-grid;grid-auto-columns:1fr;grid-auto-flow:column;overflow:hidden;overflow-x:auto}.steps .step{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-template-columns:auto;grid-template-rows:repeat(2,minmax(0,1fr));grid-template-rows:40px 1fr;min-width:4rem;place-items:center;text-align:center}.swap{cursor:pointer;display:inline-grid;place-content:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swap>*{grid-column-start:1;grid-row-start:1;transition-duration:.3s;transition-property:transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.swap input{-webkit-appearance:none;-moz-appearance:none;appearance:none}.swap .swap-indeterminate,.swap .swap-on,.swap input:indeterminate~.swap-on{opacity:0}.swap input:checked~.swap-off,.swap input:indeterminate~.swap-off,.swap.swap-active .swap-off{opacity:0}.swap input:checked~.swap-on,.swap input:indeterminate~.swap-indeterminate,.swap-active .swap-on{opacity:1}.tabs{align-items:flex-end;display:flex}.tab,.tabs{flex-wrap:wrap}.tab{--tab-padding:1rem;--tw-text-opacity:0.5;--tab-color:hsla(var(--bc)/var(--tw-text-opacity,1));--tab-bg:hsla(var(--b1)/var(--tw-bg-opacity,1));--tab-border-color:hsla(var(--b3)/var(--tw-bg-opacity,1));align-items:center;color:var(--tab-color);cursor:pointer;display:inline-flex;font-size:.875rem;height:2rem;justify-content:center;line-height:1.25rem;line-height:2;padding-left:var(--tab-padding,1rem);padding-right:var(--tab-padding,1rem);text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tab,.table{position:relative}.table{text-align:left}.table th:first-child{left:0;position:sticky;position:-webkit-sticky;z-index:11}.textarea{--tw-border-opacity:0;--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity));border-radius:var(--rounded-btn,.5rem);flex-shrink:1;font-size:.875rem;line-height:1.25rem;line-height:2;min-height:3rem;padding:.5rem 1rem;transition-duration:.2s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.textarea,.toggle{border-color:hsl(var(--bc)/var(--tw-border-opacity));border-width:1px}.toggle{--chkbg:hsla(var(--bc)/0.2);--handleoffset:1.5rem;--tw-border-opacity:0.2;--tw-bg-opacity:0.2;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:hsl(var(--bc)/var(--tw-bg-opacity));border-radius:var(--rounded-badge,1.9rem);box-shadow:calc(var(--handleoffset)*-1) 0 0 2px hsl(var(--b1)) inset,0 0 0 2px hsl(var(--b1)) inset;cursor:pointer;flex-shrink:0;height:1.5rem;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition:background,box-shadow var(--animation-input,.2s) ease-in-out;width:3rem}.avatar-group .avatar{--tw-border-opacity:1;border-color:hsl(var(--b1)/var(--tw-border-opacity));border-radius:9999px;border-width:4px;overflow:hidden}.btn-outline .badge{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsl(var(--nf,var(--n))/var(--tw-border-opacity));color:hsl(var(--nc)/var(--tw-text-opacity))}.btn-outline.btn-primary .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.btn-outline.btn-secondary .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--s)/var(--tw-bg-opacity));border-color:hsl(var(--s)/var(--tw-border-opacity));color:hsl(var(--sc)/var(--tw-text-opacity))}.btn-outline.btn-accent .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--a)/var(--tw-bg-opacity));border-color:hsl(var(--a)/var(--tw-border-opacity));color:hsl(var(--ac)/var(--tw-text-opacity))}.btn-outline .badge.outline{--tw-border-opacity:1;background-color:transparent;border-color:hsl(var(--nf,var(--n))/var(--tw-border-opacity))}.btn-outline.btn-primary .badge-outline{--tw-border-opacity:1;--tw-text-opacity:1;background-color:transparent;border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--p)/var(--tw-text-opacity))}.btn-outline:hover .badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--b2,var(--b1))/var(--tw-bg-opacity));border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity));color:hsl(var(--bc)/var(--tw-text-opacity))}.btn-outline:hover .badge.outline{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity));color:hsl(var(--nc)/var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge{background-color:hsl(var(--pc)/var(--tw-bg-opacity));color:hsl(var(--p)/var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge,.btn-outline.btn-primary:hover .badge.outline{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;border-color:hsl(var(--pc)/var(--tw-border-opacity))}.btn-outline.btn-primary:hover .badge.outline{background-color:hsl(var(--pf,var(--p))/var(--tw-bg-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.btn-outline.btn-secondary:hover .badge{background-color:hsl(var(--sc)/var(--tw-bg-opacity));color:hsl(var(--s)/var(--tw-text-opacity))}.btn-outline.btn-secondary:hover .badge,.btn-outline.btn-secondary:hover .badge.outline{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;border-color:hsl(var(--sc)/var(--tw-border-opacity))}.btn-outline.btn-secondary:hover .badge.outline{background-color:hsl(var(--sf,var(--s))/var(--tw-bg-opacity));color:hsl(var(--sc)/var(--tw-text-opacity))}.btn-outline.btn-accent:hover .badge{background-color:hsl(var(--ac)/var(--tw-bg-opacity));color:hsl(var(--a)/var(--tw-text-opacity))}.btn-outline.btn-accent:hover .badge,.btn-outline.btn-accent:hover .badge.outline{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;border-color:hsl(var(--ac)/var(--tw-border-opacity))}.btn-outline.btn-accent:hover .badge.outline{background-color:hsl(var(--af,var(--a))/var(--tw-bg-opacity));color:hsl(var(--ac)/var(--tw-text-opacity))}.btn:active:focus,.btn:active:hover{-webkit-animation:none;animation:none;transform:scale(var(--btn-focus-scale,.95))}.btn-active,.btn:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsl(var(--nf,var(--n))/var(--tw-bg-opacity));border-color:hsl(var(--nf,var(--n))/var(--tw-border-opacity))}.btn:focus-visible{outline:2px solid hsl(var(--nf));outline-offset:2px}.btn-primary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.btn-primary.btn-active,.btn-primary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:hsl(var(--pf,var(--p))/var(--tw-bg-opacity));border-color:hsl(var(--pf,var(--p))/var(--tw-border-opacity))}.btn-primary:focus-visible{outline:2px solid hsl(var(--p))}.btn.glass.btn-active,.btn.glass:hover{--glass-opacity:25%;--glass-border-opacity:15%}.btn.glass:focus-visible{outline:2px 0 0 2px solid currentColor}.btn-ghost{background-color:transparent;border-color:transparent;border-width:1px;color:currentColor}.btn-ghost.btn-active,.btn-ghost:hover{--tw-border-opacity:0;--tw-bg-opacity:0.2;background-color:hsl(var(--bc)/var(--tw-bg-opacity))}.btn-ghost:focus-visible{outline:2px 0 0 2px solid currentColor}.btn-outline.btn-primary{--tw-text-opacity:1;color:hsl(var(--p)/var(--tw-text-opacity))}.btn-outline.btn-primary:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--pf,var(--p))/var(--tw-bg-opacity));border-color:hsl(var(--pf,var(--p))/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.btn-disabled,.btn-disabled:hover,.btn[disabled],.btn[disabled]:hover{--tw-border-opacity:0;--tw-bg-opacity:0.2;--tw-text-opacity:0.2;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--bc)/var(--tw-text-opacity))}.btn.loading.btn-circle:before,.btn.loading.btn-square:before{margin-right:0}.btn.loading.btn-lg:before,.btn.loading.btn-xl:before{height:1.25rem;width:1.25rem}.btn.loading.btn-sm:before,.btn.loading.btn-xs:before{height:.75rem;width:.75rem}.btn-group>.btn-active,.btn-group>input[type=radio]:checked.btn{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-color:hsl(var(--p)/var(--tw-border-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.btn-group>.btn-active:focus-visible,.btn-group>input[type=radio]:checked.btn:focus-visible{outline:2px solid hsl(var(--p))}.btn-group>.btn:not(:first-of-type){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.btn-group>.btn:not(:last-of-type){border-bottom-right-radius:0;border-top-right-radius:0}@-webkit-keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.95))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.95))}40%{transform:scale(1.02)}to{transform:scale(1)}}.card:focus-visible{outline:2px solid currentColor;outline-offset:2px}.card.bordered{--tw-border-opacity:1;border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity));border-width:1px}.card.compact .card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.checkbox:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.checkbox:checked,.checkbox[checked=true]{--tw-bg-opacity:1;-webkit-animation:checkmark var(--animation-input,.2s) ease-in-out;animation:checkmark var(--animation-input,.2s) ease-in-out;background-color:hsl(var(--bc)/var(--tw-bg-opacity));background-image:linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%);background-repeat:no-repeat}.checkbox:indeterminate{--tw-bg-opacity:1;-webkit-animation:checkmark var(--animation-input,.2s) ease-in-out;animation:checkmark var(--animation-input,.2s) ease-in-out;background-color:hsl(var(--bc)/var(--tw-bg-opacity));background-image:linear-gradient(90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(-90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(0deg,hsl(var(--chkbg)) 43%,hsl(var(--chkfg)) 43%,hsl(var(--chkfg)) 57%,hsl(var(--chkbg)) 57%);background-repeat:no-repeat}.checkbox:disabled{--tw-bg-opacity:1;background-color:hsl(var(--bc)/var(--tw-bg-opacity));border-color:transparent;cursor:not-allowed;opacity:.2}@-webkit-keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}body[dir=rtl] .checkbox{--chkbg:var(--bc);--chkfg:var(--b1)}body[dir=rtl] .checkbox:checked,body[dir=rtl] .checkbox[checked=true]{background-image:linear-gradient(45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(-45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-primary{outline:2px solid hsl(var(--p))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-ghost{outline:2px solid currentColor}.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:focus .dropdown-content,.dropdown:focus-within .dropdown-content{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.footer-title{font-weight:700;margin-bottom:.5rem;opacity:.5;text-transform:uppercase}.label-text{font-size:.875rem;line-height:1.25rem}.label a:hover,.label-text{--tw-text-opacity:1;color:hsl(var(--bc)/var(--tw-text-opacity))}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input-bordered{--tw-border-opacity:0.2}.input:focus{outline:2px solid hsla(var(--bc)/.2);outline-offset:2px}.input-disabled,.input[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:0.2;background-color:hsl(var(--b2,var(--b1))/var(--tw-bg-opacity));border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity));cursor:not-allowed}.input-disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.input-disabled:-ms-input-placeholder,.input[disabled]:-ms-input-placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.input-disabled::placeholder,.input[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.link:focus{outline:2px solid transparent;outline-offset:2px}.link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.mask-squircle{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWiIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWiIvPjwvc3ZnPg==)}.menu.horizontal li.bordered>a,.menu.horizontal li.bordered>button,.menu.horizontal li.bordered>span{--tw-border-opacity:1;border-bottom-width:4px;border-color:hsl(var(--p)/var(--tw-border-opacity));border-left-width:0}.menu[class*=\" p-\"] li>*,.menu[class^=p-] li>*{border-radius:var(--rounded-btn,.5rem)}.menu :where(li.bordered>*){--tw-border-opacity:1;border-color:hsl(var(--p)/var(--tw-border-opacity));border-left-width:4px}.menu :where(li)>:where(:not(ul)){color:currentColor;gap:.75rem;padding:.75rem 1rem}.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul):focus),.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul):hover){--tw-bg-opacity:0.1;background-color:hsl(var(--bc)/var(--tw-bg-opacity))}.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul).active),.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul):active){--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul).\\!active),.menu :where(li:not(.menu-title):not(:empty))>:where(:not(ul):active){--tw-bg-opacity:1!important;--tw-text-opacity:1!important;background-color:hsl(var(--p)/var(--tw-bg-opacity))!important;color:hsl(var(--pc)/var(--tw-text-opacity))!important}.menu :where(li:empty){--tw-bg-opacity:0.1;background-color:hsl(var(--bc)/var(--tw-bg-opacity));height:1px;margin:.5rem 1rem}.menu li.disabled>*{--tw-text-opacity:0.2;color:hsl(var(--bc)/var(--tw-text-opacity));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu li.disabled>:hover{background-color:transparent}.menu li.hover-bordered a{border-color:transparent;border-left-width:4px}.menu li.hover-bordered a:hover{--tw-border-opacity:1;border-color:hsl(var(--p)/var(--tw-border-opacity))}.menu.compact li>a,.menu.compact li>span{font-size:.875rem;line-height:1.25rem;padding-bottom:.5rem;padding-top:.5rem}.menu .menu-title>*{--tw-text-opacity:0.4;color:hsl(var(--bc)/var(--tw-text-opacity));font-size:.75rem;font-weight:700;line-height:1rem;padding-bottom:.25rem;padding-top:.25rem}.menu :where(li:not(.disabled))>:where(:not(ul)){outline:2px solid transparent;outline-offset:2px;transition-duration:.2s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.menu>:where(li:first-child){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li:first-child)>:where(:not(ul)){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li:last-child){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.menu>:where(li:last-child)>:where(:not(ul)){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.menu>:where(li)>:where(ul) :where(li){white-space:nowrap;width:100%}.menu>:where(li)>:where(ul) :where(li) :where(ul){padding-left:1rem}.menu>:where(li)>:where(ul) :where(li)>:where(:not(ul)){white-space:nowrap;width:100%}.menu>:where(li)>:where(ul)>:where(li:first-child){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li)>:where(ul)>:where(li:first-child)>:where(:not(ul)){border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:inherit;border-top-right-radius:inherit}.menu>:where(li)>:where(ul)>:where(li:last-child){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.menu>:where(li)>:where(ul)>:where(li:last-child)>:where(:not(ul)){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top-left-radius:unset;border-top-right-radius:unset}.mockup-phone .display{border-radius:40px;margin-top:-25px;overflow:hidden}.modal-open .modal-box,.modal-toggle:checked+.modal .modal-box,.modal:target .modal-box{--tw-translate-y:0px;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modal-action>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}@-webkit-keyframes progress-loading{50%{left:107%}}@keyframes progress-loading{50%{left:107%}}.radio:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.radio:checked{--tw-bg-opacity:1;-webkit-animation:radiomark var(--animation-input,.2s) ease-in-out;animation:radiomark var(--animation-input,.2s) ease-in-out;background-color:hsl(var(--bc)/var(--tw-bg-opacity));box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}.radio:disabled{cursor:not-allowed;opacity:.2}@-webkit-keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@-webkit-keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}.select-bordered{--tw-border-opacity:0.2}.select:focus{outline:2px solid hsla(var(--bc)/.2);outline-offset:2px}.select-ghost{--tw-bg-opacity:0.05}.select-ghost:focus{--tw-bg-opacity:1;--tw-text-opacity:1;color:hsl(var(--bc)/var(--tw-text-opacity))}.select-disabled::-moz-placeholder,.select[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.select-disabled:-ms-input-placeholder,.select[disabled]:-ms-input-placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.select-disabled::placeholder,.select[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.select-multiple,.select[multiple],.select[size].select:not([size=\"1\"]){background-image:none;padding-right:1rem}.steps .step:before{content:\"\";height:.5rem;margin-left:-100%;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.steps .step:after,.steps .step:before{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--b3,var(--b2))/var(--tw-bg-opacity));color:hsl(var(--bc)/var(--tw-text-opacity));grid-column-start:1;grid-row-start:1}.steps .step:after{border-radius:9999px;content:counter(step);counter-increment:step;display:grid;height:2rem;place-items:center;place-self:center;position:relative;width:2rem;z-index:1}.steps .step:first-child:before{content:none}.steps .step[data-content]:after{content:attr(data-content)}.steps .step-neutral+.step-neutral:before,.steps .step-neutral:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--n)/var(--tw-bg-opacity));color:hsl(var(--nc)/var(--tw-text-opacity))}.steps .step-primary+.step-primary:before,.steps .step-primary:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));color:hsl(var(--pc)/var(--tw-text-opacity))}.steps .step-secondary+.step-secondary:before,.steps .step-secondary:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--s)/var(--tw-bg-opacity));color:hsl(var(--sc)/var(--tw-text-opacity))}.steps .step-accent+.step-accent:before,.steps .step-accent:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:hsl(var(--a)/var(--tw-bg-opacity));color:hsl(var(--ac)/var(--tw-text-opacity))}.steps .step-info+.step-info:before,.steps .step-info:after{--tw-bg-opacity:1;background-color:hsl(var(--in)/var(--tw-bg-opacity))}.steps .step-info:after{--tw-text-opacity:1;color:hsl(var(--inc,var(--nc))/var(--tw-text-opacity))}.steps .step-success+.step-success:before,.steps .step-success:after{--tw-bg-opacity:1;background-color:hsl(var(--su)/var(--tw-bg-opacity))}.steps .step-success:after{--tw-text-opacity:1;color:hsl(var(--suc,var(--nc))/var(--tw-text-opacity))}.steps .step-warning+.step-warning:before,.steps .step-warning:after{--tw-bg-opacity:1;background-color:hsl(var(--wa)/var(--tw-bg-opacity))}.steps .step-warning:after{--tw-text-opacity:1;color:hsl(var(--wac,var(--nc))/var(--tw-text-opacity))}.steps .step-error+.step-error:before,.steps .step-error:after{--tw-bg-opacity:1;background-color:hsl(var(--er)/var(--tw-bg-opacity))}.steps .step-error:after{--tw-text-opacity:1;color:hsl(var(--erc,var(--nc))/var(--tw-text-opacity))}.swap-rotate .swap-indeterminate,.swap-rotate .swap-on,.swap-rotate input:indeterminate~.swap-on{--tw-rotate:45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-off,.swap-rotate input:indeterminate~.swap-off,.swap-rotate.swap-active .swap-off{--tw-rotate:-45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-on,.swap-rotate input:indeterminate~.swap-indeterminate,.swap-rotate.swap-active .swap-on{--tw-rotate:0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-flip .swap-indeterminate,.swap-flip .swap-on,.swap-flip input:indeterminate~.swap-on{-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1;transform:rotateY(180deg)}.swap-flip input:checked~.swap-off,.swap-flip input:indeterminate~.swap-off,.swap-flip.swap-active .swap-off{-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1;transform:rotateY(-180deg)}.swap-flip input:checked~.swap-on,.swap-flip input:indeterminate~.swap-indeterminate,.swap-flip.swap-active .swap-on{transform:rotateY(0deg)}.tab:hover{--tw-text-opacity:1}.tab.tab-active{--tw-border-opacity:1;--tw-text-opacity:1;border-color:hsl(var(--bc)/var(--tw-border-opacity))}.tab:focus{outline:2px solid transparent;outline-offset:2px}.tab:focus-visible{outline:2px solid currentColor;outline-offset:-3px}.tab:focus-visible.tab-lifted{border-bottom-left-radius:var(--tab-radius,.5rem);border-bottom-right-radius:var(--tab-radius,.5rem)}.tab-lifted{border:var(--tab-border,1px) solid transparent;border-bottom-color:var(--tab-border-color);border-top-left-radius:var(--tab-radius,.5rem);border-top-right-radius:var(--tab-radius,.5rem);border-width:0 0 var(--tab-border,1px) 0;padding-left:var(--tab-padding,1rem);padding-right:var(--tab-padding,1rem);padding-top:var(--tab-border,1px)}.tab-lifted.tab-active{background-color:var(--tab-bg);border-left-color:var(--tab-border-color);border-right-color:var(--tab-border-color);border-top-color:var(--tab-border-color);border-width:var(--tab-border,1px) var(--tab-border,1px) 0 var(--tab-border,1px);padding-bottom:var(--tab-border,1px);padding-left:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-right:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-top:0}.tab-lifted.tab-active:after,.tab-lifted.tab-active:before{--tab-grad:calc(68% - var(--tab-border, 1px));--tab-corner-bg:radial-gradient(circle at var(--circle-pos),transparent var(--tab-grad),var(--tab-border-color) calc(var(--tab-grad) + 0.3px),var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)),var(--tab-bg) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));bottom:0;content:\"\";display:block;height:var(--tab-radius,.5rem);position:absolute;width:var(--tab-radius,.5rem);z-index:1}.tab-lifted.tab-active:before{--circle-pos:top left;background-image:var(--tab-corner-bg);left:calc(var(--tab-radius, .5rem)*-1)}[dir=rtl] .tab-lifted.tab-active:before{--circle-pos:top right}.tab-lifted.tab-active:after{--circle-pos:top right;background-image:var(--tab-corner-bg);right:calc(var(--tab-radius, .5rem)*-1)}[dir=rtl] .tab-lifted.tab-active:after{--circle-pos:top left}.tab-lifted.tab-active+.tab-lifted.tab-active:before,.tab-lifted.tab-active:first-child:before,.tab-lifted.tab-active:last-child:after{background:none}.tabs-boxed .tab-active{--tw-bg-opacity:1;background-color:hsl(var(--p)/var(--tw-bg-opacity));border-radius:var(--rounded-btn,.5rem)}.tabs-boxed .tab-active,.tabs-boxed .tab-active:hover{--tw-text-opacity:1;color:hsl(var(--pc)/var(--tw-text-opacity))}.table :where(th,td){padding:1rem;vertical-align:middle;white-space:nowrap}.table tr.active td,.table tr.active th,.table tr.active:nth-child(2n) td,.table tr.active:nth-child(2n) th{--tw-bg-opacity:1;background-color:hsl(var(--b3,var(--b2))/var(--tw-bg-opacity))}.table tr.\\!active td,.table tr.\\!active th,.table tr.\\!active:nth-child(2n) td,.table tr.\\!active:nth-child(2n) th{--tw-bg-opacity:1!important;background-color:hsl(var(--b3,var(--b2))/var(--tw-bg-opacity))!important}.table tr.hover:hover td,.table tr.hover:hover th,.table tr.hover:nth-child(2n):hover td,.table tr.hover:nth-child(2n):hover th{--tw-bg-opacity:1;background-color:hsl(var(--b3,var(--b2))/var(--tw-bg-opacity))}.table:where(:not(.table-zebra)) :where(thead,tbody,tfoot) :where(tr:not(:last-child) :where(th,td)){--tw-border-opacity:1;border-bottom-width:1px;border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity))}.table :where(thead,tfoot) :where(th,td){--tw-bg-opacity:1;background-color:hsl(var(--b2,var(--b1))/var(--tw-bg-opacity));font-size:.75rem;font-weight:700;line-height:1rem;text-transform:uppercase}.table :where(:first-child) :where(:first-child) :where(th,td):first-child{border-top-left-radius:.5rem}.table :where(:first-child) :where(:first-child) :where(th,td):last-child{border-top-right-radius:.5rem}.table :where(:last-child) :where(:last-child) :where(th,td):first-child{border-bottom-left-radius:.5rem}.table :where(:last-child) :where(:last-child) :where(th,td):last-child{border-bottom-right-radius:.5rem}.table :where(tbody th,tbody td){--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity))}.textarea-bordered{--tw-border-opacity:0.2}.textarea:focus{outline:2px solid hsla(var(--bc)/.2);outline-offset:2px}.textarea-disabled,.textarea[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:0.2;background-color:hsl(var(--b2,var(--b1))/var(--tw-bg-opacity));border-color:hsl(var(--b2,var(--b1))/var(--tw-border-opacity));cursor:not-allowed}.textarea-disabled::-moz-placeholder,.textarea[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.textarea-disabled:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.textarea-disabled::placeholder,.textarea[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.toggle:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.toggle:checked,.toggle[checked=true]{--chkbg:hsl(var(--bc));--tw-border-opacity:1;--tw-bg-opacity:1;box-shadow:var(--handleoffset) 0 0 2px hsl(var(--b1)) inset,0 0 0 2px hsl(var(--b1)) inset}[dir=rtl] .toggle:checked,[dir=rtl] .toggle[checked=true]{box-shadow:calc(var(--handleoffset)*1) 0 0 2px hsl(var(--b1)) inset,0 0 0 2px hsl(var(--b1)) inset}.toggle:indeterminate{--chkbg:hsl(var(--bc));--tw-border-opacity:1;--tw-bg-opacity:1;box-shadow:calc(var(--handleoffset)/2) 0 0 2px hsl(var(--b1)) inset,calc(var(--handleoffset)/-2) 0 0 2px hsl(var(--b1)) inset,0 0 0 2px hsl(var(--b1)) inset}[dir=rtl] .toggle:indeterminate{box-shadow:calc(var(--handleoffset)/2) 0 0 2px hsl(var(--b1)) inset,calc(var(--handleoffset)/-2) 0 0 2px hsl(var(--b1)) inset,0 0 0 2px hsl(var(--b1)) inset}.toggle:disabled{--tw-bg-opacity:0.2;background-color:hsl(var(--bc)/var(--tw-bg-opacity));border-color:transparent;cursor:not-allowed}.rounded-box{border-radius:var(--rounded-box,1rem)}.artboard.phone{width:320px}.badge-sm{font-size:.75rem;height:1rem;line-height:1rem;padding-left:.438rem;padding-right:.438rem}.btn-xs{font-size:.75rem;height:1.5rem;min-height:1.5rem;padding-left:.5rem;padding-right:.5rem}.btn-sm{font-size:.875rem;height:2rem;min-height:2rem;padding-left:.75rem;padding-right:.75rem}.btn-block{width:100%}.btn-square:where(.btn-xs){height:1.5rem;padding:0;width:1.5rem}.btn-square:where(.btn-sm){height:2rem;padding:0;width:2rem}.btn-square:where(.btn-md){height:3rem;padding:0;width:3rem}.btn-square:where(.btn-lg){height:4rem;padding:0;width:4rem}.btn-circle:where(.btn-xs){border-radius:9999px;height:1.5rem;padding:0;width:1.5rem}.btn-circle:where(.btn-sm){border-radius:9999px;height:2rem;padding:0;width:2rem}.btn-circle:where(.btn-md){border-radius:9999px;height:3rem;padding:0;width:3rem}.btn-circle:where(.btn-lg){border-radius:9999px;height:4rem;padding:0;width:4rem}.indicator :where(.indicator-item){--tw-translate-x:50%;--tw-translate-y:-50%;bottom:auto;left:auto;right:0;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-start){--tw-translate-x:-50%;left:0;right:auto;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-center){--tw-translate-x:-50%;left:50%;right:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-end){--tw-translate-x:50%;left:auto;right:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-bottom){--tw-translate-y:50%;bottom:0;top:auto;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-middle){--tw-translate-y:-50%;bottom:50%;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.indicator :where(.indicator-item.indicator-top){--tw-translate-y:-50%;bottom:auto;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.input-sm{padding-right:.75rem}.input-sm,.select-sm{font-size:.875rem;height:2rem;line-height:2rem;padding-left:.75rem}.select-sm{min-height:2rem;padding-right:2rem}.steps-horizontal .step{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));place-items:center;text-align:center}.steps-vertical .step{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,1fr))}.tab-md{--tab-padding:1rem;font-size:.875rem;height:2rem;line-height:1.25rem;line-height:2}.avatar.online:before{background-color:hsl(var(--su)/var(--tw-bg-opacity))}.avatar.offline:before,.avatar.online:before{--tw-bg-opacity:1;border-radius:9999px;box-shadow:0 0 0 2px hsl(var(--b1));content:\"\";display:block;height:15%;position:absolute;right:7%;top:7%;width:15%;z-index:10}.avatar.offline:before{background-color:hsl(var(--b3,var(--b2))/var(--tw-bg-opacity))}.card-compact .card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.card-compact .card-title{margin-bottom:.25rem}.card-normal .card-body{font-size:1rem;line-height:1.5rem;padding:var(--padding-card,2rem)}.menu-compact :where(li>*){font-size:.875rem;line-height:1.25rem;padding-bottom:.5rem;padding-top:.5rem}.modal-bottom :where(.modal-box){--tw-translate-y:2.5rem;--tw-scale-x:1;--tw-scale-y:1;border-bottom-left-radius:0;border-bottom-right-radius:0;max-width:none;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.modal-middle :where(.modal-box){--tw-translate-y:0px;--tw-scale-x:.9;--tw-scale-y:.9;border-bottom-left-radius:var(--rounded-box,1rem);border-bottom-right-radius:var(--rounded-box,1rem);max-width:32rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:91.666667%}.steps-horizontal .step{grid-template-columns:auto;grid-template-rows:40px 1fr;min-width:4rem}.steps-horizontal .step:before{--tw-translate-y:0px;--tw-translate-x:0px;content:\"\";height:.5rem;margin-left:-100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.steps-vertical .step{gap:.5rem;grid-template-columns:40px 1fr;grid-template-rows:auto;justify-items:start;min-height:4rem}.steps-vertical .step:before{--tw-translate-y:-50%;--tw-translate-x:-50%;height:100%;margin-left:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:.5rem}.table-compact :where(th,td){font-size:.875rem;line-height:1.25rem;padding:.5rem}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-y-0{bottom:0;top:0}.top-0{top:0}.right-0{right:0}.left-0{left:0}.-left-1{left:-.25rem}.-top-16{top:-4rem}.z-40{z-index:40}.row-start-1{grid-row-start:1}.row-end-3{grid-row-end:3}.mx-auto{margin-left:auto;margin-right:auto}.mx-2{margin-left:.5rem;margin-right:.5rem}.my-3{margin-bottom:.75rem;margin-top:.75rem}.mt-5{margin-top:1.25rem}.mt-3{margin-top:.75rem}.mb-16{margin-bottom:4rem}.mb-2{margin-bottom:.5rem}.mb-8{margin-bottom:2rem}.mb-3{margin-bottom:.75rem}.mr-3{margin-right:.75rem}.mr-0{margin-right:0}.ml-auto{margin-left:auto}.ml-3{margin-left:.75rem}.mr-2{margin-right:.5rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-4{margin-top:1rem}.mb-6{margin-bottom:1.5rem}.mr-1{margin-right:.25rem}.mt-8{margin-top:2rem}.ml-10{margin-left:2.5rem}.mt-6{margin-top:1.5rem}.mt-10{margin-top:2.5rem}.mb-5{margin-bottom:1.25rem}.mb-1{margin-bottom:.25rem}.-mt-12{margin-top:-3rem}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.h-5{height:1.25rem}.h-10{height:2.5rem}.h-8{height:2rem}.h-6{height:1.5rem}.h-full{height:100%}.h-20{height:5rem}.h-24{height:6rem}.max-h-max{max-height:-webkit-max-content;max-height:-moz-max-content;max-height:max-content}.max-h-60{max-height:15rem}.min-h-screen{min-height:100vh}.w-8\\/12{width:66.666667%}.w-56{width:14rem}.w-5{width:1.25rem}.w-full{width:100%}.w-10{width:2.5rem}.w-52{width:13rem}.w-8{width:2rem}.w-1\\/4{width:25%}.w-6{width:1.5rem}.w-60{width:15rem}.w-12{width:3rem}.w-20{width:5rem}.min-w-max{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}.max-w-max{max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.max-w-md{max-width:28rem}.flex-none{flex:none}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-2{gap:.5rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.divide-x>:not([hidden])~:not([hidden]){--tw-divide-x-reverse:0;border-left-width:calc(1px*(1 - var(--tw-divide-x-reverse)));border-right-width:calc(1px*var(--tw-divide-x-reverse))}.divide-solid>:not([hidden])~:not([hidden]){border-style:solid}.divide-gray-800>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(31 41 55/var(--tw-divide-opacity))}.divide-gray-400>:not([hidden])~:not([hidden]){--tw-divide-opacity:1;border-color:rgb(156 163 175/var(--tw-divide-opacity))}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-3xl{border-radius:1.5rem}.border-4{border-width:4px}.border{border-width:1px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-base-300{--tw-border-opacity:1;border-color:hsl(var(--b3,var(--b2))/var(--tw-border-opacity))}.border-slate-900\\/10{border-color:rgba(15,23,42,.1)}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}.border-blue-300{--tw-border-opacity:1;border-color:rgb(147 197 253/var(--tw-border-opacity))}.border-gray-900{--tw-border-opacity:1;border-color:rgb(17 24 39/var(--tw-border-opacity))}.border-blue-500{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.bg-base-200{--tw-bg-opacity:1;background-color:hsl(var(--b2,var(--b1))/var(--tw-bg-opacity))}.bg-base-100{--tw-bg-opacity:1;background-color:hsl(var(--b1)/var(--tw-bg-opacity))}.bg-white\\/95{background-color:hsla(0,0%,100%,.95)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-blue-800{--tw-bg-opacity:1;background-color:rgb(30 64 175/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-teal-600{--tw-bg-opacity:1;background-color:rgb(13 148 136/var(--tw-bg-opacity))}.bg-purple-200{--tw-bg-opacity:1;background-color:rgb(233 213 255/var(--tw-bg-opacity))}.bg-cover{background-size:cover}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.fill-current{fill:currentColor}.p-10{padding:2.5rem}.p-2{padding:.5rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-3{padding:.75rem}.p-2\\.5{padding:.625rem}.p-16{padding:4rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-8{padding-bottom:2rem;padding-top:2rem}.pb-6{padding-bottom:1.5rem}.pt-6{padding-top:1.5rem}.pt-3{padding-top:.75rem}.pr-3{padding-right:.75rem}.pr-2{padding-right:.5rem}.pl-10{padding-left:2.5rem}.pr-4{padding-right:1rem}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pl-5{padding-left:1.25rem}.pt-2\\.5{padding-top:.625rem}.pt-2{padding-top:.5rem}.pb-2\\.5{padding-bottom:.625rem}.pb-2{padding-bottom:.5rem}.pr-20{padding-right:5rem}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-lg{font-size:1.125rem}.text-lg,.text-xl{line-height:1.75rem}.text-xl{font-size:1.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.normal-case{text-transform:none}.leading-6{line-height:1.5rem}.leading-tight{line-height:1.25}.leading-5{line-height:1.25rem}.tracking-wide{letter-spacing:.025em}.text-base-content{--tw-text-opacity:1;color:hsl(var(--bc)/var(--tw-text-opacity))}.text-info{--tw-text-opacity:1;color:hsl(var(--in)/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.text-gray-100{--tw-text-opacity:1;color:rgb(243 244 246/var(--tw-text-opacity))}.text-blue-300{--tw-text-opacity:1;color:rgb(147 197 253/var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-blue-400{--tw-text-opacity:1;color:rgb(96 165 250/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-teal-600{--tw-text-opacity:1;color:rgb(13 148 136/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-purple-600{--tw-text-opacity:1;color:rgb(147 51 234/var(--tw-text-opacity))}.text-purple-100{--tw-text-opacity:1;color:rgb(243 232 255/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity))}.placeholder-gray-500:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity))}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-black{--tw-ring-opacity:1;--tw-ring-color:rgb(0 0 0/var(--tw-ring-opacity))}.ring-white{--tw-ring-opacity:1;--tw-ring-color:rgb(255 255 255/var(--tw-ring-opacity))}.ring-opacity-5{--tw-ring-opacity:0.05}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-500{transition-duration:.5s}.duration-100{transition-duration:.1s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.checked\\:bg-red-500:checked{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.hover\\:border-blue-800:hover{--tw-border-opacity:1;border-color:rgb(30 64 175/var(--tw-border-opacity))}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175/var(--tw-bg-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:text-blue-300:hover{--tw-text-opacity:1;color:rgb(147 197 253/var(--tw-text-opacity))}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.focus\\:border-blue-400:focus{--tw-border-opacity:1;border-color:rgb(96 165 250/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-white:focus-visible{--tw-ring-opacity:1;--tw-ring-color:rgb(255 255 255/var(--tw-ring-opacity))}.focus-visible\\:ring-opacity-75:focus-visible{--tw-ring-opacity:0.75}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px}.focus-visible\\:ring-offset-teal-300:focus-visible{--tw-ring-offset-color:#5eead4}.dark .dark\\:border-slate-50\\/\\[0\\.06\\]{border-color:rgba(248,250,252,.06)}.dark .dark\\:border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}.dark .dark\\:bg-transparent{background-color:transparent}.dark .dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.dark .dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark .dark\\:text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.dark .dark\\:placeholder-gray-400::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.dark .dark\\:placeholder-gray-400:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.dark .dark\\:placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}.dark .dark\\:focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.dark .dark\\:focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}@media (min-width:640px){.sm\\:mb-0{margin-bottom:0}.sm\\:w-1\\/2{width:50%}.sm\\:border-r{border-right-width:1px}.sm\\:border-r-0{border-right-width:0}.sm\\:border-b-0{border-bottom-width:0}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}@media (min-width:768px){.md\\:border-b-0{border-bottom-width:0}.md\\:px-8{padding-left:2rem;padding-right:2rem}}@media (min-width:1024px){.lg\\:z-50{z-index:50}.lg\\:w-1\\/4{width:25%}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:border-b{border-bottom-width:1px}.lg\\:border-b-0{border-bottom-width:0}.lg\\:border-r{border-right-width:1px}.lg\\:border-slate-900\\/10{border-color:rgba(15,23,42,.1)}.lg\\:p-6{padding:1.5rem}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.lg\\:pt-3{padding-top:.75rem}.lg\\:text-base{font-size:1rem;line-height:1.5rem}}";
}


// --------------------
// Request: /assets/css/app.css
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/css.mjs ($id_d2738ebc)
// Dependencies: 

// --------------------
const $id_ce6d0f9c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300&display=swap\");";
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/components.plugin.mjs ($id_267ebbe2)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /plugins/apiAuth.ts ($id_72efcc68)
// - /plugins/auth.ts ($id_0cce0b34)
// --------------------
const $id_7d3e7af8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/plugins/apiAuth.ts");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/plugins/auth.ts");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_267ebbe2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/meta.config.mjs ($id_13dd8ad6)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/meta.config.mjs");

const metaMixin = {
  [__vite_ssr_import_4__.default.mixinKey]() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type || instance.proxy?.$options;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_13dd8ad6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/router.options.mjs ($id_60769333)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/middleware.mjs ($id_5b296102)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const { baseURL } = __vite_ssr_import_5__.useRuntimeConfig().app;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const path = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(path));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    if (false && !nuxtApp.isHydrating) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_8__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${nuxtApp.ssrContext.url}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  nuxtApp.hook("app:created", async () => {
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
          statusCode: 404,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
        nuxtApp.ssrContext.res.statusCode = 404;
      }
    });
    if (true) {
      router.push(nuxtApp.ssrContext.url);
      router.afterEach(async (to) => {
        if (to.fullPath !== nuxtApp.ssrContext.url) {
          await __vite_ssr_import_5__.navigateTo(to.fullPath);
        }
      });
    }
    try {
      await router.isReady();
    } catch (error) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/cdquestion/index.vue?macro=true ($id_be557372)
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /pages/users/[id].vue?macro=true ($id_bfb117aa)
// - /pages/users/index.vue?macro=true ($id_2240d037)
// - /pages/cdquestion/index.vue ($id_8b8710c4)
// - /pages/customer/[id].vue ($id_60c52b89)
// - /pages/customer/form.vue ($id_fccc8ef6)
// - /pages/customer/index.vue ($id_55a62451)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login/index.vue ($id_d006def6)
// - /pages/users/[id].vue ($id_036f2303)
// - /pages/users/index.vue ($id_34524033)
// --------------------
const $id_cfc4446f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/cdquestion/index.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/customer/[id].vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/customer/form.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/customer/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/login/index.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/users/[id].vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/users/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "cdquestion",
    path: "/cdquestion",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/cdquestion/index.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/cdquestion/index.vue')
  },
  {
    name: "customer-id",
    path: "/customer/:id",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/customer/[id].vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/customer/[id].vue')
  },
  {
    name: "customer-form",
    path: "/customer/form",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/customer/form.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/customer/form.vue')
  },
  {
    name: "customer",
    path: "/customer",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/customer/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/customer/index.vue')
  },
  {
    name: "index",
    path: "/",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "login",
    path: "/login",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/login/index.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/login/index.vue')
  },
  {
    name: "users-id",
    path: "/users/:id",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/users/[id].vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/users/[id].vue')
  },
  {
    name: "users",
    path: "/users",
    file: "D:/2022/PJ/stb-cdscore/Font-app/pages/users/index.vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/users/index.vue')
  }
];
}


// --------------------
// Request: /pages/cdquestion/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_be557372 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/headlessui.esm.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const selectedTab = __vite_ssr_import_0__.ref(0);
/*#__PURE__*/ false && __vite_ssr_import_1__.definePageMeta({
  layout: "auth",
});

const { data: custType } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("custType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/customer_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const { data: loanType } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("loanType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/loan_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const { data: collateralType } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("collateralType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/collateral_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

function changeTab(index) {
  selectedTab.value = index;
}

const __returned__ = { selectedTab, custType, loanType, collateralType, changeTab, TabGroup: __vite_ssr_import_4__.TabGroup, TabList: __vite_ssr_import_4__.TabList, Tab: __vite_ssr_import_4__.Tab, TabPanels: __vite_ssr_import_4__.TabPanels, TabPanel: __vite_ssr_import_4__.TabPanel }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "mt-4" }, _attrs))}>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabGroup"], null, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabList"], { class: "tabs" }, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="${
                      __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ])
                    }"${
                      _scopeId
                    }> ປະເພດລູກຄ້າ </div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                      }, " ປະເພດລູກຄ້າ ", 2 /* CLASS */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="${
                      __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ])
                    }"${
                      _scopeId
                    }> ປະເພດເງິນກູ້ </div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                      }, " ປະເພດເງິນກູ້ ", 2 /* CLASS */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="${
                      __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ])
                    }"${
                      _scopeId
                    }> ປະເພດຫຼັກຊັບຄ້ຳປະກັນ </div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                      }, " ປະເພດຫຼັກຊັບຄ້ຳປະກັນ ", 2 /* CLASS */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                    }, " ປະເພດລູກຄ້າ ", 2 /* CLASS */)
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                    }, " ປະເພດເງິນກູ້ ", 2 /* CLASS */)
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                    }, " ປະເພດຫຼັກຊັບຄ້ຳປະກັນ ", 2 /* CLASS */)
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanels"], null, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto w-full"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຫົວຂໍ້</th><th${
                      _scopeId
                    }>ຄຳອະທິບາຍ</th><th${
                      _scopeId
                    }></th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_6__.ssrRenderList($setup.custType.data, (ct) => {
                      _push(`<tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.name)
                      }</td><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.description)
                      }</td><td${
                        _scopeId
                      }></td></tr>`)
                    })
                    _push(`<!--]--></tbody></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                              __vite_ssr_import_5__.createVNode("th")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.custType.data, (ct) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto w-full"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຫົວຂໍ້</th><th${
                      _scopeId
                    }>ຄຳອະທິບາຍ</th><th${
                      _scopeId
                    }></th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_6__.ssrRenderList($setup.loanType.data, (ct) => {
                      _push(`<tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.name)
                      }</td><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.description)
                      }</td><td${
                        _scopeId
                      }></td></tr>`)
                    })
                    _push(`<!--]--></tbody></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                              __vite_ssr_import_5__.createVNode("th")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.loanType.data, (ct) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto w-full"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຫົວຂໍ້</th><th${
                      _scopeId
                    }>ຄຳອະທິບາຍ</th><th${
                      _scopeId
                    }></th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_6__.ssrRenderList($setup.collateralType.data, (ct) => {
                      _push(`<tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.name)
                      }</td><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.description)
                      }</td><td${
                        _scopeId
                      }></td></tr>`)
                    })
                    _push(`<!--]--></tbody></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                              __vite_ssr_import_5__.createVNode("th")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.collateralType.data, (ct) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                            __vite_ssr_import_5__.createVNode("th")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.custType.data, (ct) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                            __vite_ssr_import_5__.createVNode("th")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.loanType.data, (ct) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                            __vite_ssr_import_5__.createVNode("th")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.collateralType.data, (ct) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_5__.createVNode($setup["TabList"], { class: "tabs" }, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                  __vite_ssr_import_5__.createVNode("div", {
                    class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                  }, " ປະເພດລູກຄ້າ ", 2 /* CLASS */)
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                  __vite_ssr_import_5__.createVNode("div", {
                    class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                  }, " ປະເພດເງິນກູ້ ", 2 /* CLASS */)
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                  __vite_ssr_import_5__.createVNode("div", {
                    class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                  }, " ປະເພດຫຼັກຊັບຄ້ຳປະກັນ ", 2 /* CLASS */)
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_5__.createVNode($setup["TabPanels"], null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                    __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_5__.createVNode("thead", null, [
                        __vite_ssr_import_5__.createVNode("tr", null, [
                          __vite_ssr_import_5__.createVNode("th"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                          __vite_ssr_import_5__.createVNode("th")
                        ])
                      ]),
                      __vite_ssr_import_5__.createVNode("tbody", null, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.custType.data, (ct) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td")
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                    __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_5__.createVNode("thead", null, [
                        __vite_ssr_import_5__.createVNode("tr", null, [
                          __vite_ssr_import_5__.createVNode("th"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                          __vite_ssr_import_5__.createVNode("th")
                        ])
                      ]),
                      __vite_ssr_import_5__.createVNode("tbody", null, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.loanType.data, (ct) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td")
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                    __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_5__.createVNode("thead", null, [
                        __vite_ssr_import_5__.createVNode("tr", null, [
                          __vite_ssr_import_5__.createVNode("th"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                          __vite_ssr_import_5__.createVNode("th")
                        ])
                      ]),
                      __vite_ssr_import_5__.createVNode("tbody", null, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.collateralType.data, (ct) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td")
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/cdquestion/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/cdquestion/index.vue"]])
const meta = {
  layout: "auth",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /pages/cdquestion/index.vue?macro=true ($id_be557372)
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /pages/users/[id].vue?macro=true ($id_bfb117aa)
// - /pages/users/index.vue?macro=true ($id_2240d037)
// - /pages/cdquestion/index.vue ($id_8b8710c4)
// - /pages/customer/[id].vue ($id_60c52b89)
// - /pages/customer/form.vue ($id_fccc8ef6)
// - /pages/customer/index.vue ($id_55a62451)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login/index.vue ($id_d006def6)
// - /pages/users/[id].vue ($id_036f2303)
// - /pages/users/index.vue ($id_34524033)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/@headlessui/vue/dist/headlessui.esm.js
// Parents: 
// - /pages/cdquestion/index.vue?macro=true ($id_be557372)
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /pages/cdquestion/index.vue ($id_8b8710c4)
// - /pages/customer/[id].vue ($id_60c52b89)
// - /pages/customer/form.vue ($id_fccc8ef6)
// Dependencies: 
// - /node_modules/@headlessui/vue/dist/components/combobox/combobox.js ($id_92aab129)
// - /node_modules/@headlessui/vue/dist/components/dialog/dialog.js ($id_b07f1154)
// - /node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js ($id_90ea7d3e)
// - /node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js ($id_58899675)
// - /node_modules/@headlessui/vue/dist/components/listbox/listbox.js ($id_2feddcbf)
// - /node_modules/@headlessui/vue/dist/components/menu/menu.js ($id_b1042eef)
// - /node_modules/@headlessui/vue/dist/components/popover/popover.js ($id_f86ffab2)
// - /node_modules/@headlessui/vue/dist/components/portal/portal.js ($id_1d43fca2)
// - /node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js ($id_0e8af24b)
// - /node_modules/@headlessui/vue/dist/components/switch/switch.js ($id_44a1a907)
// - /node_modules/@headlessui/vue/dist/components/tabs/tabs.js ($id_6cd55209)
// - /node_modules/@headlessui/vue/dist/components/transitions/transition.js ($id_99377655)
// --------------------
const $id_2c13895f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/combobox/combobox.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/dialog/dialog.js");
__vite_ssr_exportAll__(__vite_ssr_import_1__);const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js");
__vite_ssr_exportAll__(__vite_ssr_import_2__);const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/listbox/listbox.js");
__vite_ssr_exportAll__(__vite_ssr_import_4__);const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/menu/menu.js");
__vite_ssr_exportAll__(__vite_ssr_import_5__);const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/popover/popover.js");
__vite_ssr_exportAll__(__vite_ssr_import_6__);const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/portal/portal.js");
__vite_ssr_exportAll__(__vite_ssr_import_7__);const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js");
__vite_ssr_exportAll__(__vite_ssr_import_8__);const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/switch/switch.js");
__vite_ssr_exportAll__(__vite_ssr_import_9__);const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/tabs/tabs.js");
__vite_ssr_exportAll__(__vite_ssr_import_10__);const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/components/transitions/transition.js");
__vite_ssr_exportAll__(__vite_ssr_import_11__);
;
}


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/combobox/combobox.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_92aab129 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/combobox/combobox.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/combobox/combobox.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/dialog/dialog.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_b07f1154 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/dialog/dialog.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/dialog/dialog.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_90ea7d3e = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_58899675 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/listbox/listbox.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_2feddcbf = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/listbox/listbox.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/listbox/listbox.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/menu/menu.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_b1042eef = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/menu/menu.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/menu/menu.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/popover/popover.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_f86ffab2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/popover/popover.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/popover/popover.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/portal/portal.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_1d43fca2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/portal/portal.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/portal/portal.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_0e8af24b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/switch/switch.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_44a1a907 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/switch/switch.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/switch/switch.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/tabs/tabs.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_6cd55209 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/tabs/tabs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/tabs/tabs.js\".")
  })


// --------------------
// Request: /node_modules/@headlessui/vue/dist/components/transitions/transition.js
// Parents: 
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// Dependencies: 

// --------------------
const $id_99377655 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/transitions/transition.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@headlessui/vue/dist/components/transitions/transition.js\".")
  })


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /pages/cdquestion/index.vue?macro=true ($id_be557372)
// - /components/profile/customer.vue ($id_cc4e0c4e)
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /components/table/customer.vue ($id_587613ac)
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /pages/users/[id].vue?macro=true ($id_bfb117aa)
// - /components/modal/sm.vue ($id_bf07e772)
// - /pages/users/index.vue?macro=true ($id_2240d037)
// - /pages/cdquestion/index.vue ($id_8b8710c4)
// - /pages/customer/[id].vue ($id_60c52b89)
// - /pages/customer/form.vue ($id_fccc8ef6)
// - /pages/customer/index.vue ($id_55a62451)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login/index.vue ($id_d006def6)
// - /pages/users/[id].vue ($id_036f2303)
// - /pages/users/index.vue ($id_34524033)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/navbar/authtop.vue ($id_d79eeb69)
// - /components/navbar/aside.vue ($id_66aeca7d)
// - /layouts/auth.vue ($id_9a19ccb3)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///D:/2022/PJ/stb-cdscore/Font-app/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"D:/2022/PJ/stb-cdscore/Font-app/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/cdquestion/index.vue?macro=true ($id_be557372)
// - /components/profile/customer.vue ($id_cc4e0c4e)
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /components/table/customer.vue ($id_587613ac)
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /pages/users/[id].vue?macro=true ($id_bfb117aa)
// - /components/modal/sm.vue ($id_bf07e772)
// - /pages/users/index.vue?macro=true ($id_2240d037)
// - /pages/cdquestion/index.vue ($id_8b8710c4)
// - /pages/customer/[id].vue ($id_60c52b89)
// - /pages/customer/form.vue ($id_fccc8ef6)
// - /pages/customer/index.vue ($id_55a62451)
// - /pages/index.vue ($id_cca58e97)
// - /pages/login/index.vue ($id_d006def6)
// - /pages/users/[id].vue ($id_036f2303)
// - /pages/users/index.vue ($id_34524033)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /components/navbar/authtop.vue ($id_d79eeb69)
// - /components/navbar/aside.vue ($id_66aeca7d)
// - /layouts/auth.vue ($id_9a19ccb3)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/customer/[id].vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /components/profile/customer.vue ($id_cc4e0c4e)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1b52f6be = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/profile/customer.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/headlessui.esm.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const route = __vite_ssr_import_1__.useRoute();
/*#__PURE__*/ false && __vite_ssr_import_2__.definePageMeta({
  layout: "auth",
});
const { data: customer } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("customer", () =>
  $fetch(`http://10.0.34.37:3333/api/v1/crd/customer/${route.params.id}`)
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const { data: colApproach } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("colApproach", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/gradparams")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const __returned__ = { route, customer, colApproach, TabGroup: __vite_ssr_import_4__.TabGroup, TabList: __vite_ssr_import_4__.TabList, Tab: __vite_ssr_import_4__.Tab, TabPanels: __vite_ssr_import_4__.TabPanels, TabPanel: __vite_ssr_import_4__.TabPanel }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProfileCustomer = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "w-full mt-5" }, _attrs))}><div class="flex"><div class="flex-auto">`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ProfileCustomer, {
    data: $setup.customer.data
  }, null, _parent))
  _push(`</div><div class="flex-auto w-1/4"><div class="overflow-x-auto"><table class="table w-full"><tbody><tr><th>ສາຂາ:</th><td></td></tr><tr><th>ຈຳນວນເງີນຂໍກູ້:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.finance)
  }</td></tr><tr><th>ສະກຸນເງີນ:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.ccy)
  }</td></tr><tr><th>ຈັດເກດຄວາມສ່ຽງລູກຄ້າ:</th><td></td></tr><tr><th>ຄຳເຫັນການອະນຸມັດ/ປະຕິເສດ:</th><td></td></tr><tr><th>ອັດຕາດອກເບ້ຍຕໍ່ປີ:</th><td></td></tr><tr><th>ໄລຍະເວລາກູ້:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.period)
  } ${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.period_type)
  }</td></tr><tr><th>ເປົ້າໝາຍການນຳໃຊ້ເງິນກູ້:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.perpose)
  }</td></tr></tbody></table></div></div></div>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabGroup"], null, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabList"], { class: "tabs" }, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<!--[-->`)
              __vite_ssr_import_6__.ssrRenderList($setup.colApproach.data, (ap) => {
                _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], { key: ap }, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(`<div class="${
                        __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ])
                      }"${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ap.title)
                      } <div class="badge"${
                        _scopeId
                      }>0%</div></div>`)
                    } else {
                      return [
                        __vite_ssr_import_5__.createVNode("div", {
                          class: [
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ]
                        }, [
                          __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(ap.title) + " ", 1 /* TEXT */),
                          __vite_ssr_import_5__.createVNode("div", { class: "badge" }, "0%")
                        ], 2 /* CLASS */)
                      ]
                    }
                  }),
                  _: 2 /* DYNAMIC */
                }, _parent, _scopeId))
              })
              _push(`<!--]-->`)
            } else {
              return [
                (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (ap) => {
                  return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["Tab"], { key: ap }, {
                    default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ]
                      }, [
                        __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(ap.title) + " ", 1 /* TEXT */),
                        __vite_ssr_import_5__.createVNode("div", { class: "badge" }, "0%")
                      ], 2 /* CLASS */)
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanels"], null, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<!--[-->`)
              __vite_ssr_import_6__.ssrRenderList($setup.colApproach.data, (cp) => {
                _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], { key: cp }, {
                  default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(`<div class="overflow-x-auto"${
                        _scopeId
                      }><table class="table table-compact w-full"${
                        _scopeId
                      }><thead${
                        _scopeId
                      }><tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><th${
                        _scopeId
                      }>ຫົວຂໍ້</th><th${
                        _scopeId
                      }>ຄະແນນ (%)</th></tr></thead><tbody${
                        _scopeId
                      }><!--[-->`)
                      __vite_ssr_import_6__.ssrRenderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                        _push(`<tr${
                          _scopeId
                        }><th${
                          _scopeId
                        }>${
                          __vite_ssr_import_6__.ssrInterpolate(i + 1)
                        }</th><td${
                          _scopeId
                        }>${
                          __vite_ssr_import_6__.ssrInterpolate(it.title)
                        }</td><td${
                          _scopeId
                        }>0</td></tr>`)
                      })
                      _push(`<!--]--></tbody><tfoot${
                        _scopeId
                      }><tr${
                        _scopeId
                      }><th colspan="2"${
                        _scopeId
                      }>ລວມ</th><th${
                        _scopeId
                      }>0</th></tr></tfoot></table></div>`)
                    } else {
                      return [
                        __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto" }, [
                          __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                            __vite_ssr_import_5__.createVNode("thead", null, [
                              __vite_ssr_import_5__.createVNode("tr", null, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                                __vite_ssr_import_5__.createVNode("th", null, "ຄະແນນ (%)")
                              ])
                            ]),
                            __vite_ssr_import_5__.createVNode("tbody", null, [
                              (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                                return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: it }, [
                                  __vite_ssr_import_5__.createVNode("th", null, __vite_ssr_import_5__.toDisplayString(i + 1), 1 /* TEXT */),
                                  __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(it.title), 1 /* TEXT */),
                                  __vite_ssr_import_5__.createVNode("td", null, "0")
                                ]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            __vite_ssr_import_5__.createVNode("tfoot", null, [
                              __vite_ssr_import_5__.createVNode("tr", null, [
                                __vite_ssr_import_5__.createVNode("th", { colspan: "2" }, "ລວມ"),
                                __vite_ssr_import_5__.createVNode("th", null, "0")
                              ])
                            ])
                          ])
                        ])
                      ]
                    }
                  }),
                  _: 2 /* DYNAMIC */
                }, _parent, _scopeId))
              })
              _push(`<!--]-->`)
            } else {
              return [
                (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (cp) => {
                  return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["TabPanel"], { key: cp }, {
                    default: __vite_ssr_import_5__.withCtx(() => [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄະແນນ (%)")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: it }, [
                                __vite_ssr_import_5__.createVNode("th", null, __vite_ssr_import_5__.toDisplayString(i + 1), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(it.title), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, "0")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          __vite_ssr_import_5__.createVNode("tfoot", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th", { colspan: "2" }, "ລວມ"),
                              __vite_ssr_import_5__.createVNode("th", null, "0")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_5__.createVNode($setup["TabList"], { class: "tabs" }, {
            default: __vite_ssr_import_5__.withCtx(() => [
              (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (ap) => {
                return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["Tab"], { key: ap }, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ]
                    }, [
                      __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(ap.title) + " ", 1 /* TEXT */),
                      __vite_ssr_import_5__.createVNode("div", { class: "badge" }, "0%")
                    ], 2 /* CLASS */)
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_5__.createVNode($setup["TabPanels"], null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (cp) => {
                return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["TabPanel"], { key: cp }, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄະແນນ (%)")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: it }, [
                              __vite_ssr_import_5__.createVNode("th", null, __vite_ssr_import_5__.toDisplayString(i + 1), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(it.title), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, "0")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]),
                        __vite_ssr_import_5__.createVNode("tfoot", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th", { colspan: "2" }, "ລວມ"),
                            __vite_ssr_import_5__.createVNode("th", null, "0")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/customer/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/customer/[id].vue"]])
const meta = {
  layout: "auth",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/profile/customer.vue
// Parents: 
// - /pages/customer/[id].vue?macro=true ($id_1b52f6be)
// - /pages/customer/[id].vue ($id_60c52b89)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cc4e0c4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props: {
    data: {
      type: Object,
    },
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><div class="w-full bg-cover bg-no-repeat bg-center" style="${
    __vite_ssr_import_0__.ssrRenderStyle({"height":"200px"})
  }"><img class="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt=""></div><div class="p-4"><div class="relative flex w-full"><div class="flex flex-1"><div style="${
    __vite_ssr_import_0__.ssrRenderStyle({"margin-top":"-6rem"})
  }"><div style="${
    __vite_ssr_import_0__.ssrRenderStyle({"height":"9rem","width":"9rem"})
  }" class="md rounded-full relative avatar"><img style="${
    __vite_ssr_import_0__.ssrRenderStyle({"height":"9rem","width":"9rem"})
  }" class="md rounded-full relative border-4 border-gray-900" src="https://pbs.twimg.com/profile_images/1254779846615420930/7I4kP65u_400x400.jpg" alt=""><div class="absolute"></div></div></div></div><div class="flex flex-rows text-right gap-4"><button class="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold px-4 rounded-full mr-0 ml-auto"> Loan </button><button class="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto"> ຂໍ້ມູນ </button></div></div><!-- Profile info --><div class="space-y-1 justify-center w-full mt-3 ml-3"><!-- User basic--><div><h2 class="text-xl leading-6 font-bold text-white">${
    __vite_ssr_import_0__.ssrInterpolate($props.data.fullname)
  }</h2></div><!-- Description and others --><div class="mt-3"><p class="text-white leading-tight mb-2">${
    __vite_ssr_import_0__.ssrInterpolate($props.data.company)
  }</p><div class="text-gray-600 flex"><span class="flex mr-2"><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path></g></svg><a href="https://ricardoribeirodev.com/personal/" target="#" class="leading-5 ml-1 text-blue-400">${
    __vite_ssr_import_0__.ssrInterpolate($props.data.email)
  }</a></span><span class="flex mr-2"><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg><span class="leading-5 ml-1">${
    __vite_ssr_import_0__.ssrInterpolate($props.data.mobile)
  }</span></span><span class="flex mr-2"><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg><span class="leading-5 ml-1">Joined December, 2019</span></span></div></div><!-- <div
          class="
            pt-3
            flex
            justify-start
            items-start
            w-full
            divide-x divide-gray-800 divide-solid
          "
        >
          <div class="text-center pr-3">
            <span class="font-bold text-white">520</span
            ><span class="text-gray-600"> Following</span>
          </div>
          <div class="text-center px-3">
            <span class="font-bold text-white">23,4m </span
            ><span class="text-gray-600"> Followers</span>
          </div>
        </div> --></div></div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/profile/customer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/components/profile/customer.vue"]]);
}


// --------------------
// Request: /pages/customer/form.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/customer.ts ($id_a1f167fd)
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_485061af = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/customer.ts");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/headlessui.esm.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "auth",
});
// var stepIndex = ref(0)
const tbHeader = __vite_ssr_import_6__.reactive([
  "ຊື່ ແລະ ນາມສະກຸນ",
  "email",
  "mobile",
  "ວິສາຫະກິດ",
  "ປະເພດ",
  "ວັນທີເດືອນປີ",
]);
const loanCust = __vite_ssr_import_6__.reactive({
  firstname: __vite_ssr_import_6__.ref(""),
  lastname: __vite_ssr_import_6__.ref(""),
  sex: __vite_ssr_import_6__.ref("M"),
  cust_type: __vite_ssr_import_6__.ref(""),
  loan_type: __vite_ssr_import_6__.ref(""),
  questions: __vite_ssr_import_6__.ref(""),
  finance: __vite_ssr_import_6__.ref(0),
  ccy: __vite_ssr_import_6__.ref("LAK"),
  cycle: __vite_ssr_import_6__.ref(0),
  cycle_type: __vite_ssr_import_6__.ref("Y"),
  exp: __vite_ssr_import_6__.ref("N"),
  perpose: __vite_ssr_import_6__.ref(""),
});

const XData = __vite_ssr_import_6__.reactive({ test: __vite_ssr_import_6__.ref("") });
var getLoan = __vite_ssr_import_6__.ref({ data: Object });
const selected = __vite_ssr_import_6__.ref("M");
const { pending, data: CutType } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("CustType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/custype/loantype")
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const { data: Collateral } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("Collateral", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/collateral_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

__vite_ssr_import_2__.watchEffect(() => {
  if (loanCust.cust_type) {
    getLoanType(loanCust.cust_type);
  }
  if (loanCust.cust_type && loanCust.loan_type) {
    getQuestion("asdf");
  }
  if (loanCust.exp.value) {
    getLoanType("sfad");
  }
});

const getLoanType = (str) => {
  const dt = CutType.value.data.filter((i) => i.id == str);
  getLoan.value = dt[0].loans;
};

const getQuestion = async (str) => {
  //customer_type?id=1&lid=1
  try {
    const resQuetions = await $fetch(
      `http://10.0.34.37:3333/api/v1/crd/questions/${loanCust.cust_type}/${loanCust.loan_type}/${loanCust.exp}`
    );
    loanCust.questions = resQuetions.data;
  } catch (e) {}
};

const stepIndex = __vite_ssr_import_6__.ref(0);
const CreateCustomer = () => {
  __vite_ssr_import_3__.createCustomer(loanCust).then((res) => {
    stepIndex.value++;
  });
};

const __returned__ = { tbHeader, loanCust, XData, getLoan, selected, pending, CutType, Collateral, getLoanType, getQuestion, stepIndex, CreateCustomer, TabGroup: __vite_ssr_import_5__.TabGroup, TabList: __vite_ssr_import_5__.TabList, Tab: __vite_ssr_import_5__.Tab, TabPanels: __vite_ssr_import_5__.TabPanels, TabPanel: __vite_ssr_import_5__.TabPanel, RadioGroup: __vite_ssr_import_5__.RadioGroup, RadioGroupLabel: __vite_ssr_import_5__.RadioGroupLabel, RadioGroupDescription: __vite_ssr_import_5__.RadioGroupDescription, RadioGroupOption: __vite_ssr_import_5__.RadioGroupOption, Combobox: __vite_ssr_import_5__.Combobox, ComboboxInput: __vite_ssr_import_5__.ComboboxInput, ComboboxButton: __vite_ssr_import_5__.ComboboxButton, ComboboxOptions: __vite_ssr_import_5__.ComboboxOptions, ComboboxOption: __vite_ssr_import_5__.ComboboxOption, TransitionRoot: __vite_ssr_import_5__.TransitionRoot, ref: __vite_ssr_import_6__.ref, reactive: __vite_ssr_import_6__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "w-8/12 mx-auto mt-5" }, _attrs))}>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabGroup"], { selectedIndex: $setup.stepIndex }, {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabList"], { class: "steps" }, {
          default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], { class: "step step-primary" }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`ຂໍ້ມູນລູກຄ້າ`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("ຂໍ້ມູນລູກຄ້າ")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], {
                class: `step ${$setup.stepIndex > 0 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`ຫຼັກຊັບຄ້ຳປະກັນ ${__vite_ssr_import_8__.ssrInterpolate($setup.stepIndex)}`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("ຫຼັກຊັບຄ້ຳປະກັນ " + __vite_ssr_import_7__.toDisplayString($setup.stepIndex), 1 /* TEXT */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], {
                class: `step ${$setup.stepIndex > 1 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], {
                class: `step ${$setup.stepIndex > 2 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`Tab 3`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("Tab 3")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_7__.createVNode($setup["Tab"], { class: "step step-primary" }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("ຂໍ້ມູນລູກຄ້າ")
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["Tab"], {
                  class: `step ${$setup.stepIndex > 0 ? 'step-primary' : ''}`
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("ຫຼັກຊັບຄ້ຳປະກັນ " + __vite_ssr_import_7__.toDisplayString($setup.stepIndex), 1 /* TEXT */)
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["class"]),
                __vite_ssr_import_7__.createVNode($setup["Tab"], {
                  class: `step ${$setup.stepIndex > 1 ? 'step-primary' : ''}`
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ")
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["class"]),
                __vite_ssr_import_7__.createVNode($setup["Tab"], {
                  class: `step ${$setup.stepIndex > 2 ? 'step-primary' : ''}`
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("Tab 3")
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["class"])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanels"], null, {
          default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="w-full p-16"${
                      _scopeId
                    }><form${
                      _scopeId
                    }><div class="grid gap-6 mb-6 lg:grid-cols-2"${
                      _scopeId
                    }><div${
                      _scopeId
                    }><label for="first_name" class="block mb-2 text-sm font-medium dark:text-gray-300"${
                      _scopeId
                    }>ຊື່ແທ້</label><input type="text" id="first_name"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.firstname)
                    } class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ນາມສະກຸນ</label><input type="text" id="last_name"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.lastname)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເພດ</label><div class="flex"${
                      _scopeId
                    }><div class="flex"${
                      _scopeId
                    }><input type="radio" name="sex"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.sex, "M"))) ? " checked" : ""
                    } class="radio" value="M" id="sexm"${
                      _scopeId
                    }><label class="pl-4" for="sexm"${
                      _scopeId
                    }>ຊາຍ</label></div><div class="flex pl-5"${
                      _scopeId
                    }><input type="radio" name="sex"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.sex, "F"))) ? " checked" : ""
                    } class="radio" id="sexf" value="F"${
                      _scopeId
                    }><label class="pl-4" for="sexf"${
                      _scopeId
                    }>ຍິງ</label></div></div></div><div${
                      _scopeId
                    }><label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ຊື່ວິສາຫະກິດ</label><input type="text" id="company"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.company)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເບີໂທ</label><input type="tel" id="phone"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.mobile)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="020-XXXX-XXXX" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ອີເມວ໌</label><input type="email" id="email"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.email)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="stb@stbanklaos.com"${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="financeAm" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ວົງເງິນສະເໜີກູ້</label><div class="relative"${
                      _scopeId
                    }><input type="number" id="financeAm"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.finance)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }><select class="absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"${
                      _scopeId
                    }><option value="LAK"${
                      _scopeId
                    }>LAK</option></select></div></div><div${
                      _scopeId
                    }><label for="cycle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ໄລຍະເວລາ </label><div class="relative"${
                      _scopeId
                    }><input type="number" id="cycle"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.cycle)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }><select class="absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"${
                      _scopeId
                    }><option value="Y"${
                      _scopeId
                    }>ປີ</option><option value="M"${
                      _scopeId
                    }>ເດືອນ</option><option value="D"${
                      _scopeId
                    }>ວັນ</option></select></div></div></div><div${
                      _scopeId
                    }><label for="perpose" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເປົ້າໝາຍສະເໜີກູ້</label><textarea id="perpose" class="textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }>${
                      __vite_ssr_import_8__.ssrInterpolate($setup.loanCust.perpose)
                    }</textarea></div><button type="button" class="btn mt-8"${
                      _scopeId
                    }> ບັນທຶກ ແລະ ຕໍ່ໄປ </button></form></div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full p-16" }, [
                        __vite_ssr_import_7__.createVNode("form", null, [
                          __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2" }, [
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "first_name",
                                class: "block mb-2 text-sm font-medium dark:text-gray-300"
                              }, "ຊື່ແທ້"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "text",
                                id: "first_name",
                                "onUpdate:modelValue": $event => (($setup.loanCust.firstname) = $event),
                                class: "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.firstname]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "last_name",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ນາມສະກຸນ"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "text",
                                id: "last_name",
                                "onUpdate:modelValue": $event => (($setup.loanCust.lastname) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.lastname]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "ເພດ"),
                              __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                    type: "radio",
                                    name: "sex",
                                    "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                    class: "radio",
                                    value: "M",
                                    id: "sexm"
                                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                    [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                  ]),
                                  __vite_ssr_import_7__.createVNode("label", {
                                    class: "pl-4",
                                    for: "sexm"
                                  }, "ຊາຍ")
                                ]),
                                __vite_ssr_import_7__.createVNode("div", { class: "flex pl-5" }, [
                                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                    type: "radio",
                                    name: "sex",
                                    "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                    class: "radio",
                                    id: "sexf",
                                    value: "F"
                                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                    [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                  ]),
                                  __vite_ssr_import_7__.createVNode("label", {
                                    class: "pl-4",
                                    for: "sexf"
                                  }, "ຍິງ")
                                ])
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "company",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ຊື່ວິສາຫະກິດ"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "text",
                                id: "company",
                                "onUpdate:modelValue": $event => (($setup.loanCust.company) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.company]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "phone",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ເບີໂທ"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "tel",
                                id: "phone",
                                "onUpdate:modelValue": $event => (($setup.loanCust.mobile) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                placeholder: "020-XXXX-XXXX",
                                pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.mobile]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "email",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ອີເມວ໌"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "email",
                                id: "email",
                                "onUpdate:modelValue": $event => (($setup.loanCust.email) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                placeholder: "stb@stbanklaos.com"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.email]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "financeAm",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ວົງເງິນສະເໜີກູ້"),
                              __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "number",
                                  id: "financeAm",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.finance) = $event),
                                  class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                  required: ""
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelText, $setup.loanCust.finance]
                                ]),
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                  "onUpdate:modelValue": $event => (($setup.loanCust.ccy) = $event),
                                  class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"
                                }, [
                                  __vite_ssr_import_7__.createVNode("option", { value: "LAK" }, "LAK")
                                ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.ccy]
                                ])
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "cycle",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ໄລຍະເວລາ "),
                              __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "number",
                                  id: "cycle",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.cycle) = $event),
                                  class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                  required: ""
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelText, $setup.loanCust.cycle]
                                ]),
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                  "onUpdate:modelValue": $event => (($setup.loanCust.cycle_type) = $event),
                                  class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"
                                }, [
                                  __vite_ssr_import_7__.createVNode("option", { value: "Y" }, "ປີ"),
                                  __vite_ssr_import_7__.createVNode("option", { value: "M" }, "ເດືອນ"),
                                  __vite_ssr_import_7__.createVNode("option", { value: "D" }, "ວັນ")
                                ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cycle_type]
                                ])
                              ])
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "perpose",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ເປົ້າໝາຍສະເໜີກູ້"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                              id: "perpose",
                              "onUpdate:modelValue": $event => (($setup.loanCust.perpose) = $event),
                              class: "textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.perpose]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("button", {
                            type: "button",
                            class: "btn mt-8",
                            onClick: $setup.CreateCustomer
                          }, " ບັນທຶກ ແລະ ຕໍ່ໄປ ")
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="grid gap-6 mb-6 lg:grid-cols-2 p-16"${
                      _scopeId
                    }><div class="w-full"${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ປະເພດຫຼັກຊັບຄ້ຳປະກັນ</label><select class="select select-bordered w-full"${
                      _scopeId
                    }><option disabled selected${
                      _scopeId
                    }>ເລືອກປະເພດລູກຄ້າ</option><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.Collateral.data, (ci) => {
                      _push(`<option${
                        __vite_ssr_import_8__.ssrRenderAttr("value", ci.id)
                      }${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(ci.name)
                      }</option>`)
                    })
                    _push(`<!--]--></select></div></div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2 p-16" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ປະເພດຫຼັກຊັບຄ້ຳປະກັນ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                            class: "select select-bordered w-full",
                            "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                          }, [
                            __vite_ssr_import_7__.createVNode("option", {
                              disabled: "",
                              selected: ""
                            }, "ເລືອກປະເພດລູກຄ້າ"),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.Collateral.data, (ci) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                key: ci,
                                value: ci.id
                              }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="grid gap-6 lg:grid-cols-2 px-5 py-5"${
                      _scopeId
                    }><div class="w-full"${
                      _scopeId
                    }><div${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ປະເພດລູກຄ້າ</label><select class="select select-bordered w-full"${
                      _scopeId
                    }><option disabled selected${
                      _scopeId
                    }>ເລືອກປະເພດລູກຄ້າ</option><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.CutType.data, (ci) => {
                      _push(`<option${
                        __vite_ssr_import_8__.ssrRenderAttr("value", ci.id)
                      }${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(ci.name)
                      }</option>`)
                    })
                    _push(`<!--]--></select></div></div><div class="w-full"${
                      _scopeId
                    }><div${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ປະເພດສິນເຊື່ອ</label><select class="select select-bordered w-full"${
                      _scopeId
                    }><option disabled selected${
                      _scopeId
                    }>ເລືອກປະເພດສິນເຊື່ອ</option><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.getLoan, (ci) => {
                      _push(`<option${
                        __vite_ssr_import_8__.ssrRenderAttr("value", ci.id)
                      }${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(ci.name)
                      }</option>`)
                    })
                    _push(`<!--]--></select></div></div></div><div class="w-full px-5 mb-8"${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ</label><div class="flex"${
                      _scopeId
                    }><div class="flex"${
                      _scopeId
                    }><input type="radio" id="expY"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.exp, "Y"))) ? " checked" : ""
                    } value="Y" name="exp_yn" class="radio"${
                      _scopeId
                    }><label class="pl-4" for="expY"${
                      _scopeId
                    }>ເຄີຍກູ້ມາກ່ອນ</label></div><div class="flex ml-10"${
                      _scopeId
                    }><input type="radio" id="expN"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.exp, "N"))) ? " checked" : ""
                    } value="N" name="exp_yn" class="radio"${
                      _scopeId
                    }><label class="pl-4" for="expN"${
                      _scopeId
                    }>ບໍ່ເຄີຍກູ້ມາກ່ອນ</label></div></div></div><div class="w-full px-5"${
                      _scopeId
                    }>`)
                    _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabGroup"], null, {
                      default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabList"], { class: "tabs" }, {
                            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                              if (_push) {
                                _push(`<!--[-->`)
                                __vite_ssr_import_8__.ssrRenderList($setup.loanCust.questions, (qi) => {
                                  _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], { key: qi }, {
                                    default: __vite_ssr_import_7__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                                      if (_push) {
                                        _push(`<div class="${
                                          __vite_ssr_import_8__.ssrRenderClass([
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ])
                                        }"${
                                          _scopeId
                                        }>${
                                          __vite_ssr_import_8__.ssrInterpolate(qi.title)
                                        } <div class="badge"${
                                          _scopeId
                                        }>0%</div></div>`)
                                      } else {
                                        return [
                                          __vite_ssr_import_7__.createVNode("div", {
                                            class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                          }, [
                                            __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                            __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                          ], 2 /* CLASS */)
                                        ]
                                      }
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, _parent, _scopeId))
                                })
                                _push(`<!--]-->`)
                              } else {
                                return [
                                  (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                    return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                      default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                        __vite_ssr_import_7__.createVNode("div", {
                                          class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                        }, [
                                          __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                          __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                        ], 2 /* CLASS */)
                                      ]),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */))
                                  }), 128 /* KEYED_FRAGMENT */))
                                ]
                              }
                            }),
                            _: 1 /* STABLE */
                          }, _parent, _scopeId))
                          _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanels"], { class: "mt-6" }, {
                            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                              if (_push) {
                                _push(`<!--[-->`)
                                __vite_ssr_import_8__.ssrRenderList($setup.loanCust.questions, (cp) => {
                                  _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], { key: cp }, {
                                    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                                      if (_push) {
                                        _push(`<ol type="number"${_scopeId}><!--[-->`)
                                        __vite_ssr_import_8__.ssrRenderList(cp.qeustions, (it) => {
                                          _push(`<li${
                                            _scopeId
                                          }><h1${
                                            _scopeId
                                          }>${
                                            __vite_ssr_import_8__.ssrInterpolate(it.title)
                                          }</h1>`)
                                          if (it.input_type == 'radio') {
                                            _push(`<!--[-->`)
                                            __vite_ssr_import_8__.ssrRenderList(it.answers, (asi) => {
                                              _push(`<div class="form-control"${
                                                _scopeId
                                              }><label class="label cursor-pointer"${
                                                _scopeId
                                              }><input type="radio"${
                                                (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual(it.weight, asi.weight))) ? " checked" : ""
                                              }${
                                                __vite_ssr_import_8__.ssrRenderAttr("value", asi.weight)
                                              } class="radio checked:bg-red-500"${
                                                _scopeId
                                              }><span class="label-text"${
                                                _scopeId
                                              }>${
                                                __vite_ssr_import_8__.ssrInterpolate(asi.title)
                                              }</span></label></div>`)
                                            })
                                            _push(`<!--]-->`)
                                          } else {
                                            _push(`<!---->`)
                                          }
                                          _push(`</li>`)
                                        })
                                        _push(`<!--]--></ol>`)
                                      } else {
                                        return [
                                          __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                                __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                                (it.input_type == 'radio')
                                                  ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                      return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                        class: "form-control",
                                                        key: asi
                                                      }, [
                                                        __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                            type: "radio",
                                                            "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                            value: asi.weight,
                                                            class: "radio checked:bg-red-500"
                                                          }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                            [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                          ]),
                                                          __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                        ])
                                                      ]))
                                                    }), 128 /* KEYED_FRAGMENT */))
                                                  : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                              ]))
                                            }), 128 /* KEYED_FRAGMENT */))
                                          ])
                                        ]
                                      }
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, _parent, _scopeId))
                                })
                                _push(`<!--]-->`)
                              } else {
                                return [
                                  (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                    return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                      default: __vite_ssr_import_7__.withCtx(() => [
                                        __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                              __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                              (it.input_type == 'radio')
                                                ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                    return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                      class: "form-control",
                                                      key: asi
                                                    }, [
                                                      __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                          type: "radio",
                                                          "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                          value: asi.weight,
                                                          class: "radio checked:bg-red-500"
                                                        }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                          [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                        ]),
                                                        __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                      ])
                                                    ]))
                                                  }), 128 /* KEYED_FRAGMENT */))
                                                : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                            ]))
                                          }), 128 /* KEYED_FRAGMENT */))
                                        ])
                                      ]),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */))
                                  }), 128 /* KEYED_FRAGMENT */))
                                ]
                              }
                            }),
                            _: 1 /* STABLE */
                          }, _parent, _scopeId))
                        } else {
                          return [
                            __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                    default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                      __vite_ssr_import_7__.createVNode("div", {
                                        class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                      }, [
                                        __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                      ], 2 /* CLASS */)
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            }),
                            __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                    default: __vite_ssr_import_7__.withCtx(() => [
                                      __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                            __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                            (it.input_type == 'radio')
                                              ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                    class: "form-control",
                                                    key: asi
                                                  }, [
                                                    __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                      __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                        type: "radio",
                                                        "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                        value: asi.weight,
                                                        class: "radio checked:bg-red-500"
                                                      }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                        [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                      ]),
                                                      __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                    ])
                                                  ]))
                                                }), 128 /* KEYED_FRAGMENT */))
                                              : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                          ]))
                                        }), 128 /* KEYED_FRAGMENT */))
                                      ])
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            })
                          ]
                        }
                      }),
                      _: 1 /* STABLE */
                    }, _parent, _scopeId))
                    _push(`</div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 lg:grid-cols-2 px-5 py-5" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "last_name",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ປະເພດລູກຄ້າ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              class: "select select-bordered w-full",
                              "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                            }, [
                              __vite_ssr_import_7__.createVNode("option", {
                                disabled: "",
                                selected: ""
                              }, "ເລືອກປະເພດລູກຄ້າ"),
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.CutType.data, (ci) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                  key: ci,
                                  value: ci.id
                                }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "last_name",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ປະເພດສິນເຊື່ອ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              class: "select select-bordered w-full",
                              "onUpdate:modelValue": $event => (($setup.loanCust.loan_type) = $event)
                            }, [
                              __vite_ssr_import_7__.createVNode("option", {
                                disabled: "",
                                selected: ""
                              }, "ເລືອກປະເພດສິນເຊື່ອ"),
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.getLoan, (ci) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                  key: ci,
                                  value: ci.id
                                }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.loan_type]
                            ])
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5 mb-8" }, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ"),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                          __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "radio",
                              id: "expY",
                              "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                              value: "Y",
                              name: "exp_yn",
                              class: "radio"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                            ]),
                            __vite_ssr_import_7__.createVNode("label", {
                              class: "pl-4",
                              for: "expY"
                            }, "ເຄີຍກູ້ມາກ່ອນ")
                          ]),
                          __vite_ssr_import_7__.createVNode("div", { class: "flex ml-10" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "radio",
                              id: "expN",
                              "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                              value: "N",
                              name: "exp_yn",
                              class: "radio"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                            ]),
                            __vite_ssr_import_7__.createVNode("label", {
                              class: "pl-4",
                              for: "expN"
                            }, "ບໍ່ເຄີຍກູ້ມາກ່ອນ")
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5" }, [
                        __vite_ssr_import_7__.createVNode($setup["TabGroup"], null, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                    default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                      __vite_ssr_import_7__.createVNode("div", {
                                        class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                      }, [
                                        __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                      ], 2 /* CLASS */)
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            }),
                            __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                    default: __vite_ssr_import_7__.withCtx(() => [
                                      __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                            __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                            (it.input_type == 'radio')
                                              ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                    class: "form-control",
                                                    key: asi
                                                  }, [
                                                    __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                      __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                        type: "radio",
                                                        "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                        value: asi.weight,
                                                        class: "radio checked:bg-red-500"
                                                      }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                        [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                      ]),
                                                      __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                    ])
                                                  ]))
                                                }), 128 /* KEYED_FRAGMENT */))
                                              : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                          ]))
                                        }), 128 /* KEYED_FRAGMENT */))
                                      ])
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            })
                          ]),
                          _: 1 /* STABLE */
                        })
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຄຳຖາມ</th><th class="text-right"${
                      _scopeId
                    }>ຄະແນນ</th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.loanCust.questions, (cp) => {
                      _push(`<!--[--><tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><th colspan="2"${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(cp.title)
                      }</th></tr><!--[-->`)
                      __vite_ssr_import_8__.ssrRenderList(cp.qeustions, (qi, xi) => {
                        _push(`<tr${
                          _scopeId
                        }><th${
                          _scopeId
                        }>${
                          __vite_ssr_import_8__.ssrInterpolate(xi+1)
                        }</th><td${
                          _scopeId
                        }>${
                          __vite_ssr_import_8__.ssrInterpolate(qi.title)
                        }</td><td class="text-right"${
                          _scopeId
                        }>0 %</td></tr>`)
                      })
                      _push(`<!--]--><!--]-->`)
                    })
                    _push(`<!--]--></tbody><tfoot${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th colspan="2" class="text-right"${
                      _scopeId
                    }>ລວມ</th><th class="text-right"${
                      _scopeId
                    }>0 %</th></tr></tfoot></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "overflow-x-auto" }, [
                        __vite_ssr_import_7__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_7__.createVNode("thead", null, [
                            __vite_ssr_import_7__.createVNode("tr", null, [
                              __vite_ssr_import_7__.createVNode("th"),
                              __vite_ssr_import_7__.createVNode("th", null, "ຄຳຖາມ"),
                              __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "ຄະແນນ")
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("tbody", null, [
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, [
                                __vite_ssr_import_7__.createVNode("tr", null, [
                                  __vite_ssr_import_7__.createVNode("th"),
                                  __vite_ssr_import_7__.createVNode("th", { colspan: "2" }, __vite_ssr_import_7__.toDisplayString(cp.title), 1 /* TEXT */)
                                ]),
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (qi, xi) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("tr", { key: qi }, [
                                    __vite_ssr_import_7__.createVNode("th", null, __vite_ssr_import_7__.toDisplayString(xi+1), 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("td", null, __vite_ssr_import_7__.toDisplayString(qi.title), 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("td", { class: "text-right" }, "0 %")
                                  ]))
                                }), 128 /* KEYED_FRAGMENT */))
                              ], 64 /* STABLE_FRAGMENT */))
                            }), 256 /* UNKEYED_FRAGMENT */))
                          ]),
                          __vite_ssr_import_7__.createVNode("tfoot", null, [
                            __vite_ssr_import_7__.createVNode("tr", null, [
                              __vite_ssr_import_7__.createVNode("th", {
                                colspan: "2",
                                class: "text-right"
                              }, "ລວມ"),
                              __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "0 %")
                            ])
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full p-16" }, [
                      __vite_ssr_import_7__.createVNode("form", null, [
                        __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2" }, [
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "first_name",
                              class: "block mb-2 text-sm font-medium dark:text-gray-300"
                            }, "ຊື່ແທ້"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "text",
                              id: "first_name",
                              "onUpdate:modelValue": $event => (($setup.loanCust.firstname) = $event),
                              class: "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.firstname]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "last_name",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ນາມສະກຸນ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "text",
                              id: "last_name",
                              "onUpdate:modelValue": $event => (($setup.loanCust.lastname) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.lastname]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "ເພດ"),
                            __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                              __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "radio",
                                  name: "sex",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                  class: "radio",
                                  value: "M",
                                  id: "sexm"
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                ]),
                                __vite_ssr_import_7__.createVNode("label", {
                                  class: "pl-4",
                                  for: "sexm"
                                }, "ຊາຍ")
                              ]),
                              __vite_ssr_import_7__.createVNode("div", { class: "flex pl-5" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "radio",
                                  name: "sex",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                  class: "radio",
                                  id: "sexf",
                                  value: "F"
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                ]),
                                __vite_ssr_import_7__.createVNode("label", {
                                  class: "pl-4",
                                  for: "sexf"
                                }, "ຍິງ")
                              ])
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "company",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ຊື່ວິສາຫະກິດ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "text",
                              id: "company",
                              "onUpdate:modelValue": $event => (($setup.loanCust.company) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.company]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "phone",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ເບີໂທ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "tel",
                              id: "phone",
                              "onUpdate:modelValue": $event => (($setup.loanCust.mobile) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              placeholder: "020-XXXX-XXXX",
                              pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.mobile]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "email",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ອີເມວ໌"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "email",
                              id: "email",
                              "onUpdate:modelValue": $event => (($setup.loanCust.email) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              placeholder: "stb@stbanklaos.com"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.email]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "financeAm",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ວົງເງິນສະເໜີກູ້"),
                            __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "number",
                                id: "financeAm",
                                "onUpdate:modelValue": $event => (($setup.loanCust.finance) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.finance]
                              ]),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                "onUpdate:modelValue": $event => (($setup.loanCust.ccy) = $event),
                                class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"
                              }, [
                                __vite_ssr_import_7__.createVNode("option", { value: "LAK" }, "LAK")
                              ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.ccy]
                              ])
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "cycle",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ໄລຍະເວລາ "),
                            __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "number",
                                id: "cycle",
                                "onUpdate:modelValue": $event => (($setup.loanCust.cycle) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.cycle]
                              ]),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                "onUpdate:modelValue": $event => (($setup.loanCust.cycle_type) = $event),
                                class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"
                              }, [
                                __vite_ssr_import_7__.createVNode("option", { value: "Y" }, "ປີ"),
                                __vite_ssr_import_7__.createVNode("option", { value: "M" }, "ເດືອນ"),
                                __vite_ssr_import_7__.createVNode("option", { value: "D" }, "ວັນ")
                              ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cycle_type]
                              ])
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "perpose",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ເປົ້າໝາຍສະເໜີກູ້"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                            id: "perpose",
                            "onUpdate:modelValue": $event => (($setup.loanCust.perpose) = $event),
                            class: "textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.perpose]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("button", {
                          type: "button",
                          class: "btn mt-8",
                          onClick: $setup.CreateCustomer
                        }, " ບັນທຶກ ແລະ ຕໍ່ໄປ ")
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2 p-16" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ປະເພດຫຼັກຊັບຄ້ຳປະກັນ"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                          class: "select select-bordered w-full",
                          "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                        }, [
                          __vite_ssr_import_7__.createVNode("option", {
                            disabled: "",
                            selected: ""
                          }, "ເລືອກປະເພດລູກຄ້າ"),
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.Collateral.data, (ci) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                              key: ci,
                              value: ci.id
                            }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 lg:grid-cols-2 px-5 py-5" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ປະເພດລູກຄ້າ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                            class: "select select-bordered w-full",
                            "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                          }, [
                            __vite_ssr_import_7__.createVNode("option", {
                              disabled: "",
                              selected: ""
                            }, "ເລືອກປະເພດລູກຄ້າ"),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.CutType.data, (ci) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                key: ci,
                                value: ci.id
                              }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ປະເພດສິນເຊື່ອ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                            class: "select select-bordered w-full",
                            "onUpdate:modelValue": $event => (($setup.loanCust.loan_type) = $event)
                          }, [
                            __vite_ssr_import_7__.createVNode("option", {
                              disabled: "",
                              selected: ""
                            }, "ເລືອກປະເພດສິນເຊື່ອ"),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.getLoan, (ci) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                key: ci,
                                value: ci.id
                              }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.loan_type]
                          ])
                        ])
                      ])
                    ]),
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5 mb-8" }, [
                      __vite_ssr_import_7__.createVNode("label", {
                        for: "last_name",
                        class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      }, "ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ"),
                      __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "radio",
                            id: "expY",
                            "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                            value: "Y",
                            name: "exp_yn",
                            class: "radio"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                          ]),
                          __vite_ssr_import_7__.createVNode("label", {
                            class: "pl-4",
                            for: "expY"
                          }, "ເຄີຍກູ້ມາກ່ອນ")
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex ml-10" }, [
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "radio",
                            id: "expN",
                            "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                            value: "N",
                            name: "exp_yn",
                            class: "radio"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                          ]),
                          __vite_ssr_import_7__.createVNode("label", {
                            class: "pl-4",
                            for: "expN"
                          }, "ບໍ່ເຄີຍກູ້ມາກ່ອນ")
                        ])
                      ])
                    ]),
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5" }, [
                      __vite_ssr_import_7__.createVNode($setup["TabGroup"], null, {
                        default: __vite_ssr_import_7__.withCtx(() => [
                          __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                            default: __vite_ssr_import_7__.withCtx(() => [
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                  default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                    __vite_ssr_import_7__.createVNode("div", {
                                      class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                    }, [
                                      __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                      __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                    ], 2 /* CLASS */)
                                  ]),
                                  _: 2 /* DYNAMIC */
                                }, 1024 /* DYNAMIC_SLOTS */))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            _: 1 /* STABLE */
                          }),
                          __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                            default: __vite_ssr_import_7__.withCtx(() => [
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                  default: __vite_ssr_import_7__.withCtx(() => [
                                    __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                      (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                        return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                          __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                          (it.input_type == 'radio')
                                            ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                  class: "form-control",
                                                  key: asi
                                                }, [
                                                  __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                    __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                      type: "radio",
                                                      "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                      value: asi.weight,
                                                      class: "radio checked:bg-red-500"
                                                    }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                      [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                    ]),
                                                    __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                  ])
                                                ]))
                                              }), 128 /* KEYED_FRAGMENT */))
                                            : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                        ]))
                                      }), 128 /* KEYED_FRAGMENT */))
                                    ])
                                  ]),
                                  _: 2 /* DYNAMIC */
                                }, 1024 /* DYNAMIC_SLOTS */))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            _: 1 /* STABLE */
                          })
                        ]),
                        _: 1 /* STABLE */
                      })
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "overflow-x-auto" }, [
                      __vite_ssr_import_7__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_7__.createVNode("thead", null, [
                          __vite_ssr_import_7__.createVNode("tr", null, [
                            __vite_ssr_import_7__.createVNode("th"),
                            __vite_ssr_import_7__.createVNode("th", null, "ຄຳຖາມ"),
                            __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "ຄະແນນ")
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("tbody", null, [
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, [
                              __vite_ssr_import_7__.createVNode("tr", null, [
                                __vite_ssr_import_7__.createVNode("th"),
                                __vite_ssr_import_7__.createVNode("th", { colspan: "2" }, __vite_ssr_import_7__.toDisplayString(cp.title), 1 /* TEXT */)
                              ]),
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (qi, xi) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("tr", { key: qi }, [
                                  __vite_ssr_import_7__.createVNode("th", null, __vite_ssr_import_7__.toDisplayString(xi+1), 1 /* TEXT */),
                                  __vite_ssr_import_7__.createVNode("td", null, __vite_ssr_import_7__.toDisplayString(qi.title), 1 /* TEXT */),
                                  __vite_ssr_import_7__.createVNode("td", { class: "text-right" }, "0 %")
                                ]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ], 64 /* STABLE_FRAGMENT */))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ]),
                        __vite_ssr_import_7__.createVNode("tfoot", null, [
                          __vite_ssr_import_7__.createVNode("tr", null, [
                            __vite_ssr_import_7__.createVNode("th", {
                              colspan: "2",
                              class: "text-right"
                            }, "ລວມ"),
                            __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "0 %")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "steps" }, {
            default: __vite_ssr_import_7__.withCtx(() => [
              __vite_ssr_import_7__.createVNode($setup["Tab"], { class: "step step-primary" }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("ຂໍ້ມູນລູກຄ້າ")
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["Tab"], {
                class: `step ${$setup.stepIndex > 0 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("ຫຼັກຊັບຄ້ຳປະກັນ " + __vite_ssr_import_7__.toDisplayString($setup.stepIndex), 1 /* TEXT */)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["class"]),
              __vite_ssr_import_7__.createVNode($setup["Tab"], {
                class: `step ${$setup.stepIndex > 1 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ")
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["class"]),
              __vite_ssr_import_7__.createVNode($setup["Tab"], {
                class: `step ${$setup.stepIndex > 2 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("Tab 3")
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["class"])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_7__.createVNode($setup["TabPanels"], null, {
            default: __vite_ssr_import_7__.withCtx(() => [
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "w-full p-16" }, [
                    __vite_ssr_import_7__.createVNode("form", null, [
                      __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2" }, [
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "first_name",
                            class: "block mb-2 text-sm font-medium dark:text-gray-300"
                          }, "ຊື່ແທ້"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "text",
                            id: "first_name",
                            "onUpdate:modelValue": $event => (($setup.loanCust.firstname) = $event),
                            class: "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.firstname]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ນາມສະກຸນ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "text",
                            id: "last_name",
                            "onUpdate:modelValue": $event => (($setup.loanCust.lastname) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.lastname]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "ເພດ"),
                          __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                            __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "radio",
                                name: "sex",
                                "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                class: "radio",
                                value: "M",
                                id: "sexm"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                              ]),
                              __vite_ssr_import_7__.createVNode("label", {
                                class: "pl-4",
                                for: "sexm"
                              }, "ຊາຍ")
                            ]),
                            __vite_ssr_import_7__.createVNode("div", { class: "flex pl-5" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "radio",
                                name: "sex",
                                "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                class: "radio",
                                id: "sexf",
                                value: "F"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                              ]),
                              __vite_ssr_import_7__.createVNode("label", {
                                class: "pl-4",
                                for: "sexf"
                              }, "ຍິງ")
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "company",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ຊື່ວິສາຫະກິດ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "text",
                            id: "company",
                            "onUpdate:modelValue": $event => (($setup.loanCust.company) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.company]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "phone",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ເບີໂທ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "tel",
                            id: "phone",
                            "onUpdate:modelValue": $event => (($setup.loanCust.mobile) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            placeholder: "020-XXXX-XXXX",
                            pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.mobile]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "email",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ອີເມວ໌"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "email",
                            id: "email",
                            "onUpdate:modelValue": $event => (($setup.loanCust.email) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            placeholder: "stb@stbanklaos.com"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.email]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "financeAm",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ວົງເງິນສະເໜີກູ້"),
                          __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "number",
                              id: "financeAm",
                              "onUpdate:modelValue": $event => (($setup.loanCust.finance) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.finance]
                            ]),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              "onUpdate:modelValue": $event => (($setup.loanCust.ccy) = $event),
                              class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"
                            }, [
                              __vite_ssr_import_7__.createVNode("option", { value: "LAK" }, "LAK")
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.ccy]
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "cycle",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ໄລຍະເວລາ "),
                          __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "number",
                              id: "cycle",
                              "onUpdate:modelValue": $event => (($setup.loanCust.cycle) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.cycle]
                            ]),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              "onUpdate:modelValue": $event => (($setup.loanCust.cycle_type) = $event),
                              class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"
                            }, [
                              __vite_ssr_import_7__.createVNode("option", { value: "Y" }, "ປີ"),
                              __vite_ssr_import_7__.createVNode("option", { value: "M" }, "ເດືອນ"),
                              __vite_ssr_import_7__.createVNode("option", { value: "D" }, "ວັນ")
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cycle_type]
                            ])
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", null, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "perpose",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ເປົ້າໝາຍສະເໜີກູ້"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                          id: "perpose",
                          "onUpdate:modelValue": $event => (($setup.loanCust.perpose) = $event),
                          class: "textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                          required: ""
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelText, $setup.loanCust.perpose]
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("button", {
                        type: "button",
                        class: "btn mt-8",
                        onClick: $setup.CreateCustomer
                      }, " ບັນທຶກ ແລະ ຕໍ່ໄປ ")
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2 p-16" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                      __vite_ssr_import_7__.createVNode("label", {
                        for: "last_name",
                        class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      }, "ປະເພດຫຼັກຊັບຄ້ຳປະກັນ"),
                      __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                        class: "select select-bordered w-full",
                        "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                      }, [
                        __vite_ssr_import_7__.createVNode("option", {
                          disabled: "",
                          selected: ""
                        }, "ເລືອກປະເພດລູກຄ້າ"),
                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.Collateral.data, (ci) => {
                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                            key: ci,
                            value: ci.id
                          }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 lg:grid-cols-2 px-5 py-5" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                      __vite_ssr_import_7__.createVNode("div", null, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ປະເພດລູກຄ້າ"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                          class: "select select-bordered w-full",
                          "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                        }, [
                          __vite_ssr_import_7__.createVNode("option", {
                            disabled: "",
                            selected: ""
                          }, "ເລືອກປະເພດລູກຄ້າ"),
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.CutType.data, (ci) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                              key: ci,
                              value: ci.id
                            }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                        ])
                      ])
                    ]),
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                      __vite_ssr_import_7__.createVNode("div", null, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ປະເພດສິນເຊື່ອ"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                          class: "select select-bordered w-full",
                          "onUpdate:modelValue": $event => (($setup.loanCust.loan_type) = $event)
                        }, [
                          __vite_ssr_import_7__.createVNode("option", {
                            disabled: "",
                            selected: ""
                          }, "ເລືອກປະເພດສິນເຊື່ອ"),
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.getLoan, (ci) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                              key: ci,
                              value: ci.id
                            }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.loan_type]
                        ])
                      ])
                    ])
                  ]),
                  __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5 mb-8" }, [
                    __vite_ssr_import_7__.createVNode("label", {
                      for: "last_name",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    }, "ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ"),
                    __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          type: "radio",
                          id: "expY",
                          "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                          value: "Y",
                          name: "exp_yn",
                          class: "radio"
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                        ]),
                        __vite_ssr_import_7__.createVNode("label", {
                          class: "pl-4",
                          for: "expY"
                        }, "ເຄີຍກູ້ມາກ່ອນ")
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "flex ml-10" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          type: "radio",
                          id: "expN",
                          "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                          value: "N",
                          name: "exp_yn",
                          class: "radio"
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                        ]),
                        __vite_ssr_import_7__.createVNode("label", {
                          class: "pl-4",
                          for: "expN"
                        }, "ບໍ່ເຄີຍກູ້ມາກ່ອນ")
                      ])
                    ])
                  ]),
                  __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5" }, [
                    __vite_ssr_import_7__.createVNode($setup["TabGroup"], null, {
                      default: __vite_ssr_import_7__.withCtx(() => [
                        __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                  __vite_ssr_import_7__.createVNode("div", {
                                    class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                  }, [
                                    __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                  ], 2 /* CLASS */)
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 1 /* STABLE */
                        }),
                        __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                default: __vite_ssr_import_7__.withCtx(() => [
                                  __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                    (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                      return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                        __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                        (it.input_type == 'radio')
                                          ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                class: "form-control",
                                                key: asi
                                              }, [
                                                __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                    type: "radio",
                                                    "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                    value: asi.weight,
                                                    class: "radio checked:bg-red-500"
                                                  }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                    [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                  ]),
                                                  __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                ])
                                              ]))
                                            }), 128 /* KEYED_FRAGMENT */))
                                          : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                      ]))
                                    }), 128 /* KEYED_FRAGMENT */))
                                  ])
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 1 /* STABLE */
                        })
                      ]),
                      _: 1 /* STABLE */
                    })
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "overflow-x-auto" }, [
                    __vite_ssr_import_7__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_7__.createVNode("thead", null, [
                        __vite_ssr_import_7__.createVNode("tr", null, [
                          __vite_ssr_import_7__.createVNode("th"),
                          __vite_ssr_import_7__.createVNode("th", null, "ຄຳຖາມ"),
                          __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "ຄະແນນ")
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("tbody", null, [
                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, [
                            __vite_ssr_import_7__.createVNode("tr", null, [
                              __vite_ssr_import_7__.createVNode("th"),
                              __vite_ssr_import_7__.createVNode("th", { colspan: "2" }, __vite_ssr_import_7__.toDisplayString(cp.title), 1 /* TEXT */)
                            ]),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (qi, xi) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("tr", { key: qi }, [
                                __vite_ssr_import_7__.createVNode("th", null, __vite_ssr_import_7__.toDisplayString(xi+1), 1 /* TEXT */),
                                __vite_ssr_import_7__.createVNode("td", null, __vite_ssr_import_7__.toDisplayString(qi.title), 1 /* TEXT */),
                                __vite_ssr_import_7__.createVNode("td", { class: "text-right" }, "0 %")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 64 /* STABLE_FRAGMENT */))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ]),
                      __vite_ssr_import_7__.createVNode("tfoot", null, [
                        __vite_ssr_import_7__.createVNode("tr", null, [
                          __vite_ssr_import_7__.createVNode("th", {
                            colspan: "2",
                            class: "text-right"
                          }, "ລວມ"),
                          __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "0 %")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/customer/form.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/customer/form.vue"]])
const meta = {
  layout: "auth",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /composables/customer.ts
// Parents: 
// - /pages/customer/form.vue?macro=true ($id_485061af)
// - /pages/customer/form.vue ($id_fccc8ef6)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// Dependencies: 

// --------------------
const $id_a1f167fd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const createCustomer = async (customer) => {
  const resCustomer = $fetch("http://10.0.34.37:3333/api/v1/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.parse(JSON.stringify(customer))
  });
  return resCustomer;
};
Object.defineProperty(__vite_ssr_exports__, "createCustomer", { enumerable: true, configurable: true, get(){ return createCustomer }});
;
}


// --------------------
// Request: /pages/customer/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /components/table/customer.vue ($id_587613ac)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_1fd43e10 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/table/customer.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

// import { validateRef } from "light-vue3-validation";
/*#__PURE__*/ false && __vite_ssr_import_2__.definePageMeta({
  layout: "auth",
});
const user = __vite_ssr_import_5__.reactive({
  username: __vite_ssr_import_5__.ref(""),
  fullname: __vite_ssr_import_5__.ref(""),
  password: __vite_ssr_import_5__.ref(""),
  cpassword: __vite_ssr_import_5__.ref(""),
  email: __vite_ssr_import_5__.ref(""),
  mobile: __vite_ssr_import_5__.ref(""),
});
const tbHeader = __vite_ssr_import_5__.reactive([
  "ຊື່ ແລະ ນາມສະກຸນ",
  "email",
  "mobile",
  "ວິສາຫະກິດ",
  "ປະເພດ",
  "ວັນທີເດືອນປີ",
  "ຈຸດປະສົງ",
]);
const { pending, data: customers } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_3__.useAsyncData("customers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/customer")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const __returned__ = { user, tbHeader, pending, customers, ref: __vite_ssr_import_5__.ref, reactive: __vite_ssr_import_5__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default
  const _component_TableCustomer = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "w-full mt-5 px-5" }, _attrs))}><div class="flex justify-between my-3"><h4>ລູກຄ້າ</h4><label for="my-modal">+</label>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
    to: "/customer/form?t=create",
    class: "btn btn-square btn-sm"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`+`)
      } else {
        return [
          __vite_ssr_import_6__.createTextVNode("+")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TableCustomer, {
    footer: false,
    column: $setup.tbHeader,
    items: $setup.customers.data
  }, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/customer/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/customer/index.vue"]])
const meta = {
  layout: "auth",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/table/customer.vue
// Parents: 
// - /pages/customer/index.vue?macro=true ($id_1fd43e10)
// - /pages/customer/index.vue ($id_55a62451)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_587613ac = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");


const _sfc_main = {
  props: {
    footer: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Array,
    },
    items: {
      type: Object,
    },
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}><div class="overflow-x-auto"><table class="table w-full table-compact"><!-- head --><thead><tr><th><label><input type="checkbox" class="checkbox" name="checkme"></label></th><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.column, (x) => {
    _push(`<th>${__vite_ssr_import_2__.ssrInterpolate(x)}</th>`)
  })
  _push(`<!--]--><th></th></tr></thead><tbody><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.items, (dt) => {
    _push(`<tr><th><label><input type="checkbox" name="checkme" class="checkbox"></label></th><td><div class="flex items-center space-x-3"><div class="avatar"><div class="mask mask-squircle w-8 h-8">`)
    if (dt == 'image') {
      _push(`<img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component">`)
    } else {
      _push(`<svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`)
    }
    _push(`</div></div><div><div class="font-bold">${
      __vite_ssr_import_2__.ssrInterpolate(dt.fullname)
    }</div></div></div></td><td>${
      __vite_ssr_import_2__.ssrInterpolate(dt.email)
    }</td><td>${
      __vite_ssr_import_2__.ssrInterpolate(dt.mobile)
    }</td><td>${
      __vite_ssr_import_2__.ssrInterpolate(dt.company)
    }</td><td>${
      __vite_ssr_import_2__.ssrInterpolate(dt.cust_cate.name)
    }</td><td>${
      __vite_ssr_import_2__.ssrInterpolate(dt.lntype.name)
    }</td><td>${
      __vite_ssr_import_2__.ssrInterpolate(dt.perpose)
    }</td><th>`)
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
      to: `/customer/${dt.cust_no}`,
      class: "btn btn-ghost btn-xs"
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`view`)
        } else {
          return [
            __vite_ssr_import_1__.createTextVNode("view")
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
    _push(`</th></tr>`)
  })
  _push(`<!--]--></tbody></table></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/table/customer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/components/table/customer.vue"]]);
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>Homage</div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/index.vue"]])
const meta = {
  layout: "auth",
  middleware: ["auth"],
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/login/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /composables/locale.ts ($id_35d5db4b)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d1da0e93 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/locale.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/composables/useAuth.ts");
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const route = __vite_ssr_import_0__.useRoute()
/*#__PURE__*/ false && __vite_ssr_import_1__.definePageMeta({
  title: "ເຂົ້າສູ່ລະບົບ",
});
const locales = __vite_ssr_import_2__.useLocales();
const authKey = __vite_ssr_import_0__.useCookie("autKey");
const signinForm = __vite_ssr_import_3__.ref({ username: "", password: "" });
let loading = __vite_ssr_import_3__.ref(false);
const signin = () => {
  loading = true;
  // $ApiFetch('/login',{method:'POST'})
  __vite_ssr_import_4__.signInUser(signinForm).then((res) => {
    authKey.value = res.token;
    navigator('/')
  });
};

const __returned__ = { route, locales, authKey, signinForm, loading, signin }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_5__.ssrRenderAttrs(_attrs)
  }><div class="min-h-screen flex flex-col items-center justify-center"><div class="flex flex-col light:bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"><div class="font-medium self-center text-xl sm:text-3xl text-gray-800 dark:text-white"> CRD </div><div class="mt-4 self-center text-xl sm:text-sm text-gray-800 dark:text-white"> Enter your credentials to access your account </div><div class="mt-10"><form><div class="flex flex-col mb-5"><label for="email" class="mb-1 text-xs tracking-wide dark:text-white">ຊື່ຜູ້ໃຊ້ລະບົບ:</label><div class="relative"><div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div><input id="username" type="text" name="username"${
    __vite_ssr_import_5__.ssrRenderAttr("value", $setup.signinForm.username)
  } class="text-sm placeholder-gray-500 pl-10 pr-4 input input-bordered w-full py-2 focus:outline-none focus:border-blue-400" placeholder="ປ້ອນ ອີເມວ໌ ຫຼື ເບີໂທ"></div></div><div class="flex flex-col mb-6"><label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white">ລະຫັດຜ່ານ:</label><div class="relative"><div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg></span></div><input id="password" type="password" name="password"${
    __vite_ssr_import_5__.ssrRenderAttr("value", $setup.signinForm.password)
  } class="text-sm placeholder-gray-500 pl-10 pr-4 input input-bordered w-full py-2 focus:outline-none focus:border-blue-400" placeholder="ປ້ອນລະຫັດຜ່ານ"></div></div><button class="${
    __vite_ssr_import_5__.ssrRenderClass($setup.loading ? 'btn w-full loading' : 'btn w-full')
  }" type="submit"> ເຂົ້າສູ່ລະບົບ <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button></form></div></div></div></div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/login/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/login/index.vue"]])
const meta = {
  title: "ເຂົ້າສູ່ລະບົບ",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /composables/locale.ts
// Parents: 
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /pages/login/index.vue ($id_d006def6)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_35d5db4b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const useLocale = () => __vite_ssr_import_0__.useState("locale", () => useDefaultLocale().value);
Object.defineProperty(__vite_ssr_exports__, "useLocale", { enumerable: true, configurable: true, get(){ return useLocale }});
const useDefaultLocale = (fallback = "en-US") => {
  const locale = __vite_ssr_import_1__.ref(fallback);
  if (true) {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
    const reqLocale = nuxtApp.ssrContext?.req.headers["accept-language"]?.split(",")[0];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (false) {
    const navLang = navigator.language;
    if (navLang) {
      locale.value = navLang;
    }
  }
  return locale;
};
Object.defineProperty(__vite_ssr_exports__, "useDefaultLocale", { enumerable: true, configurable: true, get(){ return useDefaultLocale }});
const useLocales = () => {
  const locale = useLocale();
  const locales = __vite_ssr_import_1__.ref([
    "en-US",
    "en-GB",
    "ko-KR",
    "zh-CN",
    "ar-EG",
    "fa-IR",
    "ja-JP-u-ca-japanese"
  ]);
  if (!locales.value.includes(locale.value)) {
    locales.value.unshift(locale.value);
  }
  return locales;
};
Object.defineProperty(__vite_ssr_exports__, "useLocales", { enumerable: true, configurable: true, get(){ return useLocales }});
const useLocaleDate = (date, locale = useLocale()) => {
  return __vite_ssr_import_1__.computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: "full" }).format(__vite_ssr_import_1__.unref(date)));
};
Object.defineProperty(__vite_ssr_exports__, "useLocaleDate", { enumerable: true, configurable: true, get(){ return useLocaleDate }});
;
}


// --------------------
// Request: /composables/useAuth.ts
// Parents: 
// - /pages/login/index.vue?macro=true ($id_d1da0e93)
// - /pages/login/index.vue ($id_d006def6)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ba05bb26 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const signInUser = async (User) => {
  const credentials = $fetch("http://10.0.34.37:3333/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: User.value
  });
  return credentials;
};
Object.defineProperty(__vite_ssr_exports__, "signInUser", { enumerable: true, configurable: true, get(){ return signInUser }});
const initUser = async () => {
  const userCookie = __vite_ssr_import_0__.useCookie("autKey");
  const router = __vite_ssr_import_0__.useRouter();
  console.log(userCookie);
};
Object.defineProperty(__vite_ssr_exports__, "initUser", { enumerable: true, configurable: true, get(){ return initUser }});
;
}


// --------------------
// Request: /pages/users/[id].vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bfb117aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

// import { validateRef } from "light-vue3-validation";
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "auth",
});
const tbHeader = __vite_ssr_import_3__.reactive([
  "fullname",
  "email",
  "mobile",
  "restrict",
  "Address Restrict",
  "created_at",
]);
const { data: user } = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("listUsers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/users/laithong")
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const createUser = async () => {
  await $fetch("http://10.0.34.37:3333/api/v1/auth/create", {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });
};

const __returned__ = { tbHeader, user, createUser, ref: __vite_ssr_import_3__.ref, reactive: __vite_ssr_import_3__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_4__.ssrRenderAttrs(_attrs)
  }><!-- {{user}} --><div class="flex"><div class="w-60"><div class="w-full card__media"><img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" class="h-20 w-full"></div><div class="card__media--aside"></div><div class="flex items-center p-4"><div class="relative flex flex-col items-center w-full"><div class="h-24 w-12 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white"><img class="h-20 w-20 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt=""><div class="absolute"></div></div><div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full"><span class="text-md whitespace-nowrap text-gray-800 font-semibold dark:text-white">${
    __vite_ssr_import_4__.ssrInterpolate($setup.user.data.fullname)
  }</span><!-- <span class="text-md whitespace-nowrap text-gray-600"
                >boussadjra</span
              >
              <p class="text-sm text-gray-500">
                I can't start my day without a coffee cup
              </p> --><!-- <div
                class="
                  py-4
                  flex
                  justify-center
                  items-center
                  w-full
                  divide-x divide-gray-400 divide-solid
                "
              >
                <span class="text-center px-2"
                  ><span class="font-bold text-gray-700">56</span
                  ><span class="text-gray-600"> followers</span></span
                ><span class="text-center px-2"
                  ><span class="font-bold text-gray-700">112</span
                  ><span class="text-gray-600"> following</span></span
                ><span class="text-center px-2"
                  ><span class="font-bold text-gray-700">27</span
                  ><span class="text-gray-600"> repos</span></span
                >
              </div> --></div></div></div></div><div class="content">asdkflsajfk</div></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/users/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/users/[id].vue"]])
const meta = {
  layout: "auth",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/users/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /components/modal/sm.vue ($id_bf07e772)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2240d037 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modal/sm.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

// import { validateRef } from "light-vue3-validation";
/*#__PURE__*/ false && __vite_ssr_import_1__.definePageMeta({
  layout: "auth",
  title: "ຈັດການຜູ້ໃຊ້ລະບົບ",
});
const user = __vite_ssr_import_4__.reactive({
  username: __vite_ssr_import_4__.ref(""),
  fullname: __vite_ssr_import_4__.ref(""),
  password: __vite_ssr_import_4__.ref(""),
  cpassword: __vite_ssr_import_4__.ref(""),
  email: __vite_ssr_import_4__.ref(""),
  mobile: __vite_ssr_import_4__.ref(""),
});
const { data: listUsers } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("listUsers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/users")
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const createUser = async () => {
  await $fetch("http://10.0.34.37:3333/api/v1/auth/create", {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });
};

const __returned__ = { user, listUsers, createUser, ref: __vite_ssr_import_4__.ref, reactive: __vite_ssr_import_4__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalSm = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "w-full mt-5 px-5" }, _attrs))}><div class="flex justify-between my-3"><h4>ຜູ້ໃຊ້ລະບົບ</h4><label for="my-modal" class="btn btn-square btn-sm">+</label></div>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ModalSm, null, {
    title: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Add New User `)
      } else {
        return [
          __vite_ssr_import_5__.createTextVNode(" Add New User ")
        ]
      }
    }),
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="mt-5"${
          _scopeId
        }><form${
          _scopeId
        }><input type="text"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.fullname)
        } name="fullname" placeholder="fullname" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="text"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.username)
        } name="username" placeholder="username" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="email" name="email"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.email)
        } placeholder="email" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="tel" name="mobile"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.mobile)
        } placeholder="mobile" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="text" name="password"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.password)
        } placeholder="password" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="text" name="cpassword" placeholder="confirm password" class="input input-sm w-full mb-5"${
          _scopeId
        }><button type="button" class="btn"${
          _scopeId
        }>Save</button></form></div>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("div", { class: "mt-5" }, [
            __vite_ssr_import_5__.createVNode("form", null, [
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "text",
                "onUpdate:modelValue": $event => (($setup.user.fullname) = $event),
                name: "fullname",
                placeholder: "fullname",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.fullname]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "text",
                "onUpdate:modelValue": $event => (($setup.user.username) = $event),
                name: "username",
                placeholder: "username",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.username]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "email",
                name: "email",
                "onUpdate:modelValue": $event => (($setup.user.email) = $event),
                placeholder: "email",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.email]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "tel",
                name: "mobile",
                "onUpdate:modelValue": $event => (($setup.user.mobile) = $event),
                placeholder: "mobile",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.mobile]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "text",
                name: "password",
                "onUpdate:modelValue": $event => (($setup.user.password) = $event),
                placeholder: "password",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.password]
              ]),
              __vite_ssr_import_5__.createVNode("input", {
                type: "text",
                name: "cpassword",
                placeholder: "confirm password",
                class: "input input-sm w-full mb-5"
              }),
              __vite_ssr_import_5__.createVNode("button", {
                type: "button",
                class: "btn",
                onClick: $setup.createUser
              }, "Save")
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="overflow-x-auto w-full"><table class="table table-compact w-full"><thead><tr><th>ຊື່ ແລະ ນາມສະກຸນ</th><th>ສາຂາ</th><th>ເບີໂທ</th><th>ສັງກັດຢູ່ພະແນກ</th><th>ສະຖານະ</th></tr></thead><tbody><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.listUsers.data, (ui) => {
    _push(`<tr><th>${
      __vite_ssr_import_6__.ssrInterpolate(ui.fullname)
    }</th><td>001</td><td>${
      __vite_ssr_import_6__.ssrInterpolate(ui.mobile)
    }</td><td></td><td></td></tr>`)
  })
  _push(`<!--]--></tbody></table></div></div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/users/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/users/index.vue"]])
const meta = {
  layout: "auth",
  title: "ຈັດການຜູ້ໃຊ້ລະບົບ",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/modal/sm.vue
// Parents: 
// - /pages/users/index.vue?macro=true ($id_2240d037)
// - /pages/users/index.vue ($id_34524033)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bf07e772 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent)
  _push(`<input type="checkbox" id="my-modal" class="modal-toggle"><div class="modal"><div class="modal-box"><h3 class="font-bold text-lg">`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent)
  _push(`</h3><div>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><div class="modal-action"><label for="my-modal" class="btn">Yay!</label></div></div></div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/modal/sm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/components/modal/sm.vue"]]);
}


// --------------------
// Request: /pages/cdquestion/index.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8b8710c4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/headlessui.esm.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const selectedTab = __vite_ssr_import_0__.ref(0);
/*#__PURE__*/ false && __vite_ssr_import_1__.definePageMeta({
  layout: "auth",
});

const { data: custType } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("custType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/customer_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const { data: loanType } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("loanType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/loan_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const { data: collateralType } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("collateralType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/collateral_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

function changeTab(index) {
  selectedTab.value = index;
}

const __returned__ = { selectedTab, custType, loanType, collateralType, changeTab, TabGroup: __vite_ssr_import_4__.TabGroup, TabList: __vite_ssr_import_4__.TabList, Tab: __vite_ssr_import_4__.Tab, TabPanels: __vite_ssr_import_4__.TabPanels, TabPanel: __vite_ssr_import_4__.TabPanel }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "mt-4" }, _attrs))}>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabGroup"], null, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabList"], { class: "tabs" }, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="${
                      __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ])
                    }"${
                      _scopeId
                    }> ປະເພດລູກຄ້າ </div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                      }, " ປະເພດລູກຄ້າ ", 2 /* CLASS */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="${
                      __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ])
                    }"${
                      _scopeId
                    }> ປະເພດເງິນກູ້ </div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                      }, " ປະເພດເງິນກູ້ ", 2 /* CLASS */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="${
                      __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ])
                    }"${
                      _scopeId
                    }> ປະເພດຫຼັກຊັບຄ້ຳປະກັນ </div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                      }, " ປະເພດຫຼັກຊັບຄ້ຳປະກັນ ", 2 /* CLASS */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                    }, " ປະເພດລູກຄ້າ ", 2 /* CLASS */)
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                    }, " ປະເພດເງິນກູ້ ", 2 /* CLASS */)
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                    }, " ປະເພດຫຼັກຊັບຄ້ຳປະກັນ ", 2 /* CLASS */)
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanels"], null, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto w-full"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຫົວຂໍ້</th><th${
                      _scopeId
                    }>ຄຳອະທິບາຍ</th><th${
                      _scopeId
                    }></th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_6__.ssrRenderList($setup.custType.data, (ct) => {
                      _push(`<tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.name)
                      }</td><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.description)
                      }</td><td${
                        _scopeId
                      }></td></tr>`)
                    })
                    _push(`<!--]--></tbody></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                              __vite_ssr_import_5__.createVNode("th")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.custType.data, (ct) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto w-full"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຫົວຂໍ້</th><th${
                      _scopeId
                    }>ຄຳອະທິບາຍ</th><th${
                      _scopeId
                    }></th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_6__.ssrRenderList($setup.loanType.data, (ct) => {
                      _push(`<tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.name)
                      }</td><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.description)
                      }</td><td${
                        _scopeId
                      }></td></tr>`)
                    })
                    _push(`<!--]--></tbody></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                              __vite_ssr_import_5__.createVNode("th")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.loanType.data, (ct) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto w-full"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຫົວຂໍ້</th><th${
                      _scopeId
                    }>ຄຳອະທິບາຍ</th><th${
                      _scopeId
                    }></th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_6__.ssrRenderList($setup.collateralType.data, (ct) => {
                      _push(`<tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.name)
                      }</td><td${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ct.description)
                      }</td><td${
                        _scopeId
                      }></td></tr>`)
                    })
                    _push(`<!--]--></tbody></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                              __vite_ssr_import_5__.createVNode("th")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.collateralType.data, (ct) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                            __vite_ssr_import_5__.createVNode("th")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.custType.data, (ct) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                            __vite_ssr_import_5__.createVNode("th")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.loanType.data, (ct) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                            __vite_ssr_import_5__.createVNode("th")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.collateralType.data, (ct) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_5__.createVNode($setup["TabList"], { class: "tabs" }, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                  __vite_ssr_import_5__.createVNode("div", {
                    class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                  }, " ປະເພດລູກຄ້າ ", 2 /* CLASS */)
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                  __vite_ssr_import_5__.createVNode("div", {
                    class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                  }, " ປະເພດເງິນກູ້ ", 2 /* CLASS */)
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["Tab"], null, {
                default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                  __vite_ssr_import_5__.createVNode("div", {
                    class: [
              selected
                ? 'tab tab-md tab-lifted tab-active'
                : 'tab tab-md tab-lifted',
            ]
                  }, " ປະເພດຫຼັກຊັບຄ້ຳປະກັນ ", 2 /* CLASS */)
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_5__.createVNode($setup["TabPanels"], null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                    __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_5__.createVNode("thead", null, [
                        __vite_ssr_import_5__.createVNode("tr", null, [
                          __vite_ssr_import_5__.createVNode("th"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                          __vite_ssr_import_5__.createVNode("th")
                        ])
                      ]),
                      __vite_ssr_import_5__.createVNode("tbody", null, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.custType.data, (ct) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td")
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                    __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_5__.createVNode("thead", null, [
                        __vite_ssr_import_5__.createVNode("tr", null, [
                          __vite_ssr_import_5__.createVNode("th"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                          __vite_ssr_import_5__.createVNode("th")
                        ])
                      ]),
                      __vite_ssr_import_5__.createVNode("tbody", null, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.loanType.data, (ct) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td")
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_5__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_5__.withCtx(() => [
                  __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto w-full" }, [
                    __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_5__.createVNode("thead", null, [
                        __vite_ssr_import_5__.createVNode("tr", null, [
                          __vite_ssr_import_5__.createVNode("th"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                          __vite_ssr_import_5__.createVNode("th", null, "ຄຳອະທິບາຍ"),
                          __vite_ssr_import_5__.createVNode("th")
                        ])
                      ]),
                      __vite_ssr_import_5__.createVNode("tbody", null, [
                        (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.collateralType.data, (ct) => {
                          return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: ct }, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.name), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(ct.description), 1 /* TEXT */),
                            __vite_ssr_import_5__.createVNode("td")
                          ]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/cdquestion/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/cdquestion/index.vue"]]);
}


// --------------------
// Request: /pages/customer/[id].vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /components/profile/customer.vue ($id_cc4e0c4e)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_60c52b89 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/profile/customer.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/headlessui.esm.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const route = __vite_ssr_import_1__.useRoute();
/*#__PURE__*/ false && __vite_ssr_import_2__.definePageMeta({
  layout: "auth",
});
const { data: customer } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("customer", () =>
  $fetch(`http://10.0.34.37:3333/api/v1/crd/customer/${route.params.id}`)
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const { data: colApproach } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("colApproach", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/gradparams")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const __returned__ = { route, customer, colApproach, TabGroup: __vite_ssr_import_4__.TabGroup, TabList: __vite_ssr_import_4__.TabList, Tab: __vite_ssr_import_4__.Tab, TabPanels: __vite_ssr_import_4__.TabPanels, TabPanel: __vite_ssr_import_4__.TabPanel }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProfileCustomer = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "w-full mt-5" }, _attrs))}><div class="flex"><div class="flex-auto">`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ProfileCustomer, {
    data: $setup.customer.data
  }, null, _parent))
  _push(`</div><div class="flex-auto w-1/4"><div class="overflow-x-auto"><table class="table w-full"><tbody><tr><th>ສາຂາ:</th><td></td></tr><tr><th>ຈຳນວນເງີນຂໍກູ້:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.finance)
  }</td></tr><tr><th>ສະກຸນເງີນ:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.ccy)
  }</td></tr><tr><th>ຈັດເກດຄວາມສ່ຽງລູກຄ້າ:</th><td></td></tr><tr><th>ຄຳເຫັນການອະນຸມັດ/ປະຕິເສດ:</th><td></td></tr><tr><th>ອັດຕາດອກເບ້ຍຕໍ່ປີ:</th><td></td></tr><tr><th>ໄລຍະເວລາກູ້:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.period)
  } ${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.period_type)
  }</td></tr><tr><th>ເປົ້າໝາຍການນຳໃຊ້ເງິນກູ້:</th><td>${
    __vite_ssr_import_6__.ssrInterpolate($setup.customer.data.perpose)
  }</td></tr></tbody></table></div></div></div>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabGroup"], null, {
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabList"], { class: "tabs" }, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<!--[-->`)
              __vite_ssr_import_6__.ssrRenderList($setup.colApproach.data, (ap) => {
                _push(__vite_ssr_import_6__.ssrRenderComponent($setup["Tab"], { key: ap }, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(`<div class="${
                        __vite_ssr_import_6__.ssrRenderClass([
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ])
                      }"${
                        _scopeId
                      }>${
                        __vite_ssr_import_6__.ssrInterpolate(ap.title)
                      } <div class="badge"${
                        _scopeId
                      }>0%</div></div>`)
                    } else {
                      return [
                        __vite_ssr_import_5__.createVNode("div", {
                          class: [
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ]
                        }, [
                          __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(ap.title) + " ", 1 /* TEXT */),
                          __vite_ssr_import_5__.createVNode("div", { class: "badge" }, "0%")
                        ], 2 /* CLASS */)
                      ]
                    }
                  }),
                  _: 2 /* DYNAMIC */
                }, _parent, _scopeId))
              })
              _push(`<!--]-->`)
            } else {
              return [
                (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (ap) => {
                  return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["Tab"], { key: ap }, {
                    default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                      __vite_ssr_import_5__.createVNode("div", {
                        class: [
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ]
                      }, [
                        __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(ap.title) + " ", 1 /* TEXT */),
                        __vite_ssr_import_5__.createVNode("div", { class: "badge" }, "0%")
                      ], 2 /* CLASS */)
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanels"], null, {
          default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<!--[-->`)
              __vite_ssr_import_6__.ssrRenderList($setup.colApproach.data, (cp) => {
                _push(__vite_ssr_import_6__.ssrRenderComponent($setup["TabPanel"], { key: cp }, {
                  default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
                    if (_push) {
                      _push(`<div class="overflow-x-auto"${
                        _scopeId
                      }><table class="table table-compact w-full"${
                        _scopeId
                      }><thead${
                        _scopeId
                      }><tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><th${
                        _scopeId
                      }>ຫົວຂໍ້</th><th${
                        _scopeId
                      }>ຄະແນນ (%)</th></tr></thead><tbody${
                        _scopeId
                      }><!--[-->`)
                      __vite_ssr_import_6__.ssrRenderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                        _push(`<tr${
                          _scopeId
                        }><th${
                          _scopeId
                        }>${
                          __vite_ssr_import_6__.ssrInterpolate(i + 1)
                        }</th><td${
                          _scopeId
                        }>${
                          __vite_ssr_import_6__.ssrInterpolate(it.title)
                        }</td><td${
                          _scopeId
                        }>0</td></tr>`)
                      })
                      _push(`<!--]--></tbody><tfoot${
                        _scopeId
                      }><tr${
                        _scopeId
                      }><th colspan="2"${
                        _scopeId
                      }>ລວມ</th><th${
                        _scopeId
                      }>0</th></tr></tfoot></table></div>`)
                    } else {
                      return [
                        __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto" }, [
                          __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                            __vite_ssr_import_5__.createVNode("thead", null, [
                              __vite_ssr_import_5__.createVNode("tr", null, [
                                __vite_ssr_import_5__.createVNode("th"),
                                __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                                __vite_ssr_import_5__.createVNode("th", null, "ຄະແນນ (%)")
                              ])
                            ]),
                            __vite_ssr_import_5__.createVNode("tbody", null, [
                              (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                                return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: it }, [
                                  __vite_ssr_import_5__.createVNode("th", null, __vite_ssr_import_5__.toDisplayString(i + 1), 1 /* TEXT */),
                                  __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(it.title), 1 /* TEXT */),
                                  __vite_ssr_import_5__.createVNode("td", null, "0")
                                ]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            __vite_ssr_import_5__.createVNode("tfoot", null, [
                              __vite_ssr_import_5__.createVNode("tr", null, [
                                __vite_ssr_import_5__.createVNode("th", { colspan: "2" }, "ລວມ"),
                                __vite_ssr_import_5__.createVNode("th", null, "0")
                              ])
                            ])
                          ])
                        ])
                      ]
                    }
                  }),
                  _: 2 /* DYNAMIC */
                }, _parent, _scopeId))
              })
              _push(`<!--]-->`)
            } else {
              return [
                (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (cp) => {
                  return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["TabPanel"], { key: cp }, {
                    default: __vite_ssr_import_5__.withCtx(() => [
                      __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto" }, [
                        __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_5__.createVNode("thead", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                              __vite_ssr_import_5__.createVNode("th", null, "ຄະແນນ (%)")
                            ])
                          ]),
                          __vite_ssr_import_5__.createVNode("tbody", null, [
                            (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                              return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: it }, [
                                __vite_ssr_import_5__.createVNode("th", null, __vite_ssr_import_5__.toDisplayString(i + 1), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(it.title), 1 /* TEXT */),
                                __vite_ssr_import_5__.createVNode("td", null, "0")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          __vite_ssr_import_5__.createVNode("tfoot", null, [
                            __vite_ssr_import_5__.createVNode("tr", null, [
                              __vite_ssr_import_5__.createVNode("th", { colspan: "2" }, "ລວມ"),
                              __vite_ssr_import_5__.createVNode("th", null, "0")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                }), 128 /* KEYED_FRAGMENT */))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_5__.createVNode($setup["TabList"], { class: "tabs" }, {
            default: __vite_ssr_import_5__.withCtx(() => [
              (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (ap) => {
                return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["Tab"], { key: ap }, {
                  default: __vite_ssr_import_5__.withCtx(({ selected }) => [
                    __vite_ssr_import_5__.createVNode("div", {
                      class: [
              selected
                ? 'tab tab-md tab-lifted gap-2 tab-active'
                : 'tab tab-md tab-lifted gap-2',
            ]
                    }, [
                      __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString(ap.title) + " ", 1 /* TEXT */),
                      __vite_ssr_import_5__.createVNode("div", { class: "badge" }, "0%")
                    ], 2 /* CLASS */)
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_5__.createVNode($setup["TabPanels"], null, {
            default: __vite_ssr_import_5__.withCtx(() => [
              (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data, (cp) => {
                return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock($setup["TabPanel"], { key: cp }, {
                  default: __vite_ssr_import_5__.withCtx(() => [
                    __vite_ssr_import_5__.createVNode("div", { class: "overflow-x-auto" }, [
                      __vite_ssr_import_5__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_5__.createVNode("thead", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຫົວຂໍ້"),
                            __vite_ssr_import_5__.createVNode("th", null, "ຄະແນນ (%)")
                          ])
                        ]),
                        __vite_ssr_import_5__.createVNode("tbody", null, [
                          (__vite_ssr_import_5__.openBlock(true), __vite_ssr_import_5__.createBlock(__vite_ssr_import_5__.Fragment, null, __vite_ssr_import_5__.renderList($setup.colApproach.data[_ctx.i].approch, (it, i) => {
                            return (__vite_ssr_import_5__.openBlock(), __vite_ssr_import_5__.createBlock("tr", { key: it }, [
                              __vite_ssr_import_5__.createVNode("th", null, __vite_ssr_import_5__.toDisplayString(i + 1), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, __vite_ssr_import_5__.toDisplayString(it.title), 1 /* TEXT */),
                              __vite_ssr_import_5__.createVNode("td", null, "0")
                            ]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]),
                        __vite_ssr_import_5__.createVNode("tfoot", null, [
                          __vite_ssr_import_5__.createVNode("tr", null, [
                            __vite_ssr_import_5__.createVNode("th", { colspan: "2" }, "ລວມ"),
                            __vite_ssr_import_5__.createVNode("th", null, "0")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/customer/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/customer/[id].vue"]]);
}


// --------------------
// Request: /pages/customer/form.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/customer.ts ($id_a1f167fd)
// - /node_modules/@headlessui/vue/dist/headlessui.esm.js ($id_2c13895f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fccc8ef6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/customer.ts");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@headlessui/vue/dist/headlessui.esm.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "auth",
});
// var stepIndex = ref(0)
const tbHeader = __vite_ssr_import_6__.reactive([
  "ຊື່ ແລະ ນາມສະກຸນ",
  "email",
  "mobile",
  "ວິສາຫະກິດ",
  "ປະເພດ",
  "ວັນທີເດືອນປີ",
]);
const loanCust = __vite_ssr_import_6__.reactive({
  firstname: __vite_ssr_import_6__.ref(""),
  lastname: __vite_ssr_import_6__.ref(""),
  sex: __vite_ssr_import_6__.ref("M"),
  cust_type: __vite_ssr_import_6__.ref(""),
  loan_type: __vite_ssr_import_6__.ref(""),
  questions: __vite_ssr_import_6__.ref(""),
  finance: __vite_ssr_import_6__.ref(0),
  ccy: __vite_ssr_import_6__.ref("LAK"),
  cycle: __vite_ssr_import_6__.ref(0),
  cycle_type: __vite_ssr_import_6__.ref("Y"),
  exp: __vite_ssr_import_6__.ref("N"),
  perpose: __vite_ssr_import_6__.ref(""),
});

const XData = __vite_ssr_import_6__.reactive({ test: __vite_ssr_import_6__.ref("") });
var getLoan = __vite_ssr_import_6__.ref({ data: Object });
const selected = __vite_ssr_import_6__.ref("M");
const { pending, data: CutType } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("CustType", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/custype/loantype")
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const { data: Collateral } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("Collateral", () =>
  $fetch("http://10.0.34.37:3333/api/v1/crd/collateral_type")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

__vite_ssr_import_2__.watchEffect(() => {
  if (loanCust.cust_type) {
    getLoanType(loanCust.cust_type);
  }
  if (loanCust.cust_type && loanCust.loan_type) {
    getQuestion("asdf");
  }
  if (loanCust.exp.value) {
    getLoanType("sfad");
  }
});

const getLoanType = (str) => {
  const dt = CutType.value.data.filter((i) => i.id == str);
  getLoan.value = dt[0].loans;
};

const getQuestion = async (str) => {
  //customer_type?id=1&lid=1
  try {
    const resQuetions = await $fetch(
      `http://10.0.34.37:3333/api/v1/crd/questions/${loanCust.cust_type}/${loanCust.loan_type}/${loanCust.exp}`
    );
    loanCust.questions = resQuetions.data;
  } catch (e) {}
};

const stepIndex = __vite_ssr_import_6__.ref(0);
const CreateCustomer = () => {
  __vite_ssr_import_3__.createCustomer(loanCust).then((res) => {
    stepIndex.value++;
  });
};

const __returned__ = { tbHeader, loanCust, XData, getLoan, selected, pending, CutType, Collateral, getLoanType, getQuestion, stepIndex, CreateCustomer, TabGroup: __vite_ssr_import_5__.TabGroup, TabList: __vite_ssr_import_5__.TabList, Tab: __vite_ssr_import_5__.Tab, TabPanels: __vite_ssr_import_5__.TabPanels, TabPanel: __vite_ssr_import_5__.TabPanel, RadioGroup: __vite_ssr_import_5__.RadioGroup, RadioGroupLabel: __vite_ssr_import_5__.RadioGroupLabel, RadioGroupDescription: __vite_ssr_import_5__.RadioGroupDescription, RadioGroupOption: __vite_ssr_import_5__.RadioGroupOption, Combobox: __vite_ssr_import_5__.Combobox, ComboboxInput: __vite_ssr_import_5__.ComboboxInput, ComboboxButton: __vite_ssr_import_5__.ComboboxButton, ComboboxOptions: __vite_ssr_import_5__.ComboboxOptions, ComboboxOption: __vite_ssr_import_5__.ComboboxOption, TransitionRoot: __vite_ssr_import_5__.TransitionRoot, ref: __vite_ssr_import_6__.ref, reactive: __vite_ssr_import_6__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({ class: "w-8/12 mx-auto mt-5" }, _attrs))}>`)
  _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabGroup"], { selectedIndex: $setup.stepIndex }, {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabList"], { class: "steps" }, {
          default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], { class: "step step-primary" }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`ຂໍ້ມູນລູກຄ້າ`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("ຂໍ້ມູນລູກຄ້າ")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], {
                class: `step ${$setup.stepIndex > 0 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`ຫຼັກຊັບຄ້ຳປະກັນ ${__vite_ssr_import_8__.ssrInterpolate($setup.stepIndex)}`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("ຫຼັກຊັບຄ້ຳປະກັນ " + __vite_ssr_import_7__.toDisplayString($setup.stepIndex), 1 /* TEXT */)
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], {
                class: `step ${$setup.stepIndex > 1 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], {
                class: `step ${$setup.stepIndex > 2 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`Tab 3`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createTextVNode("Tab 3")
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_7__.createVNode($setup["Tab"], { class: "step step-primary" }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("ຂໍ້ມູນລູກຄ້າ")
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["Tab"], {
                  class: `step ${$setup.stepIndex > 0 ? 'step-primary' : ''}`
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("ຫຼັກຊັບຄ້ຳປະກັນ " + __vite_ssr_import_7__.toDisplayString($setup.stepIndex), 1 /* TEXT */)
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["class"]),
                __vite_ssr_import_7__.createVNode($setup["Tab"], {
                  class: `step ${$setup.stepIndex > 1 ? 'step-primary' : ''}`
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ")
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["class"]),
                __vite_ssr_import_7__.createVNode($setup["Tab"], {
                  class: `step ${$setup.stepIndex > 2 ? 'step-primary' : ''}`
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createTextVNode("Tab 3")
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["class"])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanels"], null, {
          default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="w-full p-16"${
                      _scopeId
                    }><form${
                      _scopeId
                    }><div class="grid gap-6 mb-6 lg:grid-cols-2"${
                      _scopeId
                    }><div${
                      _scopeId
                    }><label for="first_name" class="block mb-2 text-sm font-medium dark:text-gray-300"${
                      _scopeId
                    }>ຊື່ແທ້</label><input type="text" id="first_name"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.firstname)
                    } class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ນາມສະກຸນ</label><input type="text" id="last_name"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.lastname)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເພດ</label><div class="flex"${
                      _scopeId
                    }><div class="flex"${
                      _scopeId
                    }><input type="radio" name="sex"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.sex, "M"))) ? " checked" : ""
                    } class="radio" value="M" id="sexm"${
                      _scopeId
                    }><label class="pl-4" for="sexm"${
                      _scopeId
                    }>ຊາຍ</label></div><div class="flex pl-5"${
                      _scopeId
                    }><input type="radio" name="sex"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.sex, "F"))) ? " checked" : ""
                    } class="radio" id="sexf" value="F"${
                      _scopeId
                    }><label class="pl-4" for="sexf"${
                      _scopeId
                    }>ຍິງ</label></div></div></div><div${
                      _scopeId
                    }><label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ຊື່ວິສາຫະກິດ</label><input type="text" id="company"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.company)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເບີໂທ</label><input type="tel" id="phone"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.mobile)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="020-XXXX-XXXX" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ອີເມວ໌</label><input type="email" id="email"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.email)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="stb@stbanklaos.com"${
                      _scopeId
                    }></div><div${
                      _scopeId
                    }><label for="financeAm" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ວົງເງິນສະເໜີກູ້</label><div class="relative"${
                      _scopeId
                    }><input type="number" id="financeAm"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.finance)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }><select class="absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"${
                      _scopeId
                    }><option value="LAK"${
                      _scopeId
                    }>LAK</option></select></div></div><div${
                      _scopeId
                    }><label for="cycle" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ໄລຍະເວລາ </label><div class="relative"${
                      _scopeId
                    }><input type="number" id="cycle"${
                      __vite_ssr_import_8__.ssrRenderAttr("value", $setup.loanCust.cycle)
                    } class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }><select class="absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"${
                      _scopeId
                    }><option value="Y"${
                      _scopeId
                    }>ປີ</option><option value="M"${
                      _scopeId
                    }>ເດືອນ</option><option value="D"${
                      _scopeId
                    }>ວັນ</option></select></div></div></div><div${
                      _scopeId
                    }><label for="perpose" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເປົ້າໝາຍສະເໜີກູ້</label><textarea id="perpose" class="textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${
                      _scopeId
                    }>${
                      __vite_ssr_import_8__.ssrInterpolate($setup.loanCust.perpose)
                    }</textarea></div><button type="button" class="btn mt-8"${
                      _scopeId
                    }> ບັນທຶກ ແລະ ຕໍ່ໄປ </button></form></div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full p-16" }, [
                        __vite_ssr_import_7__.createVNode("form", null, [
                          __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2" }, [
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "first_name",
                                class: "block mb-2 text-sm font-medium dark:text-gray-300"
                              }, "ຊື່ແທ້"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "text",
                                id: "first_name",
                                "onUpdate:modelValue": $event => (($setup.loanCust.firstname) = $event),
                                class: "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.firstname]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "last_name",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ນາມສະກຸນ"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "text",
                                id: "last_name",
                                "onUpdate:modelValue": $event => (($setup.loanCust.lastname) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.lastname]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "ເພດ"),
                              __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                    type: "radio",
                                    name: "sex",
                                    "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                    class: "radio",
                                    value: "M",
                                    id: "sexm"
                                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                    [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                  ]),
                                  __vite_ssr_import_7__.createVNode("label", {
                                    class: "pl-4",
                                    for: "sexm"
                                  }, "ຊາຍ")
                                ]),
                                __vite_ssr_import_7__.createVNode("div", { class: "flex pl-5" }, [
                                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                    type: "radio",
                                    name: "sex",
                                    "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                    class: "radio",
                                    id: "sexf",
                                    value: "F"
                                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                    [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                  ]),
                                  __vite_ssr_import_7__.createVNode("label", {
                                    class: "pl-4",
                                    for: "sexf"
                                  }, "ຍິງ")
                                ])
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "company",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ຊື່ວິສາຫະກິດ"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "text",
                                id: "company",
                                "onUpdate:modelValue": $event => (($setup.loanCust.company) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.company]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "phone",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ເບີໂທ"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "tel",
                                id: "phone",
                                "onUpdate:modelValue": $event => (($setup.loanCust.mobile) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                placeholder: "020-XXXX-XXXX",
                                pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.mobile]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "email",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ອີເມວ໌"),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "email",
                                id: "email",
                                "onUpdate:modelValue": $event => (($setup.loanCust.email) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                placeholder: "stb@stbanklaos.com"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.email]
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "financeAm",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ວົງເງິນສະເໜີກູ້"),
                              __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "number",
                                  id: "financeAm",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.finance) = $event),
                                  class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                  required: ""
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelText, $setup.loanCust.finance]
                                ]),
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                  "onUpdate:modelValue": $event => (($setup.loanCust.ccy) = $event),
                                  class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"
                                }, [
                                  __vite_ssr_import_7__.createVNode("option", { value: "LAK" }, "LAK")
                                ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.ccy]
                                ])
                              ])
                            ]),
                            __vite_ssr_import_7__.createVNode("div", null, [
                              __vite_ssr_import_7__.createVNode("label", {
                                for: "cycle",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              }, "ໄລຍະເວລາ "),
                              __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "number",
                                  id: "cycle",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.cycle) = $event),
                                  class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                  required: ""
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelText, $setup.loanCust.cycle]
                                ]),
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                  "onUpdate:modelValue": $event => (($setup.loanCust.cycle_type) = $event),
                                  class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"
                                }, [
                                  __vite_ssr_import_7__.createVNode("option", { value: "Y" }, "ປີ"),
                                  __vite_ssr_import_7__.createVNode("option", { value: "M" }, "ເດືອນ"),
                                  __vite_ssr_import_7__.createVNode("option", { value: "D" }, "ວັນ")
                                ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cycle_type]
                                ])
                              ])
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "perpose",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ເປົ້າໝາຍສະເໜີກູ້"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                              id: "perpose",
                              "onUpdate:modelValue": $event => (($setup.loanCust.perpose) = $event),
                              class: "textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.perpose]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("button", {
                            type: "button",
                            class: "btn mt-8",
                            onClick: $setup.CreateCustomer
                          }, " ບັນທຶກ ແລະ ຕໍ່ໄປ ")
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="grid gap-6 mb-6 lg:grid-cols-2 p-16"${
                      _scopeId
                    }><div class="w-full"${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ປະເພດຫຼັກຊັບຄ້ຳປະກັນ</label><select class="select select-bordered w-full"${
                      _scopeId
                    }><option disabled selected${
                      _scopeId
                    }>ເລືອກປະເພດລູກຄ້າ</option><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.Collateral.data, (ci) => {
                      _push(`<option${
                        __vite_ssr_import_8__.ssrRenderAttr("value", ci.id)
                      }${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(ci.name)
                      }</option>`)
                    })
                    _push(`<!--]--></select></div></div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2 p-16" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ປະເພດຫຼັກຊັບຄ້ຳປະກັນ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                            class: "select select-bordered w-full",
                            "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                          }, [
                            __vite_ssr_import_7__.createVNode("option", {
                              disabled: "",
                              selected: ""
                            }, "ເລືອກປະເພດລູກຄ້າ"),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.Collateral.data, (ci) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                key: ci,
                                value: ci.id
                              }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="grid gap-6 lg:grid-cols-2 px-5 py-5"${
                      _scopeId
                    }><div class="w-full"${
                      _scopeId
                    }><div${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ປະເພດລູກຄ້າ</label><select class="select select-bordered w-full"${
                      _scopeId
                    }><option disabled selected${
                      _scopeId
                    }>ເລືອກປະເພດລູກຄ້າ</option><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.CutType.data, (ci) => {
                      _push(`<option${
                        __vite_ssr_import_8__.ssrRenderAttr("value", ci.id)
                      }${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(ci.name)
                      }</option>`)
                    })
                    _push(`<!--]--></select></div></div><div class="w-full"${
                      _scopeId
                    }><div${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ປະເພດສິນເຊື່ອ</label><select class="select select-bordered w-full"${
                      _scopeId
                    }><option disabled selected${
                      _scopeId
                    }>ເລືອກປະເພດສິນເຊື່ອ</option><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.getLoan, (ci) => {
                      _push(`<option${
                        __vite_ssr_import_8__.ssrRenderAttr("value", ci.id)
                      }${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(ci.name)
                      }</option>`)
                    })
                    _push(`<!--]--></select></div></div></div><div class="w-full px-5 mb-8"${
                      _scopeId
                    }><label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"${
                      _scopeId
                    }>ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ</label><div class="flex"${
                      _scopeId
                    }><div class="flex"${
                      _scopeId
                    }><input type="radio" id="expY"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.exp, "Y"))) ? " checked" : ""
                    } value="Y" name="exp_yn" class="radio"${
                      _scopeId
                    }><label class="pl-4" for="expY"${
                      _scopeId
                    }>ເຄີຍກູ້ມາກ່ອນ</label></div><div class="flex ml-10"${
                      _scopeId
                    }><input type="radio" id="expN"${
                      (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual($setup.loanCust.exp, "N"))) ? " checked" : ""
                    } value="N" name="exp_yn" class="radio"${
                      _scopeId
                    }><label class="pl-4" for="expN"${
                      _scopeId
                    }>ບໍ່ເຄີຍກູ້ມາກ່ອນ</label></div></div></div><div class="w-full px-5"${
                      _scopeId
                    }>`)
                    _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabGroup"], null, {
                      default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                        if (_push) {
                          _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabList"], { class: "tabs" }, {
                            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                              if (_push) {
                                _push(`<!--[-->`)
                                __vite_ssr_import_8__.ssrRenderList($setup.loanCust.questions, (qi) => {
                                  _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], { key: qi }, {
                                    default: __vite_ssr_import_7__.withCtx(({ selected }, _push, _parent, _scopeId) => {
                                      if (_push) {
                                        _push(`<div class="${
                                          __vite_ssr_import_8__.ssrRenderClass([
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ])
                                        }"${
                                          _scopeId
                                        }>${
                                          __vite_ssr_import_8__.ssrInterpolate(qi.title)
                                        } <div class="badge"${
                                          _scopeId
                                        }>0%</div></div>`)
                                      } else {
                                        return [
                                          __vite_ssr_import_7__.createVNode("div", {
                                            class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                          }, [
                                            __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                            __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                          ], 2 /* CLASS */)
                                        ]
                                      }
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, _parent, _scopeId))
                                })
                                _push(`<!--]-->`)
                              } else {
                                return [
                                  (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                    return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                      default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                        __vite_ssr_import_7__.createVNode("div", {
                                          class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                        }, [
                                          __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                          __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                        ], 2 /* CLASS */)
                                      ]),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */))
                                  }), 128 /* KEYED_FRAGMENT */))
                                ]
                              }
                            }),
                            _: 1 /* STABLE */
                          }, _parent, _scopeId))
                          _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanels"], { class: "mt-6" }, {
                            default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                              if (_push) {
                                _push(`<!--[-->`)
                                __vite_ssr_import_8__.ssrRenderList($setup.loanCust.questions, (cp) => {
                                  _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], { key: cp }, {
                                    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                                      if (_push) {
                                        _push(`<ol type="number"${_scopeId}><!--[-->`)
                                        __vite_ssr_import_8__.ssrRenderList(cp.qeustions, (it) => {
                                          _push(`<li${
                                            _scopeId
                                          }><h1${
                                            _scopeId
                                          }>${
                                            __vite_ssr_import_8__.ssrInterpolate(it.title)
                                          }</h1>`)
                                          if (it.input_type == 'radio') {
                                            _push(`<!--[-->`)
                                            __vite_ssr_import_8__.ssrRenderList(it.answers, (asi) => {
                                              _push(`<div class="form-control"${
                                                _scopeId
                                              }><label class="label cursor-pointer"${
                                                _scopeId
                                              }><input type="radio"${
                                                (__vite_ssr_import_8__.ssrIncludeBooleanAttr(__vite_ssr_import_8__.ssrLooseEqual(it.weight, asi.weight))) ? " checked" : ""
                                              }${
                                                __vite_ssr_import_8__.ssrRenderAttr("value", asi.weight)
                                              } class="radio checked:bg-red-500"${
                                                _scopeId
                                              }><span class="label-text"${
                                                _scopeId
                                              }>${
                                                __vite_ssr_import_8__.ssrInterpolate(asi.title)
                                              }</span></label></div>`)
                                            })
                                            _push(`<!--]-->`)
                                          } else {
                                            _push(`<!---->`)
                                          }
                                          _push(`</li>`)
                                        })
                                        _push(`<!--]--></ol>`)
                                      } else {
                                        return [
                                          __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                                __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                                (it.input_type == 'radio')
                                                  ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                      return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                        class: "form-control",
                                                        key: asi
                                                      }, [
                                                        __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                            type: "radio",
                                                            "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                            value: asi.weight,
                                                            class: "radio checked:bg-red-500"
                                                          }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                            [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                          ]),
                                                          __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                        ])
                                                      ]))
                                                    }), 128 /* KEYED_FRAGMENT */))
                                                  : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                              ]))
                                            }), 128 /* KEYED_FRAGMENT */))
                                          ])
                                        ]
                                      }
                                    }),
                                    _: 2 /* DYNAMIC */
                                  }, _parent, _scopeId))
                                })
                                _push(`<!--]-->`)
                              } else {
                                return [
                                  (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                    return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                      default: __vite_ssr_import_7__.withCtx(() => [
                                        __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                              __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                              (it.input_type == 'radio')
                                                ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                    return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                      class: "form-control",
                                                      key: asi
                                                    }, [
                                                      __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                          type: "radio",
                                                          "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                          value: asi.weight,
                                                          class: "radio checked:bg-red-500"
                                                        }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                          [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                        ]),
                                                        __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                      ])
                                                    ]))
                                                  }), 128 /* KEYED_FRAGMENT */))
                                                : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                            ]))
                                          }), 128 /* KEYED_FRAGMENT */))
                                        ])
                                      ]),
                                      _: 2 /* DYNAMIC */
                                    }, 1024 /* DYNAMIC_SLOTS */))
                                  }), 128 /* KEYED_FRAGMENT */))
                                ]
                              }
                            }),
                            _: 1 /* STABLE */
                          }, _parent, _scopeId))
                        } else {
                          return [
                            __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                    default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                      __vite_ssr_import_7__.createVNode("div", {
                                        class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                      }, [
                                        __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                      ], 2 /* CLASS */)
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            }),
                            __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                    default: __vite_ssr_import_7__.withCtx(() => [
                                      __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                            __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                            (it.input_type == 'radio')
                                              ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                    class: "form-control",
                                                    key: asi
                                                  }, [
                                                    __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                      __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                        type: "radio",
                                                        "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                        value: asi.weight,
                                                        class: "radio checked:bg-red-500"
                                                      }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                        [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                      ]),
                                                      __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                    ])
                                                  ]))
                                                }), 128 /* KEYED_FRAGMENT */))
                                              : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                          ]))
                                        }), 128 /* KEYED_FRAGMENT */))
                                      ])
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            })
                          ]
                        }
                      }),
                      _: 1 /* STABLE */
                    }, _parent, _scopeId))
                    _push(`</div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 lg:grid-cols-2 px-5 py-5" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "last_name",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ປະເພດລູກຄ້າ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              class: "select select-bordered w-full",
                              "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                            }, [
                              __vite_ssr_import_7__.createVNode("option", {
                                disabled: "",
                                selected: ""
                              }, "ເລືອກປະເພດລູກຄ້າ"),
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.CutType.data, (ci) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                  key: ci,
                                  value: ci.id
                                }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "last_name",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ປະເພດສິນເຊື່ອ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              class: "select select-bordered w-full",
                              "onUpdate:modelValue": $event => (($setup.loanCust.loan_type) = $event)
                            }, [
                              __vite_ssr_import_7__.createVNode("option", {
                                disabled: "",
                                selected: ""
                              }, "ເລືອກປະເພດສິນເຊື່ອ"),
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.getLoan, (ci) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                  key: ci,
                                  value: ci.id
                                }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.loan_type]
                            ])
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5 mb-8" }, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ"),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                          __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "radio",
                              id: "expY",
                              "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                              value: "Y",
                              name: "exp_yn",
                              class: "radio"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                            ]),
                            __vite_ssr_import_7__.createVNode("label", {
                              class: "pl-4",
                              for: "expY"
                            }, "ເຄີຍກູ້ມາກ່ອນ")
                          ]),
                          __vite_ssr_import_7__.createVNode("div", { class: "flex ml-10" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "radio",
                              id: "expN",
                              "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                              value: "N",
                              name: "exp_yn",
                              class: "radio"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                            ]),
                            __vite_ssr_import_7__.createVNode("label", {
                              class: "pl-4",
                              for: "expN"
                            }, "ບໍ່ເຄີຍກູ້ມາກ່ອນ")
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5" }, [
                        __vite_ssr_import_7__.createVNode($setup["TabGroup"], null, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                    default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                      __vite_ssr_import_7__.createVNode("div", {
                                        class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                      }, [
                                        __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                      ], 2 /* CLASS */)
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            }),
                            __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                              default: __vite_ssr_import_7__.withCtx(() => [
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                    default: __vite_ssr_import_7__.withCtx(() => [
                                      __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                            __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                            (it.input_type == 'radio')
                                              ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                    class: "form-control",
                                                    key: asi
                                                  }, [
                                                    __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                      __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                        type: "radio",
                                                        "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                        value: asi.weight,
                                                        class: "radio checked:bg-red-500"
                                                      }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                        [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                      ]),
                                                      __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                    ])
                                                  ]))
                                                }), 128 /* KEYED_FRAGMENT */))
                                              : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                          ]))
                                        }), 128 /* KEYED_FRAGMENT */))
                                      ])
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1024 /* DYNAMIC_SLOTS */))
                                }), 128 /* KEYED_FRAGMENT */))
                              ]),
                              _: 1 /* STABLE */
                            })
                          ]),
                          _: 1 /* STABLE */
                        })
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(`<div class="overflow-x-auto"${
                      _scopeId
                    }><table class="table table-compact w-full"${
                      _scopeId
                    }><thead${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th${
                      _scopeId
                    }></th><th${
                      _scopeId
                    }>ຄຳຖາມ</th><th class="text-right"${
                      _scopeId
                    }>ຄະແນນ</th></tr></thead><tbody${
                      _scopeId
                    }><!--[-->`)
                    __vite_ssr_import_8__.ssrRenderList($setup.loanCust.questions, (cp) => {
                      _push(`<!--[--><tr${
                        _scopeId
                      }><th${
                        _scopeId
                      }></th><th colspan="2"${
                        _scopeId
                      }>${
                        __vite_ssr_import_8__.ssrInterpolate(cp.title)
                      }</th></tr><!--[-->`)
                      __vite_ssr_import_8__.ssrRenderList(cp.qeustions, (qi, xi) => {
                        _push(`<tr${
                          _scopeId
                        }><th${
                          _scopeId
                        }>${
                          __vite_ssr_import_8__.ssrInterpolate(xi+1)
                        }</th><td${
                          _scopeId
                        }>${
                          __vite_ssr_import_8__.ssrInterpolate(qi.title)
                        }</td><td class="text-right"${
                          _scopeId
                        }>0 %</td></tr>`)
                      })
                      _push(`<!--]--><!--]-->`)
                    })
                    _push(`<!--]--></tbody><tfoot${
                      _scopeId
                    }><tr${
                      _scopeId
                    }><th colspan="2" class="text-right"${
                      _scopeId
                    }>ລວມ</th><th class="text-right"${
                      _scopeId
                    }>0 %</th></tr></tfoot></table></div>`)
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode("div", { class: "overflow-x-auto" }, [
                        __vite_ssr_import_7__.createVNode("table", { class: "table table-compact w-full" }, [
                          __vite_ssr_import_7__.createVNode("thead", null, [
                            __vite_ssr_import_7__.createVNode("tr", null, [
                              __vite_ssr_import_7__.createVNode("th"),
                              __vite_ssr_import_7__.createVNode("th", null, "ຄຳຖາມ"),
                              __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "ຄະແນນ")
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("tbody", null, [
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, [
                                __vite_ssr_import_7__.createVNode("tr", null, [
                                  __vite_ssr_import_7__.createVNode("th"),
                                  __vite_ssr_import_7__.createVNode("th", { colspan: "2" }, __vite_ssr_import_7__.toDisplayString(cp.title), 1 /* TEXT */)
                                ]),
                                (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (qi, xi) => {
                                  return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("tr", { key: qi }, [
                                    __vite_ssr_import_7__.createVNode("th", null, __vite_ssr_import_7__.toDisplayString(xi+1), 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("td", null, __vite_ssr_import_7__.toDisplayString(qi.title), 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("td", { class: "text-right" }, "0 %")
                                  ]))
                                }), 128 /* KEYED_FRAGMENT */))
                              ], 64 /* STABLE_FRAGMENT */))
                            }), 256 /* UNKEYED_FRAGMENT */))
                          ]),
                          __vite_ssr_import_7__.createVNode("tfoot", null, [
                            __vite_ssr_import_7__.createVNode("tr", null, [
                              __vite_ssr_import_7__.createVNode("th", {
                                colspan: "2",
                                class: "text-right"
                              }, "ລວມ"),
                              __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "0 %")
                            ])
                          ])
                        ])
                      ])
                    ]
                  }
                }),
                _: 1 /* STABLE */
              }, _parent, _scopeId))
            } else {
              return [
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full p-16" }, [
                      __vite_ssr_import_7__.createVNode("form", null, [
                        __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2" }, [
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "first_name",
                              class: "block mb-2 text-sm font-medium dark:text-gray-300"
                            }, "ຊື່ແທ້"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "text",
                              id: "first_name",
                              "onUpdate:modelValue": $event => (($setup.loanCust.firstname) = $event),
                              class: "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.firstname]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "last_name",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ນາມສະກຸນ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "text",
                              id: "last_name",
                              "onUpdate:modelValue": $event => (($setup.loanCust.lastname) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.lastname]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "ເພດ"),
                            __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                              __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "radio",
                                  name: "sex",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                  class: "radio",
                                  value: "M",
                                  id: "sexm"
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                ]),
                                __vite_ssr_import_7__.createVNode("label", {
                                  class: "pl-4",
                                  for: "sexm"
                                }, "ຊາຍ")
                              ]),
                              __vite_ssr_import_7__.createVNode("div", { class: "flex pl-5" }, [
                                __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                  type: "radio",
                                  name: "sex",
                                  "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                  class: "radio",
                                  id: "sexf",
                                  value: "F"
                                }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                  [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                                ]),
                                __vite_ssr_import_7__.createVNode("label", {
                                  class: "pl-4",
                                  for: "sexf"
                                }, "ຍິງ")
                              ])
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "company",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ຊື່ວິສາຫະກິດ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "text",
                              id: "company",
                              "onUpdate:modelValue": $event => (($setup.loanCust.company) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.company]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "phone",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ເບີໂທ"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "tel",
                              id: "phone",
                              "onUpdate:modelValue": $event => (($setup.loanCust.mobile) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              placeholder: "020-XXXX-XXXX",
                              pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.mobile]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "email",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ອີເມວ໌"),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "email",
                              id: "email",
                              "onUpdate:modelValue": $event => (($setup.loanCust.email) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              placeholder: "stb@stbanklaos.com"
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.email]
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "financeAm",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ວົງເງິນສະເໜີກູ້"),
                            __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "number",
                                id: "financeAm",
                                "onUpdate:modelValue": $event => (($setup.loanCust.finance) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.finance]
                              ]),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                "onUpdate:modelValue": $event => (($setup.loanCust.ccy) = $event),
                                class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"
                              }, [
                                __vite_ssr_import_7__.createVNode("option", { value: "LAK" }, "LAK")
                              ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.ccy]
                              ])
                            ])
                          ]),
                          __vite_ssr_import_7__.createVNode("div", null, [
                            __vite_ssr_import_7__.createVNode("label", {
                              for: "cycle",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            }, "ໄລຍະເວລາ "),
                            __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "number",
                                id: "cycle",
                                "onUpdate:modelValue": $event => (($setup.loanCust.cycle) = $event),
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                                required: ""
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelText, $setup.loanCust.cycle]
                              ]),
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                                "onUpdate:modelValue": $event => (($setup.loanCust.cycle_type) = $event),
                                class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"
                              }, [
                                __vite_ssr_import_7__.createVNode("option", { value: "Y" }, "ປີ"),
                                __vite_ssr_import_7__.createVNode("option", { value: "M" }, "ເດືອນ"),
                                __vite_ssr_import_7__.createVNode("option", { value: "D" }, "ວັນ")
                              ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cycle_type]
                              ])
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "perpose",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ເປົ້າໝາຍສະເໜີກູ້"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                            id: "perpose",
                            "onUpdate:modelValue": $event => (($setup.loanCust.perpose) = $event),
                            class: "textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.perpose]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("button", {
                          type: "button",
                          class: "btn mt-8",
                          onClick: $setup.CreateCustomer
                        }, " ບັນທຶກ ແລະ ຕໍ່ໄປ ")
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2 p-16" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ປະເພດຫຼັກຊັບຄ້ຳປະກັນ"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                          class: "select select-bordered w-full",
                          "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                        }, [
                          __vite_ssr_import_7__.createVNode("option", {
                            disabled: "",
                            selected: ""
                          }, "ເລືອກປະເພດລູກຄ້າ"),
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.Collateral.data, (ci) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                              key: ci,
                              value: ci.id
                            }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 lg:grid-cols-2 px-5 py-5" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ປະເພດລູກຄ້າ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                            class: "select select-bordered w-full",
                            "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                          }, [
                            __vite_ssr_import_7__.createVNode("option", {
                              disabled: "",
                              selected: ""
                            }, "ເລືອກປະເພດລູກຄ້າ"),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.CutType.data, (ci) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                key: ci,
                                value: ci.id
                              }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ປະເພດສິນເຊື່ອ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                            class: "select select-bordered w-full",
                            "onUpdate:modelValue": $event => (($setup.loanCust.loan_type) = $event)
                          }, [
                            __vite_ssr_import_7__.createVNode("option", {
                              disabled: "",
                              selected: ""
                            }, "ເລືອກປະເພດສິນເຊື່ອ"),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.getLoan, (ci) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                                key: ci,
                                value: ci.id
                              }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.loan_type]
                          ])
                        ])
                      ])
                    ]),
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5 mb-8" }, [
                      __vite_ssr_import_7__.createVNode("label", {
                        for: "last_name",
                        class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      }, "ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ"),
                      __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "radio",
                            id: "expY",
                            "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                            value: "Y",
                            name: "exp_yn",
                            class: "radio"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                          ]),
                          __vite_ssr_import_7__.createVNode("label", {
                            class: "pl-4",
                            for: "expY"
                          }, "ເຄີຍກູ້ມາກ່ອນ")
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex ml-10" }, [
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "radio",
                            id: "expN",
                            "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                            value: "N",
                            name: "exp_yn",
                            class: "radio"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                          ]),
                          __vite_ssr_import_7__.createVNode("label", {
                            class: "pl-4",
                            for: "expN"
                          }, "ບໍ່ເຄີຍກູ້ມາກ່ອນ")
                        ])
                      ])
                    ]),
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5" }, [
                      __vite_ssr_import_7__.createVNode($setup["TabGroup"], null, {
                        default: __vite_ssr_import_7__.withCtx(() => [
                          __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                            default: __vite_ssr_import_7__.withCtx(() => [
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                  default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                    __vite_ssr_import_7__.createVNode("div", {
                                      class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                    }, [
                                      __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                      __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                    ], 2 /* CLASS */)
                                  ]),
                                  _: 2 /* DYNAMIC */
                                }, 1024 /* DYNAMIC_SLOTS */))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            _: 1 /* STABLE */
                          }),
                          __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                            default: __vite_ssr_import_7__.withCtx(() => [
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                  default: __vite_ssr_import_7__.withCtx(() => [
                                    __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                      (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                        return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                          __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                          (it.input_type == 'radio')
                                            ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                  class: "form-control",
                                                  key: asi
                                                }, [
                                                  __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                    __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                      type: "radio",
                                                      "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                      value: asi.weight,
                                                      class: "radio checked:bg-red-500"
                                                    }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                      [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                    ]),
                                                    __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                  ])
                                                ]))
                                              }), 128 /* KEYED_FRAGMENT */))
                                            : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                        ]))
                                      }), 128 /* KEYED_FRAGMENT */))
                                    ])
                                  ]),
                                  _: 2 /* DYNAMIC */
                                }, 1024 /* DYNAMIC_SLOTS */))
                              }), 128 /* KEYED_FRAGMENT */))
                            ]),
                            _: 1 /* STABLE */
                          })
                        ]),
                        _: 1 /* STABLE */
                      })
                    ])
                  ]),
                  _: 1 /* STABLE */
                }),
                __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode("div", { class: "overflow-x-auto" }, [
                      __vite_ssr_import_7__.createVNode("table", { class: "table table-compact w-full" }, [
                        __vite_ssr_import_7__.createVNode("thead", null, [
                          __vite_ssr_import_7__.createVNode("tr", null, [
                            __vite_ssr_import_7__.createVNode("th"),
                            __vite_ssr_import_7__.createVNode("th", null, "ຄຳຖາມ"),
                            __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "ຄະແນນ")
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("tbody", null, [
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, [
                              __vite_ssr_import_7__.createVNode("tr", null, [
                                __vite_ssr_import_7__.createVNode("th"),
                                __vite_ssr_import_7__.createVNode("th", { colspan: "2" }, __vite_ssr_import_7__.toDisplayString(cp.title), 1 /* TEXT */)
                              ]),
                              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (qi, xi) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("tr", { key: qi }, [
                                  __vite_ssr_import_7__.createVNode("th", null, __vite_ssr_import_7__.toDisplayString(xi+1), 1 /* TEXT */),
                                  __vite_ssr_import_7__.createVNode("td", null, __vite_ssr_import_7__.toDisplayString(qi.title), 1 /* TEXT */),
                                  __vite_ssr_import_7__.createVNode("td", { class: "text-right" }, "0 %")
                                ]))
                              }), 128 /* KEYED_FRAGMENT */))
                            ], 64 /* STABLE_FRAGMENT */))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ]),
                        __vite_ssr_import_7__.createVNode("tfoot", null, [
                          __vite_ssr_import_7__.createVNode("tr", null, [
                            __vite_ssr_import_7__.createVNode("th", {
                              colspan: "2",
                              class: "text-right"
                            }, "ລວມ"),
                            __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "0 %")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 1 /* STABLE */
                })
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "steps" }, {
            default: __vite_ssr_import_7__.withCtx(() => [
              __vite_ssr_import_7__.createVNode($setup["Tab"], { class: "step step-primary" }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("ຂໍ້ມູນລູກຄ້າ")
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["Tab"], {
                class: `step ${$setup.stepIndex > 0 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("ຫຼັກຊັບຄ້ຳປະກັນ " + __vite_ssr_import_7__.toDisplayString($setup.stepIndex), 1 /* TEXT */)
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["class"]),
              __vite_ssr_import_7__.createVNode($setup["Tab"], {
                class: `step ${$setup.stepIndex > 1 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("ປະເພດລູກຄ້າ ແລະ ສິນເຊື່ອ")
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["class"]),
              __vite_ssr_import_7__.createVNode($setup["Tab"], {
                class: `step ${$setup.stepIndex > 2 ? 'step-primary' : ''}`
              }, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createTextVNode("Tab 3")
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["class"])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_7__.createVNode($setup["TabPanels"], null, {
            default: __vite_ssr_import_7__.withCtx(() => [
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "w-full p-16" }, [
                    __vite_ssr_import_7__.createVNode("form", null, [
                      __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2" }, [
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "first_name",
                            class: "block mb-2 text-sm font-medium dark:text-gray-300"
                          }, "ຊື່ແທ້"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "text",
                            id: "first_name",
                            "onUpdate:modelValue": $event => (($setup.loanCust.firstname) = $event),
                            class: "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.firstname]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "last_name",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ນາມສະກຸນ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "text",
                            id: "last_name",
                            "onUpdate:modelValue": $event => (($setup.loanCust.lastname) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.lastname]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "ເພດ"),
                          __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                            __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "radio",
                                name: "sex",
                                "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                class: "radio",
                                value: "M",
                                id: "sexm"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                              ]),
                              __vite_ssr_import_7__.createVNode("label", {
                                class: "pl-4",
                                for: "sexm"
                              }, "ຊາຍ")
                            ]),
                            __vite_ssr_import_7__.createVNode("div", { class: "flex pl-5" }, [
                              __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                type: "radio",
                                name: "sex",
                                "onUpdate:modelValue": $event => (($setup.loanCust.sex) = $event),
                                class: "radio",
                                id: "sexf",
                                value: "F"
                              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                                [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.sex]
                              ]),
                              __vite_ssr_import_7__.createVNode("label", {
                                class: "pl-4",
                                for: "sexf"
                              }, "ຍິງ")
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "company",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ຊື່ວິສາຫະກິດ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "text",
                            id: "company",
                            "onUpdate:modelValue": $event => (($setup.loanCust.company) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.company]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "phone",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ເບີໂທ"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "tel",
                            id: "phone",
                            "onUpdate:modelValue": $event => (($setup.loanCust.mobile) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            placeholder: "020-XXXX-XXXX",
                            pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
                            required: ""
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.mobile]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "email",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ອີເມວ໌"),
                          __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                            type: "email",
                            id: "email",
                            "onUpdate:modelValue": $event => (($setup.loanCust.email) = $event),
                            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                            placeholder: "stb@stbanklaos.com"
                          }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                            [__vite_ssr_import_7__.vModelText, $setup.loanCust.email]
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "financeAm",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ວົງເງິນສະເໜີກູ້"),
                          __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "number",
                              id: "financeAm",
                              "onUpdate:modelValue": $event => (($setup.loanCust.finance) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block text-right w-full pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.finance]
                            ]),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              "onUpdate:modelValue": $event => (($setup.loanCust.ccy) = $event),
                              class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1"
                            }, [
                              __vite_ssr_import_7__.createVNode("option", { value: "LAK" }, "LAK")
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.ccy]
                            ])
                          ])
                        ]),
                        __vite_ssr_import_7__.createVNode("div", null, [
                          __vite_ssr_import_7__.createVNode("label", {
                            for: "cycle",
                            class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          }, "ໄລຍະເວລາ "),
                          __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                              type: "number",
                              id: "cycle",
                              "onUpdate:modelValue": $event => (($setup.loanCust.cycle) = $event),
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full text-right pt-2.5 pb-2.5 pr-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                              required: ""
                            }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelText, $setup.loanCust.cycle]
                            ]),
                            __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                              "onUpdate:modelValue": $event => (($setup.loanCust.cycle_type) = $event),
                              class: "absolute right-0 top-0 mr-1 select select-ghost select-sm mt-1 text-center"
                            }, [
                              __vite_ssr_import_7__.createVNode("option", { value: "Y" }, "ປີ"),
                              __vite_ssr_import_7__.createVNode("option", { value: "M" }, "ເດືອນ"),
                              __vite_ssr_import_7__.createVNode("option", { value: "D" }, "ວັນ")
                            ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                              [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cycle_type]
                            ])
                          ])
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", null, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "perpose",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ເປົ້າໝາຍສະເໜີກູ້"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("textarea", {
                          id: "perpose",
                          "onUpdate:modelValue": $event => (($setup.loanCust.perpose) = $event),
                          class: "textarea textarea-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                          required: ""
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelText, $setup.loanCust.perpose]
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("button", {
                        type: "button",
                        class: "btn mt-8",
                        onClick: $setup.CreateCustomer
                      }, " ບັນທຶກ ແລະ ຕໍ່ໄປ ")
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 mb-6 lg:grid-cols-2 p-16" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                      __vite_ssr_import_7__.createVNode("label", {
                        for: "last_name",
                        class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      }, "ປະເພດຫຼັກຊັບຄ້ຳປະກັນ"),
                      __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                        class: "select select-bordered w-full",
                        "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                      }, [
                        __vite_ssr_import_7__.createVNode("option", {
                          disabled: "",
                          selected: ""
                        }, "ເລືອກປະເພດລູກຄ້າ"),
                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.Collateral.data, (ci) => {
                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                            key: ci,
                            value: ci.id
                          }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                        }), 128 /* KEYED_FRAGMENT */))
                      ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "grid gap-6 lg:grid-cols-2 px-5 py-5" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                      __vite_ssr_import_7__.createVNode("div", null, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ປະເພດລູກຄ້າ"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                          class: "select select-bordered w-full",
                          "onUpdate:modelValue": $event => (($setup.loanCust.cust_type) = $event)
                        }, [
                          __vite_ssr_import_7__.createVNode("option", {
                            disabled: "",
                            selected: ""
                          }, "ເລືອກປະເພດລູກຄ້າ"),
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.CutType.data, (ci) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                              key: ci,
                              value: ci.id
                            }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.cust_type]
                        ])
                      ])
                    ]),
                    __vite_ssr_import_7__.createVNode("div", { class: "w-full" }, [
                      __vite_ssr_import_7__.createVNode("div", null, [
                        __vite_ssr_import_7__.createVNode("label", {
                          for: "last_name",
                          class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        }, "ປະເພດສິນເຊື່ອ"),
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("select", {
                          class: "select select-bordered w-full",
                          "onUpdate:modelValue": $event => (($setup.loanCust.loan_type) = $event)
                        }, [
                          __vite_ssr_import_7__.createVNode("option", {
                            disabled: "",
                            selected: ""
                          }, "ເລືອກປະເພດສິນເຊື່ອ"),
                          (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.getLoan, (ci) => {
                            return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("option", {
                              key: ci,
                              value: ci.id
                            }, __vite_ssr_import_7__.toDisplayString(ci.name), 9 /* TEXT, PROPS */, ["value"]))
                          }), 128 /* KEYED_FRAGMENT */))
                        ], 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelSelect, $setup.loanCust.loan_type]
                        ])
                      ])
                    ])
                  ]),
                  __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5 mb-8" }, [
                    __vite_ssr_import_7__.createVNode("label", {
                      for: "last_name",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    }, "ເຄີຍກູ້ມາກ່ອນ ຫຼື ມີກູ້ໃນປະຈຸບັນ"),
                    __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "flex" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          type: "radio",
                          id: "expY",
                          "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                          value: "Y",
                          name: "exp_yn",
                          class: "radio"
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                        ]),
                        __vite_ssr_import_7__.createVNode("label", {
                          class: "pl-4",
                          for: "expY"
                        }, "ເຄີຍກູ້ມາກ່ອນ")
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "flex ml-10" }, [
                        __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                          type: "radio",
                          id: "expN",
                          "onUpdate:modelValue": $event => (($setup.loanCust.exp) = $event),
                          value: "N",
                          name: "exp_yn",
                          class: "radio"
                        }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                          [__vite_ssr_import_7__.vModelRadio, $setup.loanCust.exp]
                        ]),
                        __vite_ssr_import_7__.createVNode("label", {
                          class: "pl-4",
                          for: "expN"
                        }, "ບໍ່ເຄີຍກູ້ມາກ່ອນ")
                      ])
                    ])
                  ]),
                  __vite_ssr_import_7__.createVNode("div", { class: "w-full px-5" }, [
                    __vite_ssr_import_7__.createVNode($setup["TabGroup"], null, {
                      default: __vite_ssr_import_7__.withCtx(() => [
                        __vite_ssr_import_7__.createVNode($setup["TabList"], { class: "tabs" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (qi) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], { key: qi }, {
                                default: __vite_ssr_import_7__.withCtx(({ selected }) => [
                                  __vite_ssr_import_7__.createVNode("div", {
                                    class: [
                      selected
                        ? 'tab tab-md tab-lifted gap-2 tab-active'
                        : 'tab tab-md tab-lifted gap-2',
                    ]
                                  }, [
                                    __vite_ssr_import_7__.createTextVNode(__vite_ssr_import_7__.toDisplayString(qi.title) + " ", 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("div", { class: "badge" }, "0%")
                                  ], 2 /* CLASS */)
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 1 /* STABLE */
                        }),
                        __vite_ssr_import_7__.createVNode($setup["TabPanels"], { class: "mt-6" }, {
                          default: __vite_ssr_import_7__.withCtx(() => [
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["TabPanel"], { key: cp }, {
                                default: __vite_ssr_import_7__.withCtx(() => [
                                  __vite_ssr_import_7__.createVNode("ol", { type: "number" }, [
                                    (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (it) => {
                                      return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { key: it }, [
                                        __vite_ssr_import_7__.createVNode("h1", null, __vite_ssr_import_7__.toDisplayString(it.title), 1 /* TEXT */),
                                        (it.input_type == 'radio')
                                          ? (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 0 }, __vite_ssr_import_7__.renderList(it.answers, (asi) => {
                                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                                class: "form-control",
                                                key: asi
                                              }, [
                                                __vite_ssr_import_7__.createVNode("label", { class: "label cursor-pointer" }, [
                                                  __vite_ssr_import_7__.withDirectives(__vite_ssr_import_7__.createVNode("input", {
                                                    type: "radio",
                                                    "onUpdate:modelValue": $event => ((it.weight) = $event),
                                                    value: asi.weight,
                                                    class: "radio checked:bg-red-500"
                                                  }, null, 8 /* PROPS */, ["onUpdate:modelValue", "value"]), [
                                                    [__vite_ssr_import_7__.vModelRadio, it.weight]
                                                  ]),
                                                  __vite_ssr_import_7__.createVNode("span", { class: "label-text" }, __vite_ssr_import_7__.toDisplayString(asi.title), 1 /* TEXT */)
                                                ])
                                              ]))
                                            }), 128 /* KEYED_FRAGMENT */))
                                          : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                      ]))
                                    }), 128 /* KEYED_FRAGMENT */))
                                  ])
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1024 /* DYNAMIC_SLOTS */))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 1 /* STABLE */
                        })
                      ]),
                      _: 1 /* STABLE */
                    })
                  ])
                ]),
                _: 1 /* STABLE */
              }),
              __vite_ssr_import_7__.createVNode($setup["TabPanel"], null, {
                default: __vite_ssr_import_7__.withCtx(() => [
                  __vite_ssr_import_7__.createVNode("div", { class: "overflow-x-auto" }, [
                    __vite_ssr_import_7__.createVNode("table", { class: "table table-compact w-full" }, [
                      __vite_ssr_import_7__.createVNode("thead", null, [
                        __vite_ssr_import_7__.createVNode("tr", null, [
                          __vite_ssr_import_7__.createVNode("th"),
                          __vite_ssr_import_7__.createVNode("th", null, "ຄຳຖາມ"),
                          __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "ຄະແນນ")
                        ])
                      ]),
                      __vite_ssr_import_7__.createVNode("tbody", null, [
                        (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.loanCust.questions, (cp) => {
                          return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, [
                            __vite_ssr_import_7__.createVNode("tr", null, [
                              __vite_ssr_import_7__.createVNode("th"),
                              __vite_ssr_import_7__.createVNode("th", { colspan: "2" }, __vite_ssr_import_7__.toDisplayString(cp.title), 1 /* TEXT */)
                            ]),
                            (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList(cp.qeustions, (qi, xi) => {
                              return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("tr", { key: qi }, [
                                __vite_ssr_import_7__.createVNode("th", null, __vite_ssr_import_7__.toDisplayString(xi+1), 1 /* TEXT */),
                                __vite_ssr_import_7__.createVNode("td", null, __vite_ssr_import_7__.toDisplayString(qi.title), 1 /* TEXT */),
                                __vite_ssr_import_7__.createVNode("td", { class: "text-right" }, "0 %")
                              ]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ], 64 /* STABLE_FRAGMENT */))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ]),
                      __vite_ssr_import_7__.createVNode("tfoot", null, [
                        __vite_ssr_import_7__.createVNode("tr", null, [
                          __vite_ssr_import_7__.createVNode("th", {
                            colspan: "2",
                            class: "text-right"
                          }, "ລວມ"),
                          __vite_ssr_import_7__.createVNode("th", { class: "text-right" }, "0 %")
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/customer/form.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/customer/form.vue"]]);
}


// --------------------
// Request: /pages/customer/index.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /components/table/customer.vue ($id_587613ac)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_55a62451 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/table/customer.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

// import { validateRef } from "light-vue3-validation";
/*#__PURE__*/ false && __vite_ssr_import_2__.definePageMeta({
  layout: "auth",
});
const user = __vite_ssr_import_5__.reactive({
  username: __vite_ssr_import_5__.ref(""),
  fullname: __vite_ssr_import_5__.ref(""),
  password: __vite_ssr_import_5__.ref(""),
  cpassword: __vite_ssr_import_5__.ref(""),
  email: __vite_ssr_import_5__.ref(""),
  mobile: __vite_ssr_import_5__.ref(""),
});
const tbHeader = __vite_ssr_import_5__.reactive([
  "ຊື່ ແລະ ນາມສະກຸນ",
  "email",
  "mobile",
  "ວິສາຫະກິດ",
  "ປະເພດ",
  "ວັນທີເດືອນປີ",
  "ຈຸດປະສົງ",
]);
const { pending, data: customers } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_3__.useAsyncData("customers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/customer")
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const __returned__ = { user, tbHeader, pending, customers, ref: __vite_ssr_import_5__.ref, reactive: __vite_ssr_import_5__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default
  const _component_TableCustomer = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "w-full mt-5 px-5" }, _attrs))}><div class="flex justify-between my-3"><h4>ລູກຄ້າ</h4><label for="my-modal">+</label>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
    to: "/customer/form?t=create",
    class: "btn btn-square btn-sm"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`+`)
      } else {
        return [
          __vite_ssr_import_6__.createTextVNode("+")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TableCustomer, {
    footer: false,
    column: $setup.tbHeader,
    items: $setup.customers.data
  }, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/customer/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/customer/index.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "auth",
  middleware: ["auth"],
});

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>Homage</div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/index.vue"]]);
}


// --------------------
// Request: /pages/login/index.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /composables/locale.ts ($id_35d5db4b)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d006def6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/locale.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/composables/useAuth.ts");
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const route = __vite_ssr_import_0__.useRoute()
/*#__PURE__*/ false && __vite_ssr_import_1__.definePageMeta({
  title: "ເຂົ້າສູ່ລະບົບ",
});
const locales = __vite_ssr_import_2__.useLocales();
const authKey = __vite_ssr_import_0__.useCookie("autKey");
const signinForm = __vite_ssr_import_3__.ref({ username: "", password: "" });
let loading = __vite_ssr_import_3__.ref(false);
const signin = () => {
  loading = true;
  // $ApiFetch('/login',{method:'POST'})
  __vite_ssr_import_4__.signInUser(signinForm).then((res) => {
    authKey.value = res.token;
    navigator('/')
  });
};

const __returned__ = { route, locales, authKey, signinForm, loading, signin }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_5__.ssrRenderAttrs(_attrs)
  }><div class="min-h-screen flex flex-col items-center justify-center"><div class="flex flex-col light:bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"><div class="font-medium self-center text-xl sm:text-3xl text-gray-800 dark:text-white"> CRD </div><div class="mt-4 self-center text-xl sm:text-sm text-gray-800 dark:text-white"> Enter your credentials to access your account </div><div class="mt-10"><form><div class="flex flex-col mb-5"><label for="email" class="mb-1 text-xs tracking-wide dark:text-white">ຊື່ຜູ້ໃຊ້ລະບົບ:</label><div class="relative"><div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div><input id="username" type="text" name="username"${
    __vite_ssr_import_5__.ssrRenderAttr("value", $setup.signinForm.username)
  } class="text-sm placeholder-gray-500 pl-10 pr-4 input input-bordered w-full py-2 focus:outline-none focus:border-blue-400" placeholder="ປ້ອນ ອີເມວ໌ ຫຼື ເບີໂທ"></div></div><div class="flex flex-col mb-6"><label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white">ລະຫັດຜ່ານ:</label><div class="relative"><div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"><span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg></span></div><input id="password" type="password" name="password"${
    __vite_ssr_import_5__.ssrRenderAttr("value", $setup.signinForm.password)
  } class="text-sm placeholder-gray-500 pl-10 pr-4 input input-bordered w-full py-2 focus:outline-none focus:border-blue-400" placeholder="ປ້ອນລະຫັດຜ່ານ"></div></div><button class="${
    __vite_ssr_import_5__.ssrRenderClass($setup.loading ? 'btn w-full loading' : 'btn w-full')
  }" type="submit"> ເຂົ້າສູ່ລະບົບ <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button></form></div></div></div></div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/login/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/login/index.vue"]]);
}


// --------------------
// Request: /pages/users/[id].vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_036f2303 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

// import { validateRef } from "light-vue3-validation";
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "auth",
});
const tbHeader = __vite_ssr_import_3__.reactive([
  "fullname",
  "email",
  "mobile",
  "restrict",
  "Address Restrict",
  "created_at",
]);
const { data: user } = (
  ([__temp,__restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData("listUsers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/users/laithong")
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const createUser = async () => {
  await $fetch("http://10.0.34.37:3333/api/v1/auth/create", {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });
};

const __returned__ = { tbHeader, user, createUser, ref: __vite_ssr_import_3__.ref, reactive: __vite_ssr_import_3__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_4__.ssrRenderAttrs(_attrs)
  }><!-- {{user}} --><div class="flex"><div class="w-60"><div class="w-full card__media"><img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" class="h-20 w-full"></div><div class="card__media--aside"></div><div class="flex items-center p-4"><div class="relative flex flex-col items-center w-full"><div class="h-24 w-12 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white"><img class="h-20 w-20 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt=""><div class="absolute"></div></div><div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full"><span class="text-md whitespace-nowrap text-gray-800 font-semibold dark:text-white">${
    __vite_ssr_import_4__.ssrInterpolate($setup.user.data.fullname)
  }</span><!-- <span class="text-md whitespace-nowrap text-gray-600"
                >boussadjra</span
              >
              <p class="text-sm text-gray-500">
                I can't start my day without a coffee cup
              </p> --><!-- <div
                class="
                  py-4
                  flex
                  justify-center
                  items-center
                  w-full
                  divide-x divide-gray-400 divide-solid
                "
              >
                <span class="text-center px-2"
                  ><span class="font-bold text-gray-700">56</span
                  ><span class="text-gray-600"> followers</span></span
                ><span class="text-center px-2"
                  ><span class="font-bold text-gray-700">112</span
                  ><span class="text-gray-600"> following</span></span
                ><span class="text-center px-2"
                  ><span class="font-bold text-gray-700">27</span
                  ><span class="text-gray-600"> repos</span></span
                >
              </div> --></div></div></div></div><div class="content">asdkflsajfk</div></div></div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/users/[id].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/users/[id].vue"]]);
}


// --------------------
// Request: /pages/users/index.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs ($id_cfc4446f)
// Dependencies: 
// - /components/modal/sm.vue ($id_bf07e772)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_34524033 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modal/sm.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

// import { validateRef } from "light-vue3-validation";
/*#__PURE__*/ false && __vite_ssr_import_1__.definePageMeta({
  layout: "auth",
  title: "ຈັດການຜູ້ໃຊ້ລະບົບ",
});
const user = __vite_ssr_import_4__.reactive({
  username: __vite_ssr_import_4__.ref(""),
  fullname: __vite_ssr_import_4__.ref(""),
  password: __vite_ssr_import_4__.ref(""),
  cpassword: __vite_ssr_import_4__.ref(""),
  email: __vite_ssr_import_4__.ref(""),
  mobile: __vite_ssr_import_4__.ref(""),
});
const { data: listUsers } = (
  ([__temp,__restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("listUsers", () =>
  $fetch("http://10.0.34.37:3333/api/v1/users")
))),
  __temp = await __temp,
  __restore(),
  __temp
);
const createUser = async () => {
  await $fetch("http://10.0.34.37:3333/api/v1/auth/create", {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: user,
  });
};

const __returned__ = { user, listUsers, createUser, ref: __vite_ssr_import_4__.ref, reactive: __vite_ssr_import_4__.reactive }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalSm = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "w-full mt-5 px-5" }, _attrs))}><div class="flex justify-between my-3"><h4>ຜູ້ໃຊ້ລະບົບ</h4><label for="my-modal" class="btn btn-square btn-sm">+</label></div>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ModalSm, null, {
    title: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Add New User `)
      } else {
        return [
          __vite_ssr_import_5__.createTextVNode(" Add New User ")
        ]
      }
    }),
    default: __vite_ssr_import_5__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="mt-5"${
          _scopeId
        }><form${
          _scopeId
        }><input type="text"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.fullname)
        } name="fullname" placeholder="fullname" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="text"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.username)
        } name="username" placeholder="username" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="email" name="email"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.email)
        } placeholder="email" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="tel" name="mobile"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.mobile)
        } placeholder="mobile" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="text" name="password"${
          __vite_ssr_import_6__.ssrRenderAttr("value", $setup.user.password)
        } placeholder="password" class="input input-sm w-full mb-5"${
          _scopeId
        }><input type="text" name="cpassword" placeholder="confirm password" class="input input-sm w-full mb-5"${
          _scopeId
        }><button type="button" class="btn"${
          _scopeId
        }>Save</button></form></div>`)
      } else {
        return [
          __vite_ssr_import_5__.createVNode("div", { class: "mt-5" }, [
            __vite_ssr_import_5__.createVNode("form", null, [
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "text",
                "onUpdate:modelValue": $event => (($setup.user.fullname) = $event),
                name: "fullname",
                placeholder: "fullname",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.fullname]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "text",
                "onUpdate:modelValue": $event => (($setup.user.username) = $event),
                name: "username",
                placeholder: "username",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.username]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "email",
                name: "email",
                "onUpdate:modelValue": $event => (($setup.user.email) = $event),
                placeholder: "email",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.email]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "tel",
                name: "mobile",
                "onUpdate:modelValue": $event => (($setup.user.mobile) = $event),
                placeholder: "mobile",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.mobile]
              ]),
              __vite_ssr_import_5__.withDirectives(__vite_ssr_import_5__.createVNode("input", {
                type: "text",
                name: "password",
                "onUpdate:modelValue": $event => (($setup.user.password) = $event),
                placeholder: "password",
                class: "input input-sm w-full mb-5"
              }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_5__.vModelText, $setup.user.password]
              ]),
              __vite_ssr_import_5__.createVNode("input", {
                type: "text",
                name: "cpassword",
                placeholder: "confirm password",
                class: "input input-sm w-full mb-5"
              }),
              __vite_ssr_import_5__.createVNode("button", {
                type: "button",
                class: "btn",
                onClick: $setup.createUser
              }, "Save")
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="overflow-x-auto w-full"><table class="table table-compact w-full"><thead><tr><th>ຊື່ ແລະ ນາມສະກຸນ</th><th>ສາຂາ</th><th>ເບີໂທ</th><th>ສັງກັດຢູ່ພະແນກ</th><th>ສະຖານະ</th></tr></thead><tbody><!--[-->`)
  __vite_ssr_import_6__.ssrRenderList($setup.listUsers.data, (ui) => {
    _push(`<tr><th>${
      __vite_ssr_import_6__.ssrInterpolate(ui.fullname)
    }</th><td>001</td><td>${
      __vite_ssr_import_6__.ssrInterpolate(ui.mobile)
    }</td><td></td><td></td></tr>`)
  })
  _push(`<!--]--></tbody></table></div></div>`)
}


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/users/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/pages/users/index.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_60769333 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /middleware/redirect.ts ($id_356fa045)
// --------------------
const $id_5b296102 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {
  redirect: () => __vite_ssr_dynamic_import__('/middleware/redirect.ts')
}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /middleware/redirect.ts
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/middleware.mjs ($id_5b296102)
// Dependencies: 

// --------------------
const $id_356fa045 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /plugins/apiAuth.ts
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_72efcc68 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  const Auth = __vite_ssr_import_0__.useCookie("autKey");
  nuxtApp.vueApp.provide("auth", Auth);
  nuxtApp.provide("auth", Auth);
});
;
}


// --------------------
// Request: /plugins/auth.ts
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs ($id_7d3e7af8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0cce0b34 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(() => {
  const router = __vite_ssr_import_0__.useRoute();
  __vite_ssr_import_0__.addRouteMiddleware("auth", () => {
    const { $auth } = __vite_ssr_import_0__.useNuxtApp();
    console.log($auth);
    if ($auth.value) {
      return __vite_ssr_import_0__.navigateTo("");
    } else {
      return __vite_ssr_import_0__.navigateTo("/login");
    }
  });
});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/root-component.mjs
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_5f5043d6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/root-component.mjs ($id_5f5043d6)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/error-component.mjs ($id_60e91cae)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/error-component.mjs");



const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_60e91cae = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/error-component.mjs ($id_60e91cae)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? is404 ? 'Page Not Found' : 'Internal Server Error'
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    $props.statusCode
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    $props.description
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /composables/customer.ts ($id_a1f167fd)
// - /composables/locale.ts ($id_35d5db4b)
// - /composables/var.ts ($id_7510d08d)
// - /composables/useAuth.ts ($id_ba05bb26)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_0a4fcff7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useMeta }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.isVue3 }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.defineNuxtLink }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useTransitionState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/composables/customer.ts");

Object.defineProperty(__vite_ssr_exports__, "createCustomer", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.createCustomer }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/composables/locale.ts");

Object.defineProperty(__vite_ssr_exports__, "useLocale", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLocale }});
Object.defineProperty(__vite_ssr_exports__, "useDefaultLocale", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useDefaultLocale }});
Object.defineProperty(__vite_ssr_exports__, "useLocales", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLocales }});
Object.defineProperty(__vite_ssr_exports__, "useLocaleDate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLocaleDate }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/composables/var.ts");

Object.defineProperty(__vite_ssr_exports__, "a", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.a }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/composables/useAuth.ts");

Object.defineProperty(__vite_ssr_exports__, "signInUser", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.signInUser }});
Object.defineProperty(__vite_ssr_exports__, "initUser", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.initUser }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /composables/var.ts
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// Dependencies: 

// --------------------
const $id_7510d08d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const a = () => {
  return 0;
};
Object.defineProperty(__vite_ssr_exports__, "a", { enumerable: true, configurable: true, get(){ return a }});
;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:-ms-grid;display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    $props.statusCode
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    $props.description
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:-ms-grid;display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs ($id_0a4fcff7)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    $props.statusCode
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    $props.description
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"D:/2022/PJ/stb-cdscore/Font-app/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/app-component.mjs
// Parents: 
// - D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry ($id_94d2e41e)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// --------------------
const $id_2c254086 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/app-component.mjs ($id_2c254086)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6c61010f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/layouts.mjs ($id_12ab3ca9)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/auth.vue ($id_9a19ccb3)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_12ab3ca9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  auth: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/auth.vue')),
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/auth.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/layouts.mjs ($id_12ab3ca9)
// Dependencies: 
// - /components/navbar/authtop.vue ($id_d79eeb69)
// - /components/navbar/aside.vue ($id_66aeca7d)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9a19ccb3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/navbar/authtop.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/navbar/aside.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const route = __vite_ssr_import_2__.useRoute();
__vite_ssr_import_3__.useHead({
  title: `CRD - ${route.meta.title}`,
  meta: [{ name: "og:title", content: `CRD - ${route.meta.title}` }],
});

const __returned__ = { route }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavbarAuthtop = __vite_ssr_import_0__.default
  const _component_NavbarAside = __vite_ssr_import_1__.default
  const _component_NuxtPage = __vite_ssr_import_4__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NavbarAuthtop, null, null, _parent))
  _push(`<div class="flex h-full w-full"><div style="${__vite_ssr_import_5__.ssrRenderStyle({"width":"275px"})}">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NavbarAside, null, null, _parent))
  _push(`</div>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`</div><!-- <FooterTwof /> --></div>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/auth.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/layouts/auth.vue"]]);
}


// --------------------
// Request: /components/navbar/authtop.vue
// Parents: 
// - /layouts/auth.vue ($id_9a19ccb3)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d79eeb69 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      themSwitch: false,
    };
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent" }, _attrs))
  }><div class="navbar border-b border-slate-900/10"><div class="flex-1"><a class="btn btn-ghost normal-case text-xl">CRD</a></div><div class="flex-none"><label class="swap swap-rotate px-5"><input type="checkbox"${
    (__vite_ssr_import_1__.ssrIncludeBooleanAttr((Array.isArray($data.themSwitch))
      ? __vite_ssr_import_1__.ssrLooseContain($data.themSwitch, null)
      : $data.themSwitch)) ? " checked" : ""
  }><svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg><svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label><!-- <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="
              mt-3
              card card-compact
              dropdown-content
              w-52
              bg-base-100
              shadow
            "
          >
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: \$999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> --><div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img src="https://api.lorem.space/image/face?hash=33791"></div></label><ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a class="justify-between"> ໂປຣຟາຍ </a></li><li><a>ການຕັ້ງຄ່າ</a></li><li><a>ອອກຈາກລະບົບ</a></li></ul></div></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/navbar/authtop.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/components/navbar/authtop.vue"]]);
}


// --------------------
// Request: /components/navbar/aside.vue
// Parents: 
// - /layouts/auth.vue ($id_9a19ccb3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_66aeca7d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");


const _sfc_main = {};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "overflow-y-auto fixed" }, _attrs))}><ul class="menu bg-base-100 w-56 p-2 mt-5 rounded-box"><li>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/users" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"${
          _scopeId
        }></path></svg> users_manage `)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            })
          ])),
          __vite_ssr_import_1__.createTextVNode(" users_manage ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/cdquestion" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"${
          _scopeId
        }></path></svg> question cr `)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            })
          ])),
          __vite_ssr_import_1__.createTextVNode(" question cr ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/customer" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"${
          _scopeId
        }></path></svg> customer `)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            })
          ])),
          __vite_ssr_import_1__.createTextVNode(" customer ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/navbar/aside.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/components/navbar/aside.vue"]]);
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/layouts.mjs ($id_12ab3ca9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");
const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const route = __vite_ssr_import_0__.useRoute()
__vite_ssr_import_1__.useHead({
  title:`CRD - ${route.meta.title}`,
  meta: [{ name: 'og:title', content: `CRD - ${route.meta.title}` }]
})

const __returned__ = { route }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __vite_ssr_import_2__.resolveComponent("NuxtPage")

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ id: "app" }, _attrs))}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/2022/PJ/stb-cdscore/Font-app/layouts/default.vue"]]);
}


const __modules__ = {
  "D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry": $id_94d2e41e,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/paths.mjs": $id_7d6c0eca,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/css.mjs": $id_d2738ebc,
  "/assets/css/tailwind.css": $id_f75548e1,
  "/assets/css/app.css": $id_ce6d0f9c,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/plugins/server.mjs": $id_7d3e7af8,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/components.plugin.mjs": $id_267ebbe2,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/meta.config.mjs": $id_13dd8ad6,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/routes.mjs": $id_cfc4446f,
  "/pages/cdquestion/index.vue?macro=true": $id_be557372,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/@headlessui/vue/dist/headlessui.esm.js": $id_2c13895f,
  "/node_modules/@headlessui/vue/dist/components/combobox/combobox.js": $id_92aab129,
  "/node_modules/@headlessui/vue/dist/components/dialog/dialog.js": $id_b07f1154,
  "/node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js": $id_90ea7d3e,
  "/node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js": $id_58899675,
  "/node_modules/@headlessui/vue/dist/components/listbox/listbox.js": $id_2feddcbf,
  "/node_modules/@headlessui/vue/dist/components/menu/menu.js": $id_b1042eef,
  "/node_modules/@headlessui/vue/dist/components/popover/popover.js": $id_f86ffab2,
  "/node_modules/@headlessui/vue/dist/components/portal/portal.js": $id_1d43fca2,
  "/node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js": $id_0e8af24b,
  "/node_modules/@headlessui/vue/dist/components/switch/switch.js": $id_44a1a907,
  "/node_modules/@headlessui/vue/dist/components/tabs/tabs.js": $id_6cd55209,
  "/node_modules/@headlessui/vue/dist/components/transitions/transition.js": $id_99377655,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/customer/[id].vue?macro=true": $id_1b52f6be,
  "/components/profile/customer.vue": $id_cc4e0c4e,
  "/pages/customer/form.vue?macro=true": $id_485061af,
  "/composables/customer.ts": $id_a1f167fd,
  "/pages/customer/index.vue?macro=true": $id_1fd43e10,
  "/components/table/customer.vue": $id_587613ac,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/pages/login/index.vue?macro=true": $id_d1da0e93,
  "/composables/locale.ts": $id_35d5db4b,
  "/composables/useAuth.ts": $id_ba05bb26,
  "/pages/users/[id].vue?macro=true": $id_bfb117aa,
  "/pages/users/index.vue?macro=true": $id_2240d037,
  "/components/modal/sm.vue": $id_bf07e772,
  "/pages/cdquestion/index.vue": $id_8b8710c4,
  "/pages/customer/[id].vue": $id_60c52b89,
  "/pages/customer/form.vue": $id_fccc8ef6,
  "/pages/customer/index.vue": $id_55a62451,
  "/pages/index.vue": $id_cca58e97,
  "/pages/login/index.vue": $id_d006def6,
  "/pages/users/[id].vue": $id_036f2303,
  "/pages/users/index.vue": $id_34524033,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/router.options.mjs": $id_60769333,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/middleware.mjs": $id_5b296102,
  "/middleware/redirect.ts": $id_356fa045,
  "/plugins/apiAuth.ts": $id_72efcc68,
  "/plugins/auth.ts": $id_0cce0b34,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/root-component.mjs": $id_5f5043d6,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/error-component.mjs": $id_60e91cae,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/imports.mjs": $id_0a4fcff7,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/composables/var.ts": $id_7510d08d,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/app-component.mjs": $id_2c254086,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_6c61010f,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/__x00__virtual:D:/2022/PJ/stb-cdscore/Font-app/.nuxt/layouts.mjs": $id_12ab3ca9,
  "/layouts/auth.vue": $id_9a19ccb3,
  "/components/navbar/authtop.vue": $id_d79eeb69,
  "/components/navbar/aside.vue": $id_66aeca7d,
  "/layouts/default.vue": $id_7689e89d
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("D:/2022/PJ/stb-cdscore/Font-app/node_modules/nuxt/dist/app/entry")