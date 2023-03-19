import { Directive, Field, ID, ObjectType, OmitType } from '@nestjs/graphql'
import { Clients } from '../../clients/models/clients.model'
import { Operations } from './operations.model'

@ObjectType({ description: 'accounts' })
export class Accounts {
	@Field()
	_id: string
	@Field()
	agency: number

	@Field()
	accountNumber: number

	@Field(type => Clients)
	client: Clients

	@Field()
	balance: number

	@Field(type => [Operations])
	operations: [Operations]
}

@ObjectType()
export class AccountSummary extends OmitType(Accounts, ['operations']) {}
