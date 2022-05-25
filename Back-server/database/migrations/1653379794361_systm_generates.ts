import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SystmGenerates extends BaseSchema {
  protected tableName = 'systm_generates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product',10)
      table.integer('sec_sr',10)
      table.string('branch',5)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
