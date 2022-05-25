import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SstbAccessNavs extends BaseSchema {
  protected tableName = 'sstb_access_navs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 50)
      table.integer('parent')
      table.string('target', 20).unsigned().references('target').inTable('sstb_access_targets').onDelete('CASCADE')
      table.string('slug', 50)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
