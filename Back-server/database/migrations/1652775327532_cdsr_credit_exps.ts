import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrCreditExps extends BaseSchema {
  protected tableName = 'cdsr_credit_exps'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('exp_id')
      table.string('exp_name')
      table.string('exp_desc')

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
