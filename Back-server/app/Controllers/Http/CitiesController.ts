import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MDistrict from 'App/Models/CITY/MDistrict'
import MProvince from 'App/Models/CITY/MProvince'

export default class CitiesController {
    public async indexProvince({ request, auth, response }: HttpContextContract) {
        try {
            const res = await MProvince.all()
            return {
                error: false,
                data: res
            }
        } catch (error) {
            response.status(201)
            return {
                error: true,
                message: error
            }
        }
    }

    public async indexDistrict({ params, auth, response }: HttpContextContract) {
        try {
            const res = await MDistrict.query().where('pv_code', params.pv_id)
            return {
                error: false,
                data: res
            }
        } catch (error) {
            response.status(201)
            return {
                error: true,
                message: error
            }
        }
    }
}
