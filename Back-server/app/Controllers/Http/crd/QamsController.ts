import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database';
import CdQuestionMap from 'App/Models/CdQuestionMap';

import CdApproch from "App/Models/CDSR/CdApproch";
import CdQAswer from 'App/Models/CDSR/CdQAswer';
import MCollateral from "App/Models/CDSR/MCollateral";
import MCustomer from 'App/Models/CDSR/MCustomer';
import Mcusttxn from 'App/Models/CDSR/Mcusttxn';
import MCustType from "App/Models/CDSR/MCustType";
import MExpType from 'App/Models/CDSR/MExpType';
import MLoanType from "App/Models/CDSR/MLoanType";
import Vwquestion from 'App/Models/CDSR/Vwquestion';
import Logger from '@ioc:Adonis/Core/Logger'


export default class QamsController {

    public async getQlntype({ params, response }: HttpContextContract) {
        try {
            // const data = await Database.from('cdsr_question_mapings')
            //             .innerJoin('cdsr_questions','cdsr_question_mapings.quetion_id','=','cdsr_questions.q_id')
            //             .innerJoin('cdsr_loan_types','cdsr_question_mapings.loan_type','=','cdsr_loan_types.ln_type_id')
            //             .innerJoin('cdsr_customer_types','cdsr_question_mapings.cust_type','=','cdsr_customer_types.cus_type_id')
            //             .select('cdsr_questions.*','cdsr_customer_types.cus_type_id','cdsr_loan_types.ln_type_id')
            const data = await CdApproch.query().preload('vQuestions', (q) => {
                q.preload('answers').where('loan_type', params.loan_type).andWhere('cust_type', params.cust_type).andWhere('exp_id', params.exp_id)
            })
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: data
            };
        } catch (error) {
            console.log(error)
        }
    }
    // ສະແດງລາຍລະອຽດ ປະເພດຄຳຖາມ ຕອບຕາມລູກຄ້າ ໜ້າລາຍລະອຽດລູກຄ້າ
    public async getCustQuestion({ params, response }: HttpContextContract) {
        try {
            const customer = await MCustomer.findOrFail(params.cust_no)
            const data = await CdApproch.query().preload('vQuestions', async (q) => {
                q.preload('weight', (q) => {
                    q.select('weight', 'answ_id', 'grade').where('cust_no', params.cust_no)//.andWhereRaw(`'${customer.exp}' = any(exp)`)
                }).andWhere('cust_type', customer.cust_type).andWhere('exp_id', customer.exp).andWhere('loan_type', customer.loan_type)
            })
            // const x = await Database.from('cdsr_cust_authtxns').sum('weight').as('x')
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: data
            };
        } catch (error) {
            console.log(error)
        }
    }

    /// ສະແດງຄຳຖາມ ແລະ ຄຳຕອບ ເພື່ອລູກຄ້າຕອບຄຳຖາມ whereRaw(`'created_at=(select max(created_atd) from cdsr_cust_authtxns where cust_no='${params.cust_no}')`)
    public async getCustQuestionParams({ params, response }: HttpContextContract) {
        // find customer by customer number
        try {
            const customer = await MCustomer.findOrFail(params.cust_no)
            const data = await CdApproch.query().preload('vQuestions', async (q) => {
                q.preload('weight', (query) => {
                    query.select('answ_id').where('cust_no', customer.cust_no)
                }).preload('answers', (builder) => {
                    builder.whereRaw(`'${customer.exp}' = any(exp) and '${customer.cust_type}' = any(em_cust_type)`).orderBy('grade', 'asc')
                    // andWhere('cust_type', customer.cust_type)
                }).andWhere('cust_type', customer.cust_type).andWhere('exp_id', customer.exp).andWhere('loan_type', customer.loan_type)
            })
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: data
            };
        } catch (error) {
            console.log(error)
        }
    }

    // Store Customer Question with answer
    public async SaveCustQuestionParams({ request, auth, response }: HttpContextContract) {
        const { cust_no, qt } = request.all()
        const dtAuth = await auth.use('api').user
        const QandA = [{}]
        const rqbody = schema.create({
            cust_no: schema.string()
        })
        QandA.length = 0
        await request.validate({ schema: rqbody })
        qt.forEach(async (el) => {
            // console.log(anw)
            QandA.push({
                cust_no,
                question_id: el.id,
                answ_id: el.choise,
                maker: dtAuth?.user_id,
            })
        });
        try {
            const txn = await Mcusttxn.updateOrCreateMany(['question_id', 'cust_no', 'answ_id'], QandA)
            response.status(200)
            return {
                error: false,
                data: txn
            }
        } catch (error) {
            response.status(201)
            return {
                error: true,
                message: error
            }
        }
    }


    public async getExp({ response }) {
        try {
            const rLoan = await MExpType.all()

            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rLoan
            };
        } catch (error) {

        }
    }
    public async getLoanType({ response }) {
        try {
            const rLoan = await MLoanType.all()

            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rLoan
            };
        } catch (error) {

        }
    }

    public async getCustType({ request, response }) {
        try {
            // const rCustType = await MCustType.query().preload('loans')
            const rCustType = await MCustType.query().preload('loans', (builder) => {
                builder.select('*').distinct()
            })
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rCustType
            };
        } catch (error) {

        }
    }
    public async findCustType({ params, request, response }) {
        try {
            // const rCustType = await MCustType.query().preload('loans')
            const rCustType = await MCustType.query().preload('loans', (builder) => {
                builder.select('*').distinct()
            }).where('id', params.id).first()
            // rCustType?.related('loans').attach([])
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rCustType
            };
        } catch (error) {

        }
    }


    public async getCollaterType({ response }) {
        try {
            const rLoan = await MCollateral.all()

            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rLoan
            };
        } catch (error) {

        }
    }

    public async getApproach({ response }: HttpContextContract) {
        try {
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: await CdApproch.all()
            }
        } catch (error) {

        }

    }

    public async getGradParams({ response }) {
        try {

            const rGrading = await CdApproch.query().preload('qeustions', (builder) => {
                builder.preload('answers')
            })
            response.status(200)
            return {
                error: false,
                code: '200',
                message: '',
                data: rGrading
            }
        } catch (error) {

        }


    }
}
