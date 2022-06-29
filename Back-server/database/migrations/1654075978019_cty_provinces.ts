import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CtyProvinces extends BaseSchema {
  protected tableName = 'cty_provinces'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('pv_name')
      table.string('country_code',5).unsigned().references('country_code').inTable('cty_countries').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
