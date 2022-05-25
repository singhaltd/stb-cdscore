import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MUpersonal extends BaseModel {
  public static table = "sstm_personals"
  @column({ isPrimary: true })
  public cust_id: string
  @column()
  public firstname: string
  @column()
  public lastname: string
  @column()
  public dob: Date
  @column()
  public email: string
  @column()
  public mobile: string
  @column()
  public mobile1: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
