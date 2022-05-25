import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MBranch extends BaseModel {
  public static table = "sttm_branches"
  @column({ isPrimary: true })
  public branch_code: string
  @column()
  public branch_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
