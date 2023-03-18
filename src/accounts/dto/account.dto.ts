import { ArgsType, Field, InputType, Int, ObjectType, OmitType, PartialType } from '@nestjs/graphql'
import { Clients } from '../../clients/models/clients.model'

@ObjectType()
export class OperationsDto {
	@Field(type => Date)
	createAt: Date

	@Field(type => Int)
	value: 0

	@Field(type => Int)
	user = null
}

@ObjectType()
export class AccountArgs {
	@Field(type => Int)
	agency = 123

	@Field(type => Int)
	accountNumber = 456

	@Field(type => Clients)
	client = Clients

	@Field(type => [OperationsDto])
	operations = [OperationsDto]
}

@ObjectType()
export class AccountSummary extends OmitType(AccountArgs, ['operations']) {}
