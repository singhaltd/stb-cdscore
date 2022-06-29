import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrCustAuthtxns extends BaseSchema {
  protected tableName = 'cdsr_cust_authtxns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cust_no',20).unique().notNullable()
      table.integer('question_id').unique().notNullable()
      table.string('answ_id')
      table.float('weight')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
