import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MNavlink extends BaseModel {
  public static table = "sstb_access_navs"
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public parent: number
  @column()
  public target: string
  @column()
  public slug: string
  @column()
  public icon: string
}
