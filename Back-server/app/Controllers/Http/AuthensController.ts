import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import SstmUser from 'App/Models/User/SstmUser'

export default class AuthensController {

    public async login({ request, response, auth }: HttpContextContract) {
        const ReqBody = schema.create({
            username: schema.string(),
            password: schema.string()
        })

        const playload = await request.validate({ schema: ReqBody })


        try {
            response.status(200)
            if (auth.use('api').isLoggedIn) {
                return await auth.use('api').attempt(playload.username, playload.password)
            } else {
                return await auth.use('api').attempt(playload.username, playload.password)
            }
        } catch (e) {
            console.log(e)
        }
    }

    public async profile({ auth, response }: HttpContextContract) {
        try {
            const dtAuth = await auth.use('api').user
            const User = await SstmUser.query().select('username','cust_id').where('username', dtAuth?.user_id).preload('personal').firstOrFail()
            return User
        } catch (e) {
            console.log(e)
        }
    }

    public async CreateUser({ request, response }: HttpContextContract) {
        const { ipallow } = request.only(['ipallow'])
        const ReqBody = schema.create({
            username: schema.string(),
            fullname: schema.string(),
            email: schema.string(),
            mobile: schema.string(),
            password: schema.string(),
        })

        const playload = await request.validate({ schema: ReqBody })


        try {
            response.status(200)
            return await SstmUser.create(Object.assign(playload, { restrictAddress: ipallow ? ipallow : '' }))
        } catch (e) {
            console.log(e)
        }
    }
}
