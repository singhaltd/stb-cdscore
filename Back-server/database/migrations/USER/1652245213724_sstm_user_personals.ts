import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SstmUserPersonals extends BaseSchema {
  protected tableName = 'sstm_user_personals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('user_id').primary().unique()
      table.string('firstname')
      table.string('lastname')
      table.date('dob')
      table.string('email')
      table.string('mobile')
      table.string('mobile1')

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
