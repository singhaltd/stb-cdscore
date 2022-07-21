import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColVihicle extends BaseModel {
  public static table = 'cdsr_col_vehicle'
  @column({ isPrimary: true, columnName: 'col_vehicle_id' })
  public id: number
  @column({ columnName: 'vehicle_brand' })
  public brand: string
  @column({ columnName: 'vehicle_type_id' })
  public type_id: number
  @column({ columnName: 'vehicle_model' })
  public model: string
  @column({ columnName: 'vehicle_color' })
  public color: string
  @column({ columnName: 'vehicle_engine' })
  public engine: string
  @column({ columnName: 'vehicle_tank' })
  public tank: string
  @column({ columnName: 'vehicle_issue_date' })
  public issue_date: string
  @column({ columnName: 'vehicle_expire_date' })
  public expire_date: string
  @column({ columnName: 'vehicle_owner' })
  public owner: string
  @column({ columnName: 'vehicle_village' })
  public village: string
  @column({ columnName: 'vehicle_dist_id' })
  public district: number
  @column({ columnName: 'vehicle_values' })
  public vh_value: number
  @column()
  public vh_registration: string
  @column()
  public cust_no: string
  @column()
  public maker: string
  @column()
  public seq: number
  @column()
  public ccy: string
  @column()
  public cate: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async createVhicle(cl: MColVihicle) {
    const Seq = await MColVihicle.query().max('seq').where('cust_no', cl.cust_no)
    console.log(Seq[0])
    if (!cl.$dirty.cate) {
      cl.cate = 5
      cl.seq = (Seq[0].$extras.max || 0) + 1
    }

  }
}
