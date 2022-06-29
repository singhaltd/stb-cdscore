import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import CdQuestion from 'App/Models/CDSR/CdQuestion'
export default class QamsController {

    public async index({ request, response }: HttpContextContract) {
        const { cur_page, per_page } = request.all()
        try {
            const resQuestion = await CdQuestion.query().preload('aprch').paginate(cur_page, per_page)
            response.status(200)
            return resQuestion
        } catch (error) {

        }
    }

    ///ບັນທຶກຄຳຖາມ ແລະ ຄຳຕອບ
    public async StoreQuestionWithAnswer({ request, response }: HttpContextContract) {
        const { answer } = request.all()
        const reqQuestion = schema.create({
            title: schema.string(),
            description: schema.string.optional(),
            approach: schema.string(),
            input:schema.string()
        })
        const payloadQuestion = await request.validate({ schema: reqQuestion })
        try {
            const Question = await CdQuestion.create(payloadQuestion)
            Question.related('answers').createMany(answer)
            response.status(200)
            return {
                error: false,
                code: '200',
                message: 'inserted',
                data: Question
            };
        } catch (error) {
            console.log(error)
        }
    }
}