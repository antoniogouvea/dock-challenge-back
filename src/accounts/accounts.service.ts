import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { AccountsDocument, Accounts } from '../schemas/accounts.schema'
import { CreateAccountArgs } from './dto/account.dto'
import { AccountSummary } from './models/accounts.model'

@Injectable()
export class AccountsService {
	constructor(@InjectModel(Accounts.name) private accountsModel: Model<AccountsDocument>) {}
	async findAll(): Promise<[AccountSummary]> {
		return [
			{
				_id: '',
				agency: 123,
				accountNumber: 456,
				balance: 42,
				client: {
					_id: '123',
					cpf: '123',
					name: 'john',
				},
			},
		]
	}
	async calculateBalance() {}

	async createAccount(createAccountArgs: CreateAccountArgs): Promise<Accounts> {
		if (!createAccountArgs?._id) delete createAccountArgs._id
		const newAccount = {
			_id: !createAccountArgs?._id
				? new Types.ObjectId().toString()
				: new Types.ObjectId(createAccountArgs?._id).toString(),
			...createAccountArgs,
		}

		return await this.accountsModel
			.findOneAndUpdate({ _id: newAccount._id }, newAccount, { new: true, upsert: true })
			.exec()
	}
}
