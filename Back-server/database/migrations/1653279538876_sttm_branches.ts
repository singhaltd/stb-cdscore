import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SttmBranches extends BaseSchema {
  protected tableName = 'sttm_branches'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('branch_code',4).primary().unique()
      table.string('branch_name',10)

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
