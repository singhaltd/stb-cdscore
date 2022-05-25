export default defineNuxtPlugin(() => {
    const router = useRoute()
    addRouteMiddleware('auth', () => {
        const { $auth } = useNuxtApp()
        if ($auth.value) {
            return navigateTo('')
        } else {
            return navigateTo('/login')
        }
    })
})
