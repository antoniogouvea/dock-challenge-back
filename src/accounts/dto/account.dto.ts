import { Field, InputType, Int } from '@nestjs/graphql'
import { NewClientData } from '../../clients/dto/clients.dto'

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
class Client {

	@Field()
	"name": string
	@Field()
	"cpf": string

}

@InputType()
export class CreateAccountArgs {

	@Field(type => Int)
	agency = 123

	@Field(type => Int)
	accountNumber = 456

	@Field(type => Client)
	client = Client
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
