import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Refgen extends BaseModel {
  public static table = 'systm_generates'
  @column({ isPrimary: true })
  public id: number
  @column()
  public product:string
  @column({columnName:'sec_sr'})
  public sec:number
  @column()
  public branch:string
}
