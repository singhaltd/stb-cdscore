import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import SstmUser from 'App/Models/User/SstmUser'
import MCustomer from 'App/Models/CDSR/MCustomer'

export default class CustomerPolicy extends BasePolicy {
	public async viewList(userSstmUser: SstmUser) { }
	public async view(userSstmUser: SstmUser, cdsrMCustomer: MCustomer) { }
	public async create(userSstmUser: SstmUser) { }
	public async update(userSstmUser: SstmUser, cdsrMCustomer: MCustomer) { }
	public async delete(userSstmUser: SstmUser, cdsrMCustomer: MCustomer) { }
}
