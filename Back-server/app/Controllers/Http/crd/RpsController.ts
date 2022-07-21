import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MExrate from 'App/Models/CCY/MExrate'
import MColleteral from 'App/Models/RP/MColleteral'

export default class RpsController {
    public async findColleter({ auth, params, response }: HttpContextContract) {
        try {
            const res = await MColleteral.query().where('cust_no', params.cust_no).orderBy('ref_id')
            const total = await MColleteral.query().sum('asset_tal').where('cust_no', params.cust_no)
            console.log(total)
            response.status(200)
            return {
                data: res,
                total: {
                    lcy: total[0].$extras.sum
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async getCcy({ auth, response }: HttpContextContract) {
        try {
            const rsCcy = await MExrate.all()
            response.status(200)
            return rsCcy
        } catch (error) {

        }
    }
}
