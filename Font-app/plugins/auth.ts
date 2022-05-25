export default defineNuxtPlugin(() => {
    const router = useRoute()
    addRouteMiddleware('auth', () => {
        const { $auth } = useNuxtApp()
        console.log($auth)
        if ($auth.value) {
            return navigateTo('')
        } else {
            return navigateTo('/login')
        }
    })
})
