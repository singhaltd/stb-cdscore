import { BaseModel, column, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import MNavlink from '../Permiss/MNavlink'

export default class MuRole extends BaseModel {
  public static table = "sstm_user_roles"
  @column({ isPrimary: true, columnName: 'role_id' })
  public id: string
  @column()
  public title: string
  @column()
  public info: string


  @manyToMany(()=> MNavlink,{
    localKey: 'id',
    relatedKey:'id',
    pivotForeignKey: 'role_id',
    pivotRelatedForeignKey: 'access_nav',
    serializeAs:'links',
    pivotTable: 'sstm_role_mapings',
  })
  public NavLink: ManyToMany<typeof MNavlink>
}
