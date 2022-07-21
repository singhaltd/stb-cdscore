import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColProject extends BaseModel {
  public static table = 'cdsr_col_projects'
  @column({ isPrimary: true, columnName: 'ref_key' })
  public id: number
  @column({ columnName: 'pj_name' })
  public name: string
  @column()
  public doc_no: string
  @column({ columnName: 'issue_date' })
  public issue_date: string
  @column({ columnName: 'expire_date' })
  public expire_date: string
  @column({ columnName: 'pj_value' })
  public value: number
  @column({ columnName: 'ccy_value' })
  public ccy: string
  @column({ columnName: 'pj_pi' })
  public pi_value: number
  @column({ columnName: 'ccy_pi' })
  public ccy_pi: string
  @column({ columnName: 'pj_cur_value' })
  public cur_value: number
  @column({ columnName: 'ccy_cur' })
  public ccy_cur: string
  @column({ columnName: 'lcy_total' })
  public lcy_total: number
  @column()
  public cust_no: string
  @column()
  public village: string
  @column()
  public district: number
  @column()
  public maker: string
  @column()
  public seq: number
  @column()
  public cate: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async createVhicle(cl: MColProject) {
    const Seq = await MColProject.query().max('seq').where('cust_no', cl.cust_no).andWhere('cate', cl.cate)
    if (cl.$dirty.cate && cl.$dirty.cate == 7) {
      cl.seq = (Seq[0].$extras.max || 0) + 1
      cl.cur_value = (cl.value || 0) - (cl.pi_value || 0)
      cl.lcy_total = (((cl.value || 0) - (cl.pi_value || 0)) * 70 / 100)
    } else if (cl.$dirty.cate && cl.$dirty.cate != 7) {
      cl.seq = (Seq[0].$extras.max || 0) + 1
      cl.lcy_total = cl.value
    }

  }
}
