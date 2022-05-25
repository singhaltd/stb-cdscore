import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import CdQuestion from './CdQuestion'
import Vwquestion from './Vwquestion'
export default class CdApproch extends BaseModel {
  public static table = 'cdsr_approcaches'
  @column({ isPrimary: true, columnName: '' })
  public id: string
  @column({ columnName: '' })
  public title: string

  @hasMany(() => CdQuestion, {
    localKey: 'id', 
    foreignKey:'approach'
  })
  public qeustions: HasMany<typeof CdQuestion>

  @hasMany(()=> Vwquestion,{
    localKey:'id',
    foreignKey:'apr',
    serializeAs:'qeustions'
  })
  public vQuestions: HasMany<typeof Vwquestion>
}
