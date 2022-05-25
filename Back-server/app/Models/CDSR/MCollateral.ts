import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MCollateral extends BaseModel {
  public static table = 'cdsr_collateral_types'
  @column({ isPrimary: true, columnName: 'col_type_id' })
  public id: number
  @column({ columnName: 'col_type_name' })
  public name: string
  @column({ columnName: 'col_type_desc' })
  public description: string
}
