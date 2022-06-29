import { DateTime } from 'luxon'
import moment from 'moment'
import { BaseModel, beforeCreate, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import MLoanType from './MLoanType'
import MCustType from './MCustType'
import MBranch from '../User/MBranch'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import CustomerFilter from 'App/Models/Filters/CustomerFilter'

export default class MCustomer extends compose(BaseModel, Filterable) {
  public static table = 'cdsr_customers';
  public static $filter = () => CustomerFilter;
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
  public branch_code: string
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
  @column()
  public int_rate: number
  @column()
  public rec_stat: string
  @column()
  public event_stat: string

  @column()
  public exp:string

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime | null) => {
      return value ? moment(value).format('DD/MM/YYYY, h:mm:ss') : value
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true, autoUpdate: true, serialize: (value: DateTime | null) => {
      return value ? moment(value).format('DD/MM/YYYY, h:mm:ss') : value
    },
  })
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

  @hasOne(() => MBranch, {
    localKey: 'branch_code',
    foreignKey: 'branch_code'
  })
  public branch: HasOne<typeof MBranch>


  @beforeCreate()
  public static async CustomereEventSate(cust: MCustomer) {
    if (!cust.$dirty.rec_stat) {
      cust.rec_stat = 'N'
    }
    if (!cust.$dirty.event_stat) {
      cust.event_stat = 'N'
    }
  }

}
