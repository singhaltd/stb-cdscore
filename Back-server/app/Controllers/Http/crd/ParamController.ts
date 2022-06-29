import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CdQuestion from 'App/Models/CDSR/CdQuestion'
export default class CustsController {
    public async CrateAnswerQuestion({ params, request, response }: HttpContextContract) {
        const Question = await CdQuestion.findOrFail(params.id).related('answers')
            .createMany([{ title: 'test', grade: 'A', weight: 0.2 }])
        return Question
    }
}