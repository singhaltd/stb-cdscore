import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrCustomerTypes extends BaseSchema {
  protected tableName = 'cdsr_customer_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cus_type_id')
      table.string('cus_type_name')
      table.string('cus_type_desc')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
