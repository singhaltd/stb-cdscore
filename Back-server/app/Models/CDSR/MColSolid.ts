import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class MColSolid extends BaseModel {
  public static table = 'cdsr_col_solids'
  @column({ isPrimary: true, columnName: 'ref_id' })
  public id: number
  @column()
  public doc_no: string
  @column({ columnName: 'sol_size' })
  public size: string
  @column({ columnName: 'sol_owner' })
  public owner: string
  @column()
  public issue_date: string
  @column()
  public road_ad: string
  @column()
  public village: string
  @column()
  public district: number
  @column()
  public cate: number
  @column()
  public price_officer: number
  @column()
  public price_market: number
  @column()
  public price_org: number
  @column()
  public price_total: number
  @column()
  public cust_no: string
  @column()
  public maker:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hasColtype(colo: MColSolid){
    if(!colo.$dirty.col_type){
      colo.cate = 2
    }
  }
}
