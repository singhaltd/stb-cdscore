import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrQuestionMapings extends BaseSchema {
  protected tableName = 'cdsr_question_mapings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('approach').unsigned().references('5c_id').inTable('cdsr_5c_approaches').onDelete('CASCADE')
      table.integer('loan_type').unsigned().references('ln_type_id').inTable('cdsr_loan_types').onDelete('CASCADE')
      table.integer('cust_type').unsigned().references('cus_type_id').inTable('cdsr_customer_types').onDelete('CASCADE')
      table.string('input_type', 20)
      table.unique(['approach', 'loan_type', 'cust_type'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
