import { useCookie } from 'h3'
const config = useRuntimeConfig().base_api
export default async (req, res) => {
    let Auth = useCookie(req, 'autKey')
    const data = await $fetch('http://' + config + '/api/v1/profile', {
        headers: {
            'Authorization': 'Bearer ' + Auth
        }
    })
    return { data }
}