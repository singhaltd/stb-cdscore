import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

export default class CdQAswer extends BaseModel {
  public static table = 'cdsr_question_answ'
  @column({ isPrimary: true })
  public id: number
  @column()
  public title: string
  @column()
  public grade: string
  @column()
  public weight: number
  @column()
  public group_type: string
  @column()
  public question_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => CdQAswer, {
    localKey: 'id',
    foreignKey: 'question_id',
  })
  public banswers: BelongsTo<typeof CdQAswer>
}
