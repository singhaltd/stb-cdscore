import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColVihicle extends BaseModel {
  public static table = 'cdsr_col_vehicle'
  @column({ isPrimary: true, columnName: 'col_vehicle_id' })
  public id: number
  @column({ columnName: 'vehicle_brand' })
  public brand: string
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
  public cust_no: string
  @column()
  public maker: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
