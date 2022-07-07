import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MUpersonal from 'App/Models/User/MUpersonal'
import MuRole from 'App/Models/User/MuRole'
import SstmUser from 'App/Models/User/SstmUser'
import Ulity from 'App/Middleware/Ulity'
import Database from '@ioc:Adonis/Lucid/Database'
const ulity = new Ulity()
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
            return {
                error: true,
                message: e.responseText
            }
        }
    }

    public async RoleIndex({ response }: HttpContextContract) {
        try {
            const role = await MuRole.query()
            response.status(200)
            return {
                error: false,
                data: role
            }
        } catch (e) {
            console.log(e)
        }
    }

    public async profile({ auth, response }: HttpContextContract) {
        try {
            const dtAuth = await auth.use('api').user
            const User = await SstmUser.query().select('username', 'cust_id', 'branch_code').where('username', dtAuth?.user_id).preload('personal').firstOrFail()
            return User
        } catch (e) {
            console.log(e)
        }
    }

    public async permisAccess({ auth, response }: HttpContextContract) {
        try {
            const dtAuth = await auth.use('api').user
            const role = await MuRole.query().where('id', dtAuth?.role_id).distinct().first()
            return role?.related('NavLink').query()
        } catch (e) {
            console.log(e)
        }
    }

    public async CreateUser({ request, response }: HttpContextContract) {
        const { ipallow, email } = request.all()
        const ReqBody = schema.create({
            username: schema.string(),
            firstname: schema.string(),
            lastname: schema.string(),
            mobile: schema.string(),
            branch_code: schema.string(),
            dep_id: schema.number(),
            password: schema.string(),
            role: schema.string()
        })

        const playload = await request.validate({ schema: ReqBody })


        try {
            const custno = await ulity.genrrn('CUST', playload.branch_code)
            /// create Personal Data
            await MUpersonal.create({
                cust_id: custno,
                firstname: playload.firstname,
                lastname: playload.lastname,
                email: email,
                mobile: playload.mobile,

            })
            await SstmUser.create({
                cust_id: custno,
                restrictAddress: ipallow ? ipallow : '',
                fullname: playload.firstname + ' ' + playload.lastname,
                email: email,
                mobile: playload.mobile,
                branch_code: playload.branch_code,
                dep_id: playload.dep_id,
                username: playload.username,
                password: playload.password,
                role_id: playload.role
            })
            response.status(200)
            return {
                error: false,
                message: 'success'
            }
        } catch (e) {
            console.log(e)
        }
    }


    public async signout({ auth, response }: HttpContextContract) {
        try {
            await auth.use('api').logout()
            response.status(200)
            return auth.use('api').isLoggedOut
        } catch (e) { }
    }


    public async listRole({ response }: HttpContextContract) {
        try {
            const roles = await MuRole.all()
            return response.status(200).json({
                error: false,
                data: roles
            })
        } catch (error) {

        }
    }

    public async userWorkflow({ auth, response }: HttpContextContract) {
        try {
            const dtAuth = await auth.use('api').user
            const rsf = await Database.rawQuery(`select count(*) amt,b.grading from (
                select a.cust_no,case when sum(a.weight) > 34 then 'A' when sum(a.weight) > 9 and sum(a.weight) < 35 then 'B' else 'C' end grading
                from cdsr_cust_authtxns a
                where a.maker = '${dtAuth?.user_id}'
                and to_char(a.created_at,'YYYY-MM-DD') = to_char(CURRENT_DATE,'YYYY-MM-DD') group by a.cust_no
            ) b group by b.grading;`)

            response.status(200)
            return {
                error: false,
                data: rsf.rows
            }
        } catch (error) {

        }
    }
}
