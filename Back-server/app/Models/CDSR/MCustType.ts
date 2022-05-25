import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, column, hasMany, HasMany, HasManyThrough, hasManyThrough, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import MLoanType from 'App/Models/CDSR/MLoanType'
import CustTypeFilter from '../Filters/CustTypeFilter'
import CdQuestion from './CdQuestion'

export default class MCustType extends compose(BaseModel, Filterable) {
  public static table = 'cdsr_customer_types'
  public static $filter = () => CustTypeFilter;
  @column({ isPrimary: true, columnName: 'cus_type_id' })
  public id: number
  @column({ columnName: 'cus_type_name' })
  public name: string
  @column({ columnName: 'cus_type_desc' })
  public description: string

  @hasMany(()=> MLoanType,{
    localKey: 'id'
  })
  public loan_type: HasMany<typeof MLoanType>

  @manyToMany(() => MLoanType, {
    localKey: 'id',
    relatedKey:'id',
    pivotForeignKey: 'cust_type',
    pivotRelatedForeignKey: 'loan_type',
    pivotTable: 'cdsr_question_mapings'
  })
  public loans: ManyToMany<typeof MLoanType>
}
