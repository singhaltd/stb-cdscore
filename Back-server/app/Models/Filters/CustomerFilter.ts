import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Customer from 'App/Models/CDSR/MCustomer'

export default class CustomerFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Customer, Customer>

  public static blacklist: string[] = ['secretMethod']
  cust_no(cust_no: string) {
    this.$query.where('cust_no', cust_no)
  }
}
