import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrGradings extends BaseSchema {
  protected tableName = 'cdsr_gradings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('grade',4).primary().unique()
      table.float('st_val')
      table.float('to_val')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
