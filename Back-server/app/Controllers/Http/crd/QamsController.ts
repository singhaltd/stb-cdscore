import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import CdQuestionMap from 'App/Models/CdQuestionMap';

import CdApproch from "App/Models/CDSR/CdApproch";
import MCollateral from "App/Models/CDSR/MCollateral";
import MCustType from "App/Models/CDSR/MCustType";
import MLoanType from "App/Models/CDSR/MLoanType";
import Vwquestion from 'App/Models/CDSR/Vwquestion';


export default class QamsController {

    public async getQlntype({ params, response }: HttpContextContract) {
        try {
            // const data = await Database.from('cdsr_question_mapings')
            //             .innerJoin('cdsr_questions','cdsr_question_mapings.quetion_id','=','cdsr_questions.q_id')
            //             .innerJoin('cdsr_loan_types','cdsr_question_mapings.loan_type','=','cdsr_loan_types.ln_type_id')
            //             .innerJoin('cdsr_customer_types','cdsr_question_mapings.cust_type','=','cdsr_customer_types.cus_type_id')
            //             .select('cdsr_questions.*','cdsr_customer_types.cus_type_id','cdsr_loan_types.ln_type_id')
            const data = await CdApproch.query().preload('vQuestions',(q)=> {
                q.preload('answers').where('loan_type',params.loan_type).andWhere('cust_type',params.cust_type).andWhere('exp_id',params.exp_id)
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
