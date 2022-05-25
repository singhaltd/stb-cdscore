import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MuRole extends BaseModel {
  public static table = "sstm_user_roles"
  @column({ isPrimary: true, columnName: 'role_id' })
  public id: string
  @column()
  public title: string
  @column()
  public info: string
}
