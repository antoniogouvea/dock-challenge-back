import { Directive, Field, ID, ObjectType } from '@nestjs/graphql'
import { Clients } from '../../clients/models/clients.model'
import { Operations } from './operations.model'

@ObjectType({ description: 'accounts ' })
export class Accounts {
	@Field()
	agency: number

	@Field()
	accountNumber: number

	@Field(type => Clients)
	client: Clients

	@Field(type => [Operations])
	operations: [Operations]
}
