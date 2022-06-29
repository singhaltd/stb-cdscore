import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MProvince extends BaseModel {
  public static table = 'cty_provinces'
  @column({ isPrimary: true })
  public id: number
  @column()
  public pv_name: string
}
