import { ArgsType, Field, InputType, Int, ObjectType, OmitType, PartialType } from '@nestjs/graphql'
import { NewClientData } from '../../clients/dto/clients.dto'
import { Clients } from '../../clients/models/clients.model'
import { Accounts } from '../models/accounts.model'

@InputType()
export class OperationsDto {
	@Field(type => Date)
	createAt: Date

	@Field(type => Int)
	value: 0

	@Field(type => Int)
	user = null
}

@InputType()
export class AccountArgs {
	@Field(type => Int)
	agency = 123

	@Field(type => Int)
	accountNumber = 456

	@Field(type => NewClientData)
	client = NewClientData

	@Field(type => [OperationsDto])
	operations = [OperationsDto]
}

@InputType()
export class CreateAccountArgs {
	@Field({ nullable: true })
	_id?: string

	@Field(type => Int)
	agency = 123

	@Field(type => Int)
	accountNumber = 456

	@Field(type => String)
	client = '123'
}

@InputType()
export class ValueToUpdateArgs {
	@Field(type => Number)
	value: number

	@Field()
	transactionType: string

	@Field()
	user: string

	@Field()
	account: string
}
