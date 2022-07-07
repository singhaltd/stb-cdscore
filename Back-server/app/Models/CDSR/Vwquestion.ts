import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import CdQAswer from './CdQAswer'
import Mcusttxn from './Mcusttxn'

export default class Vwquestion extends BaseModel {
  public static table = 'vwq_questions'
  @column({ isPrimary: true, columnName: 'q_id' })
  public id: number
  @column({ columnName: 'q_name' })
  public title: string
  @column({ columnName: 'q_desc' })
  public description: string
  @column({ columnName: 'approach' })
  public apr: string
  @column({ columnName: 'cus_type_id' })
  public cust_type: number
  @column({ columnName: 'ln_type_id' })
  public loan_type: number
  @column({ columnName: 'exp_id' })
  public exp_id: number
  @column()
  public input_type: string

  @hasMany(() => CdQAswer, {
    localKey: 'id',
    foreignKey: 'question_id'
  })
  public answers: HasMany<typeof CdQAswer>

  @hasOne(() => Mcusttxn, {
    localKey: 'id',
    foreignKey: 'question_id',
    serializeAs:'choise',
  })
  public weight: HasOne<typeof Mcusttxn>

}
