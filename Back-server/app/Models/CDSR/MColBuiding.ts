import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColBuiding extends BaseModel {
  public static table = "cdsr_col_building"
  @column({ isPrimary: true, columnName: 'ref_id' })
  public id: number
  @column()
  public owner: string
  @column()
  public doc_no: string
  @column()
  public issue_date: string
  @column({ columnName: 'b_value' })
  public value: number
  @column({ columnName: 'district_id' })
  public district: number
  @column()
  public village: string
  @column()
  public maker: string
  @column()
  public lcy_total: number
  @column()
  public cate: number
  @column()
  public seq: number
  @column()
  public ccy: string
  @column()
  public cust_no: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async createBuilding(cl: MColBuiding) {
    const Seq = await MColBuiding.query().max('seq').where('cust_no', cl.cust_no)
    if (!cl.$dirty.cate) {
      cl.cate = 4
      cl.seq = (Seq[0].$extras.max || 0) + 1
      cl.lcy_total = cl.value
    }

  }
}
