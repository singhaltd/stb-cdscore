import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import MDepartment from './MDepartment'
import MUpersonal from './MUpersonal'
export default class SstmUser extends BaseModel {
  public static table = "sstm_users"
  @column({ isPrimary: true, columnName: 'user_id' })
  public username: string
  @column()
  public cust_id: string
  @column()
  public fullname: string
  @column()
  public mobile: string
  @column()
  public email: string
  @column()
  public role_id: string
  @column()
  public branch_code: string
  @column()
  public dep_id: number
  @column()
  public password: string
  @column()
  public shal: string

  @column({ columnName: 'restrictAddress' })
  public restrictAddress: string
  @column({ columnName: 'restrictAuth' })
  public restrictAuth: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => MDepartment, {
    localKey: '',
    foreignKey: ''
  })
  public department: HasOne<typeof MDepartment>

  @belongsTo(() => MUpersonal, {
    localKey: 'cust_id',
    foreignKey: 'cust_id'
  })
  public personal: BelongsTo<typeof MUpersonal>
  @beforeSave()
  public static async hashPassword(user: SstmUser) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
    if (user.$dirty.restrictAddress !== '') {
      user.restrictAuth = 'T'
    } else {
      user.restrictAuth = 'F'
    }
    if (!user.$dirty.role_id) {
      user.role_id = 'GUEST'
    }
  }
  @hasOne(() => MDepartment, {
    localKey: 'dep_id',
    foreignKey: 'id'
  })
  public dept: HasOne<typeof MDepartment>
}
