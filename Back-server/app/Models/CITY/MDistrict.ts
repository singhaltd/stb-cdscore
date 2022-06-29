import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MDistrict extends BaseModel {
  public static table = 'cty_districts'
  @column({ isPrimary: true })
  public id: number
  @column()
  public dt_name: string
  @column()
  public pv_code: number
}
