import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrCollateralTypes extends BaseSchema {
  protected tableName = 'cdsr_collateral_types'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('col_type_id')
      table.string('col_type_name')
      table.string('col_type_desc')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
      //  */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
