import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColleteral extends BaseModel {
  public static table = 'vw_colleter_log'
  @column()
  public ref_id: number
  @column()
  public cust_no: string
  @column()
  public cate: number
  @column({ columnName: 'col_type_name' })
  public type_name: string
  @column({columnName:'descriptino'})
  public description: string
  @column()
  public price_m: number
  @column()
  public price_f: number
  @column()
  public price_o: number
  @column()
  public asset_tal: number
  @column()
  public sol_size: number
  @column()
  public price_market: number
  @column()
  public price_officer: number
  @column()
  public price_org: number
  @column()
  public seq: string
  @column()
  public rn: number
}
