import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CtyCountries extends BaseSchema {
  protected tableName = 'cty_countries'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('country_code', 5).primary().unique()
      table.string('country_name', 50)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
