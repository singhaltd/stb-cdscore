import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import MLoanType from './MLoanType'
import MCustType from './MCustType'

export default class MCustomer extends BaseModel {
  public static table = 'cdsr_customers'
  @column({ isPrimary: true })
  public cust_no: string
  @column()
  public fullname: string
  @column()
  public email: string
  @column()
  public mobile: string
  @column()
  public company: string
  @column()
  public sex: string
  @column({ columnName: 'finance_amount' })
  public finance: number
  @column()
  public ccy: string
  @column()
  public cust_type: number
  @column()
  public loan_type: number
  @column()
  public period: number
  @column()
  public period_type: string
  @column()
  public perpose: string
  @column()
  public maker: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => MLoanType, {
    localKey: 'loan_type',
    foreignKey: 'id'
  })
  public lntype: HasOne<typeof MLoanType>
  
  @hasOne(() => MCustType, {
    localKey: 'cust_type',
    foreignKey: 'id'
  })
  public cust_cate: HasOne<typeof MCustType>

}
