import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import CdQuestion from './CdQuestion'

export default class MLoanType extends BaseModel {
  public static table = 'cdsr_loan_types'
  @column({ isPrimary: true, columnName: 'ln_type_id' })
  public id: number
  @column({ columnName: 'ln_type_name' })
  public name: string
  @column({ columnName: 'ln_type_desc' })
  public description: string

  @manyToMany(() => CdQuestion, {
    localKey:'id',
    relatedKey:'id',
    pivotForeignKey: 'loan_type',
    pivotRelatedForeignKey: 'quetion_id',
    pivotTable: 'cdsr_question_mapings'
  })
  public questions: ManyToMany<typeof CdQuestion>
}
