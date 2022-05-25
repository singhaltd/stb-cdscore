import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import MLoanType from '../CDSR/MLoanType'


export default class LoanFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof MLoanType, MLoanType>

  public static blacklist: string[] = ['secretMethod']
  lid(id: number) {
    this.$query.where((builder) => {
      builder
        .where('id', '=', `${id}`)
    })
  }
}
