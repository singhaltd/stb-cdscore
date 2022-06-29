import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MGrading extends BaseModel {
  public static table = 'cdsr_gradings'
  @column({ isPrimary: true })
  public grade: string
  @column()
  public st_val: number
  @column()
  public to_val: number
  @column({ columnName: 'descr' })
  public grade_info: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
