import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import MBranch from 'App/Models/User/MBranch';

export default class BranchesController {
    public async index({ response }: HttpContext) {
        try {
            const branchs = await MBranch.all()
            return response.status(200).json({
                error: false,
                data: branchs
            })
        } catch (error) {

        }
    }
}
