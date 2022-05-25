import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Mccy extends BaseModel {
  public static table = 'cytb_currencies';
  @column({ isPrimary: true, columnName: 'ccy_type' })
  public ccy: string
  @column({ columnName: 'ccy_code' })
  public ccy_type: number
  @column({ columnName: 'description' })
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
