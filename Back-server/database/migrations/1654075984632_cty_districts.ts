import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CtyDistricts extends BaseSchema {
  protected tableName = 'cty_districts'
  
  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('dt_name', 100)
      table.integer('pv_code').unsigned().references('id').inTable('cty_provinces').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
