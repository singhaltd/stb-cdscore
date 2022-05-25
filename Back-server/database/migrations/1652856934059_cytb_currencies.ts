import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CytbCurrencies extends BaseSchema {
  protected tableName = 'cytb_currencies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('ccy_type', 3).primary().unique().notNullable()
      table.string('ccy_code', 3).unique()
      table.string('description', 100)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
