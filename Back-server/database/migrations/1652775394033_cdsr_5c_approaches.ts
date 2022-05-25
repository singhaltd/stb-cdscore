import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cdsr_5cApproaches extends BaseSchema {
  protected tableName = 'cdsr_5c_approaches'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('5c_id')
      table.string('5c_name')
      table.string('5c_desc')
      table.string('category', 10).unsigned().references('id').inTable('cdsr_approcaches_cates').onDelete('CASCADE')

      // /**
      //  * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
      //  */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
