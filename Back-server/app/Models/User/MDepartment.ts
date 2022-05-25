import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MDepartment extends BaseModel {
  public static table = "sstm_departments"
  @column({ isPrimary: true })
  public id: number
  @column()
  public dep_name: string
  @column()
  public info: string
}
