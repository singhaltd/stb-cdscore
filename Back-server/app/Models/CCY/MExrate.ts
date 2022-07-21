import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MExrate extends BaseModel {
  public static table = 'cytb_exchange'
  @column({ isPrimary: true })
  public ccy_type: number
  @column({ columnName: 'buy_rate' })
  public rate: number
  @column()
  public round: number
  @column()
  public trn_dt: string
}
