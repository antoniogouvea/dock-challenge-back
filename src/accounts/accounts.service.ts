import { Injectable } from '@nestjs/common'
import { AccountArgs } from './dto/account.dto'
import { Accounts } from './models/accounts.model'

@Injectable()
export class AccountsService {
	async findAll(): Promise<[Omit<Accounts, 'operations'>]> {
		return [
			{
				agency: 123,
				accountNumber: 456,
				client: {
					_id: '123',
					cpf: '123',
					name: 'john',
				},
			},
		]
	}
}
