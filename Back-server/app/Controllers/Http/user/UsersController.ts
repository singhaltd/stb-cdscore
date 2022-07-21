import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MUpersonal from 'App/Models/User/MUpersonal'
import SstmUser from 'App/Models/User/SstmUser'

export default class UsersController {
    public async index({ request, auth, response }: HttpContextContract) {
        const { cur_page, per_page, fullname, mobile, cust_id } = request.all()
        try {
            const users = await SstmUser.query().preload('dept').whereRaw(`${cust_id ? `cust_no like '${cust_id}%'` : fullname ? `fullname like '${fullname}%'` : mobile ? `mobile like '${mobile}%'` : ''}`).paginate(cur_page ? cur_page : 1, per_page)
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
            const person = await MUpersonal.find(users?.$attributes.cust_id)
            console.log(person)
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: {
                    firstname: person?.$original.firstname,
                    lastname: person?.$original.lastname,
                    username: users?.$original.username,
                    email: users?.$original.email,
                    mobile: users?.$original.mobile,
                    branch_code: users?.$original.branch_code,
                    role: users?.$original.role_id,
                    dep_id: users?.$original.dep_id,
                    cust_no:users?.$original.cust_id
                }
            }
        } catch (e) { }
    }
}
