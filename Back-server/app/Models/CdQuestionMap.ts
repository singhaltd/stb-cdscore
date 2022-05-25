import { BaseModel, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import CdQuestion from './CDSR/CdQuestion'

export default class CdQuestionMap extends BaseModel {
  public static table = "cdsr_question_mapings"
  @column({ isPrimary: true })
  public id: number
  @column()
  public loan_type: number
  @column()
  public cust_type: number
  @column({ columnName: 'quetion_id' })
  public question: number
  @column()
  public exp_id: number
}
