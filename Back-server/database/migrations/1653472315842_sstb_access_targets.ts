import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SstbAccessTargets extends BaseSchema {
  protected tableName = 'sstb_access_targets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('target', 20).primary().unique()
      table.string('info')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
