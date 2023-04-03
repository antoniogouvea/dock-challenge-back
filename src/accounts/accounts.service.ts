import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { Clients } from '../clients/models/clients.model'
import { AccountsDocument, Accounts } from '../schemas/accounts.schema'
import { newAccountAdapter } from './adapter/account.adapter'
import { CreateAccountArgs, ValueToUpdateArgs } from './dto/account.dto'
import { AccountSummary } from './models/accounts.model'

@Injectable()
export class AccountsService {
	constructor(@InjectModel(Accounts.name) private accountsModel: Model<AccountsDocument>) { }
	async findAll(): Promise<any> {
		return await this.accountsModel.find().select('-__v')
	}

	async findById(_id: string): Promise<any> {
		return await this.accountsModel.findOne({ _id: new Types.ObjectId(_id) }).populate('client', 'name', 'Clients').select('-__v')
	}
	async calculateBalance() { }

	async createAccount(createAccountArgs: CreateAccountArgs): Promise<Accounts> {
		// if (!createAccountArgs?._id) delete createAccountArgs._id
		const newAccount = newAccountAdapter(createAccountArgs)

		return await this.accountsModel
			.findOneAndUpdate({ _id: newAccount._id }, newAccount, { new: true, upsert: true })
			.populate('client', 'name', 'Clients')
			.exec()
	}

	async updateValueToAccount(valueToUpdate: ValueToUpdateArgs): Promise<Accounts> {
		const account = await this.accountsModel.findOne({ accountNumber: valueToUpdate.account }).lean()
		const newBalance = this.checkOperation(valueToUpdate, account?.balance)

		return await this.accountsModel
			.findOneAndUpdate(
				{ _id: account._id },
				{ $push: { operations: { _id: new Types.ObjectId(), ...valueToUpdate, createdAt: new Date() } }, balance: newBalance },
				{ new: true, upsert: true }
			)
			.exec()
	}

	private checkOperation(valuetoUpdate, balance) {
		let total = 0
		if (valuetoUpdate.transactionType === 'add') total = valuetoUpdate.value + balance
		if (valuetoUpdate.transactionType === 'withdraw') total = balance - valuetoUpdate.value
		return total
	}
}
