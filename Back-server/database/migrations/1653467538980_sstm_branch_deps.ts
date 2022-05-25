import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SstmBranchDeps extends BaseSchema {
  protected tableName = 'sstm_branch_deps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('branch_code',5)
      table.integer('department',1)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
