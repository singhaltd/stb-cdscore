import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColAccount extends BaseModel {
  public static table="cdsr_col_ac_dep"
  @column({ isPrimary: true,columnName:'ref_key' })
  public id: number
  @column()
  public ac_name:string
  @column()
  public ac_no:string
  @column()
  public cif:string
  @column()
  public interest:number
  @column()
  public ccy:string
  @column()
  public open_date:string
  @column()
  public expire_date:string
  @column()
  public amount:number
  @column()
  public district:number
  @column()
  public village:string
  @column()
  public maker:string
  @column()
  public cust_no:string
  @column()
  public seq:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
