import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColOther extends BaseModel {
  public static table = 'cdsr_col_other'
  @column({ isPrimary: true, columnName: 'ref_key' })
  public id: number
  @column({ columnName: 'col_type' })
  public type: string
  @column({ columnName: 'col_own' })
  public owner: string
  @column()
  public doc_no: string
  @column()
  public issue_date: string
  @column()
  public verify_by: string
  @column()
  public weight: string
  @column()
  public unit: string
  @column()
  public price: number
  @column()
  public total: number
  @column()
  public maker: string
  @column()
  public cust_no:string
  @column()
  public cate:number
  @column()
  public seq:number
  @column()
  public fcy_total:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hasColtype(colo: MColOther){
    if(!colo.$dirty.cate){
      colo.cate = 8
      colo.total = colo.price
    }
  }
}
