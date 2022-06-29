import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MDepartment from 'App/Models/User/MDepartment'

export default class DepartsController {
    public async index({ response }: HttpContextContract) {

        try {
            const departs = await MDepartment.all()
            return response.status(200).json({
                error: false,
                data: departs
            })
        } catch (error) {

        }
    }
}
