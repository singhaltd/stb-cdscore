import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CdsrCustomers extends BaseSchema {
  protected tableName = 'cdsr_customers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cust_no', 10).primary().unique().notNullable()
      table.string('fullname', 100)
      table.string('email', 50)
      table.string('mobile', 100)
      table.string('company', 120)
      table.string('sex', 1)
      table.float('finance_amount')
      table.integer('cust_type').unsigned().references('cus_type_id').inTable('cdsr_customer_types').onDelete('CASCADE')
      table.integer('loan_type').unsigned().references('ln_type_id').inTable('cdsr_loan_types').onDelete('CASCADE')
      table.string('ccy', 3).unsigned().references('ccy_type').inTable('cytb_currencies').onDelete('CASCADE')
      table.integer('period', 3)
      table.string('period_type', 1)
      table.string('perpose')
      table.string('maker', 10)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
