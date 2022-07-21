import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

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
  public mac_type: string
  @column()
  public seq: number
  @column()
  public cate: number
  @column()
  public fcy_total: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async createMachine(cl: MColMachine) {
    const Seq = await MColMachine.query().max('seq').where('cust_no', cl.cust_no)
    if (!cl.$dirty.cate) {
      cl.cate = 6
      cl.seq = (Seq[0].$extras.max || 0) + 1
      cl.cur_price = (cl.buy_price * cl.mac_percent) / 100
      cl.lcy_total = ((cl.buy_price * cl.mac_percent) / 100) * 70 / 100
      cl.fcy_total = ((cl.buy_price * cl.mac_percent) / 100) * 70 / 100
    }

  }
}
