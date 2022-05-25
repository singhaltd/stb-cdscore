import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import CdQAswer from 'App/Models/CDSR/CdQAswer'
import CdApproch from './CdApproch'

export default class CdQuestion extends BaseModel {
  public static table = 'cdsr_questions'
  @column({ isPrimary: true, columnName: 'q_id' })
  public id: number
  @column({ columnName: 'q_name' })
  public title: string
  @column({ columnName: 'q_desc' })
  public description: string
  @column({ columnName: 'approach' })
  public approach: string

  @hasOne(()=> CdApproch,{
    localKey:'approach',
    foreignKey:'id'
  })
  public aprch: HasOne<typeof CdApproch>
  @hasMany(() => CdQAswer, {
    localKey: 'id',
    foreignKey: 'question_id',
  })
  public answers: HasMany<typeof CdQAswer>
  
}
