import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MExpType extends BaseModel {
  public static table = 'cdsr_credit_exps'
  @column({ isPrimary: true, columnName: 'exp_id' })
  public id: string
  @column({ columnName: 'exp_name' })
  public title: string
  @column({ columnName: 'exp_desc' })
  public descr: string

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
