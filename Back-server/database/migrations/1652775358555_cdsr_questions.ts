import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrQuestions extends BaseSchema {
  protected tableName = 'cdsr_questions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 100)
      table.string('grade', 1)
      table.float('weight', 2)
      table.string('group_type',10)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
