import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import MCustType from '../CDSR/MCustType'

export default class CustTypeFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof MCustType, MCustType>

  public static blacklist: string[] = ['secretMethod']
  id(id: number) {
    this.$query.where((builder) => {
      builder
        .where('id', '=', `${id}`)
    })
  }
}
