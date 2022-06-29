import { DateTime } from 'luxon'
import { BaseModel, beforeSave, beforeUpdate, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import CdQAswer from './CdQAswer'
export default class Mcusttxn extends BaseModel {
  public static table = 'cdsr_cust_authtxns'
  @column({ isPrimary: true })
  public id: number
  @column()
  public cust_no: string
  @column()
  public question_id: number
  @column()
  public answ_id: number
  @column()
  public loan_type: number
  @column()
  public cust_type: number
  @column()
  public weight: number
  @column()
  public maker: string
  @column({ columnName: 'update_by' })
  public mod_by: string
  @column()
  public grade:string

  @column({ columnName: 'seq_no' })
  public seq: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @beforeSave()
  public static async hasQuestion(qtion: Mcusttxn) {
    const answ = await CdQAswer.findOrFail(qtion.answ_id)
    if (qtion.$dirty.answ_id) {
      qtion.weight = answ.$attributes.weight
      qtion.grade = answ.$attributes.grade
    }
  }
  @beforeUpdate()
  public static async Seque_serail(qtion: Mcusttxn) {
    qtion.seq = qtion.seq + 1
  }

}
