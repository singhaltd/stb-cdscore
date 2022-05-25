import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
    runtimeConfig: {
        secretKey: '', // variable that can only be accessed on the server side
        base_api:process.env.BASE_API_URL+':'+process.env.BASE_API_PORT,
        public: {
            BASE_URL: process.env.BASE_API_URL || 'https://nuxtjs.org' // variable that can also be accessed on the client side
        }
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        "~/assets/css/tailwind.css",
        "~/assets/css/app.css"
    ],

})
