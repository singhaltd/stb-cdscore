import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MCustomer from 'App/Models/CDSR/MCustomer'
import MCustType from 'App/Models/CDSR/MCustType'
import Ulity from 'App/Middleware/Ulity'
const ulity = new Ulity()
export default class CustsController {

    public async index({ response }:HttpContextContract) {

        try {
            const rsCust = await MCustomer.query().preload('cust_cate').preload('lntype')
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rsCust
            }
        } catch (error) {
            console.log(error)
        }

    }

    public async storeCustomer({ request, response }: HttpContextContract) {
        const { company, sex } = request.all();
        const custno = await ulity.genrrn('CUST', '001')

        const reqBody = schema.create({
            firstname: schema.string(),
            lastname: schema.string(),
            mobile: schema.string(),
            email: schema.string(),
            finance: schema.number(),
            cycle: schema.number(),
            perpose: schema.string()
        })

        const payload = await request.validate({ schema: reqBody })

        const Cust = await MCustomer.create({
            cust_no: custno,
            fullname: payload.firstname + ' ' + payload.lastname,
            email: payload.email,
            mobile: payload.mobile,
            finance: payload.finance,
            ccy: 'LAK',
            perpose: payload.perpose,
            sex: sex,
            period: payload.cycle,
            company: company
        })

        return Cust

    }

    public async getfindCustomer({ params, response }) {

        try {
            const rsCust = await MCustomer.query().where('cust_no', params.id).preload('cust_cate').preload('lntype').firstOrFail()
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rsCust
            }
        } catch (error) {

        }

    }

    public async getLoanType({ params, response }) {

        try {
            const rsCust = await MCustType.query().preload('loans', (builder) => {
                builder.select('*').distinct()
            })
            response.status(200)
            return {
                error: false,
                code: '200',
                message: 'test',
                data: rsCust
            }
        } catch (error) {
            return response.send(error)
        }

    }
}
