import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import MColAccount from 'App/Models/CDSR/MColAccount'
import MColMachine from 'App/Models/CDSR/MColMachine'
import MColOther from 'App/Models/CDSR/MColOther'
import MColProject from 'App/Models/CDSR/MColProject'
import MColSolid from 'App/Models/CDSR/MColSolid'
import MColVihicle from 'App/Models/CDSR/MColVihicle'

export default class CollateralsController {

    public async Index({ params, request, auth, response }: HttpContextContract) {
        try {
            const OtherCols = await MColOther.query().where('cust_no', params.cust_no)
            const SolidCols = await MColSolid.query().where('cust_no', params.cust_no)
            const MacCols = await MColMachine.query().where('cust_no', params.cust_no)
            const acCols = await MColAccount.query().where('cust_no', params.cust_no)
            const vhCols = await MColVihicle.query().where('cust_no', params.cust_no)
            const pjCols = await MColProject.query().where('cust_no', params.cust_no)
            response.status(200)
            return {
                error: false,
                data: {
                    machines: MacCols,
                    solid: SolidCols,
                    other: OtherCols,
                    account: acCols,
                    vihicle: vhCols,
                    projects:pjCols
                }
            }
        } catch (error) {
            response.status(201)
            return {
                error: true,
                message: error
            }
        }

    }
    public async otherStore({ request, params, auth, response }: HttpContextContract) {
        const Req = schema.create({
            owner: schema.string(),
            doc_no: schema.string(),
            issue_date: schema.string(),
            verify_by: schema.string(),
            weight: schema.string(),
            unit: schema.string(),
            price: schema.number(),
            total: schema.number()
        })
        const playload = await request.validate({ schema: Req })
        const dtAuth = await auth.use('api').user
        try {
            const rsCol = await MColOther.create(Object.assign(playload, { maker: dtAuth?.user_id, cust_no: params.cust_no }))
            console.log(rsCol)
            response.status(200)
            return rsCol
        } catch (error) {
            console.log(error)
        }
    }
    public async machineStore({ request, params, auth, response }: HttpContextContract) {
        const Req = schema.create({
            owner: schema.string(),
            model_no: schema.string(),
            buy_year: schema.string(),
            manual_year: schema.string(),
            mac_percent: schema.number(),
            buy_price: schema.number(),
            cur_price: schema.number(),
            total_price: schema.number(),
            village: schema.string(),
            district: schema.number()
        })
        const playload = await request.validate({ schema: Req })
        const dtAuth = await auth.use('api').user
        try {
            const rsCol = await MColMachine.create(Object.assign(playload, { maker: dtAuth?.user_id, cust_no: params.cust_no }))
            console.log(rsCol)
            response.status(200)
            return rsCol
        } catch (error) {
            console.log(error)
        }
    }

    public async solidStore({ request, params, auth, response }: HttpContextContract) {
        const { cate } = request.all()
        const Req = schema.create({
            owner: schema.string(),
            doc_no: schema.string(),
            size: schema.string(),
            issue_date: schema.string(),
            road_ad: schema.string(),
            village: schema.string(),
            district: schema.number(),
            price_officer: schema.number(),
            price_market: schema.number(),
            price_org: schema.number(),
            price_total: schema.number(),
        })
        const playload = await request.validate({ schema: Req })
        const dtAuth = await auth.use('api').user
        try {
            const rsCol = await MColSolid.create(Object.assign(playload, { maker: dtAuth?.user_id, cust_no: params.cust_no, cate: cate }))
            console.log(rsCol)
            response.status(200)
            return rsCol
        } catch (error) {
            console.log(error)
        }
    }
    public async accountStore({ request, params, auth, response }: HttpContextContract) {
        const Req = schema.create({
            ac_name: schema.string(),
            ac_no: schema.string(),
            cif: schema.string(),
            open_date: schema.string(),
            expire_date: schema.string(),
            village: schema.string(),
            district: schema.number(),
            interest: schema.number(),
            ccy: schema.string(),
            amount: schema.number(),
        })
        const playload = await request.validate({ schema: Req })
        const dtAuth = await auth.use('api').user
        try {
            const rsCol = await MColAccount.create(Object.assign(playload, { maker: dtAuth?.user_id, cust_no: params.cust_no }))
            console.log(rsCol)
            response.status(200)
            return rsCol
        } catch (error) {
            console.log(error)
        }
    }


    public async vihicleStore({ request, params, auth, response }: HttpContextContract) {
        const Req = schema.create({
            owner: schema.string(),
            brand: schema.string(),
            model: schema.string(),
            color: schema.string(),
            engine: schema.string(),
            tank: schema.string(),
            issue_date: schema.string(),
            expire_date: schema.string(),
            village: schema.string(),
            district: schema.number(),
            vh_value: schema.number(),
            ccy: schema.string(),
        })
        const playload = await request.validate({ schema: Req })
        const dtAuth = await auth.use('api').user
        try {
            const rsCol = await MColVihicle.create(Object.assign(playload, { maker: dtAuth?.user_id, cust_no: params.cust_no }))
            console.log(rsCol)
            response.status(200)
            return rsCol
        } catch (error) {
            console.log(error)
        }
    }

    public async projectStore({ request, params, auth, response }: HttpContextContract) {
        const Req = schema.create({
            name: schema.string(),
            doc_no: schema.string(),
            issue_date: schema.string(),
            expire_date: schema.string(),
            village: schema.string(),
            district: schema.number(),
            value: schema.number(),
            ccy: schema.string(),
            pi_value: schema.number(),
            ccy_pi: schema.string(),
            cur_value: schema.number(),
            ccy_cur: schema.string(),
            lcy_total: schema.number(),
        })
        const playload = await request.validate({ schema: Req })
        const dtAuth = await auth.use('api').user
        try {
            const rsCol = await MColProject.create(Object.assign(playload, { maker: dtAuth?.user_id, cust_no: params.cust_no }))
            console.log(rsCol)
            response.status(200)
            return rsCol
        } catch (error) {
            console.log(error)
        }
    }
}
