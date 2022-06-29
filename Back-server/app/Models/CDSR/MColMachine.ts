import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColMachine extends BaseModel {
  public static table = 'cdsr_col_machine'
  @column({ isPrimary: true, columnName: 'ref_key' })
  public id: number

  @column()
  public col_type: number
  @column({ columnName: 'col_own' })
  public owner: string
  @column()
  public model_no: string
  @column()
  public buy_year: string
  @column()
  public manual_year: string
  @column()
  public mac_percent: number
  @column()
  public buy_price: number
  @column()
  public cur_price: number
  @column()
  public total_price: number
  @column()
  public village: string
  @column()
  public district: number
  @column()
  public lcy_total: number
  @column()
  public maker: string
  @column()
  public cust_no: string
  @column()
  public mac_type:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
