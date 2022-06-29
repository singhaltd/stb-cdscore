import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SstmUser from 'App/Models/User/SstmUser'

export default class UsersController {
    public async index({ request, auth, response }: HttpContextContract) {
        const { cur_page, per_page, fullname, mobile, cust_id } = request.all()
        try {
            const users = await SstmUser.query().whereRaw(`${cust_id ? `cust_no like '${cust_id}%'` : fullname ? `fullname like '${fullname}%'` : mobile ? `mobile like '${mobile}%'` : ''}`).paginate(cur_page ? cur_page : 1, per_page)
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
