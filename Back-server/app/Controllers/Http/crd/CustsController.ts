import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MCustomer from 'App/Models/CDSR/MCustomer'
import MCustType from 'App/Models/CDSR/MCustType'
import Ulity from 'App/Middleware/Ulity'
import Mcusttxn from 'App/Models/CDSR/Mcusttxn'
import MGrading from 'App/Models/CDSR/MGrading'
import Database from '@ioc:Adonis/Lucid/Database'
const ulity = new Ulity()
export default class CustsController {

    public async index({ request, auth, response }: HttpContextContract) {
        const user = await auth.use('api').user
        const { cur_page, per_page, cust_no, fullname, mobile } = request.all()
        try {
            const rsCust = await MCustomer.query().preload('cust_cate').preload('lntype').where('branch_code', user?.branch_code).whereRaw(`${cust_no ? `cust_no like '${cust_no}%'` : fullname ? `fullname like '${fullname}%'` : mobile ? `mobile like '${mobile}%'` : ''}`).paginate(cur_page ? cur_page : 1, per_page)
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

    public async DeleteCustomer({ params, auth, response }: HttpContextContract) {
        try {
            const Customer = await MCustomer.findOrFail(params.cust_no)
            Customer.delete()
            return {
                error: false,
                code: '200',
                message: 'success',
                data: '',
            }
        } catch (error) {

        }
    }
    /// Customer Creation
    public async storeCustomer({ request, auth, response }: HttpContextContract) {
        const { company, sex, intrate, email, perpose } = request.all();
        const dtAuth = await auth.use('api').user
        const custno = await ulity.genrrn('CUST', dtAuth?.branch_code)
        const reqBody = schema.create({
            firstname: schema.string(),
            lastname: schema.string(),
            mobile: schema.string(),
            finance: schema.number(),
            loan_type: schema.number(),
            cust_type: schema.number(),
            cycle: schema.number(),
            cycle_type: schema.string(),
            ccy: schema.string(),
            exp: schema.string()
        })

        const payload = await request.validate({ schema: reqBody })

        const Cust = await MCustomer.create({
            cust_no: custno,
            fullname: payload.firstname + ' ' + payload.lastname,
            email: email,
            mobile: payload.mobile,
            finance: payload.finance,
            ccy: payload.ccy,
            perpose: perpose,
            sex: sex,
            period_type: payload.cycle_type,
            period: payload.cycle,
            company: company,
            cust_type: payload.cust_type,
            loan_type: payload.loan_type,
            maker: dtAuth?.user_id,
            branch_code: dtAuth?.branch_code,
            int_rate: intrate,
            exp: payload.exp
        })

        return Cust

    }

    public async UpdateCustomer({ params, request, auth, response }: HttpContextContract) {
        const { company, sex, intrate, email, perpose } = request.all();
        const dtAuth = await auth.use('api').user
        const reqBody = schema.create({
            firstname: schema.string(),
            lastname: schema.string(),
            mobile: schema.string(),
            finance: schema.number(),
            loan_type: schema.number(),
            cust_type: schema.number(),
            cycle: schema.number(),
            cycle_type: schema.string(),
            ccy: schema.string(),
            exp: schema.string()
        })

        const payload = await request.validate({ schema: reqBody })

        const Cust = await MCustomer.query().where('cust_no', params.id).update({
            fullname: payload.firstname + ' ' + payload.lastname,
            email: email,
            mobile: payload.mobile,
            finance: payload.finance,
            ccy: payload.ccy,
            perpose: perpose,
            sex: sex,
            period_type: payload.cycle_type,
            period: payload.cycle,
            company: company,
            cust_type: payload.cust_type,
            loan_type: payload.loan_type,
            branch_code: dtAuth?.branch_code,
            int_rate: intrate,
            exp: payload.exp
        })

        return Cust

    }

    // update customer

    //* ເບິ່ງຂໍ້ມູນລາຍລະອຽດຂອງລູກຄ້າ
    public async CustomerDetail({ params, auth, response }) {

        try {
            const rsCust = await MCustomer.query().where('cust_no', params.id).preload('cust_cate').preload('lntype').preload('branch').firstOrFail()
            //sum customer point
            const questResult = await Mcusttxn.query().sum('weight').where('cust_no', rsCust.$original.cust_no)
            const custDetail = await Database.rawQuery(`select fn_cmqcheck(${rsCust.$original.loan_type},${rsCust.$original.cust_type},'${rsCust.$original.cust_no}','${rsCust.$original.exp}') as answer;`)
            // get Grade Customer
            const resGrade = await MGrading.query().where('to_val', '<=', questResult[0].$extras.sum).orderBy('to_val', 'desc').first()
            let result = Object.assign(rsCust.$attributes, { grade: resGrade?.$original.grade, score: questResult[0].$extras.sum, grade_info: resGrade?.$original?.grade_info }, rsCust.$preloaded, { activity: custDetail.rows[0] })
            return {
                error: false,
                code: '200',
                message: '',
                data: result
            }
        } catch (error) {
            console.log(error)
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
