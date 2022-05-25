import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SstmUserRoles extends BaseSchema {
  protected tableName = 'sstm_user_roles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('role_id', 20).primary().unique()
      table.string('title', 100)
      table.string('info')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
