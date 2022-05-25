import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrLoanTypes extends BaseSchema {
  protected tableName = 'cdsr_loan_types'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('ln_type_id')
      table.string('ln_type_name')
      table.string('ln_type_desc')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
