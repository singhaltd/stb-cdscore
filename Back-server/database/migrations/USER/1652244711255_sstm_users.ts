import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SstmUsers extends BaseSchema {
  protected tableName = 'sstm_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('user_id',20).primary().unique()
      table.string('fullname',100)
      table.string('email',100).unique()
      table.string('mobile',25).unique()
      table.string('password')
      table.string('shal')

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
