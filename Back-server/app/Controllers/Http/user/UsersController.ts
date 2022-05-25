import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SstmUser from 'App/Models/User/SstmUser'

export default class UsersController {
    public async index({ response }: HttpContextContract) {
        try {
            const users = await SstmUser.query().paginate(1,30)
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: users
            }
        } catch (e) { }
    }

    public async findOne({ params, response }: HttpContextContract) {
        try {
            const users = await SstmUser.find(params.id)
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: users
            }
        } catch (e) { }
    }
}
