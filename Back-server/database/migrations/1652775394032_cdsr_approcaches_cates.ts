import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrApprocachesCates extends BaseSchema {
  protected tableName = 'cdsr_approcaches_cates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id',10).primary().unique()
      table.string('title',50)

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
