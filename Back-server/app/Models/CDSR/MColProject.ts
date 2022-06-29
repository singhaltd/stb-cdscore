import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColProject extends BaseModel {
  public static table = 'cdsr_col_projects'
  @column({ isPrimary: true, columnName: 'ref_key' })
  public id: number
  @column({ columnName: 'pj_name' })
  public name: string
  @column()
  public doc_no: string
  @column({ columnName: 'issue_date' })
  public issue_date: string
  @column({ columnName: 'expire_date' })
  public expire_date: string
  @column({ columnName: 'pj_value' })
  public value: number
  @column({ columnName: 'ccy_value' })
  public ccy: string
  @column({ columnName: 'pj_pi' })
  public pi_value: number
  @column({ columnName: 'ccy_pi' })
  public ccy_pi: string
  @column({ columnName: 'pj_cur_value' })
  public cur_value: number
  @column({ columnName: 'ccy_cur' })
  public ccy_cur: string
  @column({ columnName: 'lcy_total' })
  public lcy_total: number
  @column()
  public cust_no: string
  @column()
  public village: string
  @column()
  public district: number
  @column()
  public maker: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
