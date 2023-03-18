import { ArgsType, Directive, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'clients ' })
export class Clients {
	@Field()
	_id: string
	@Field()
	name: string
	@Field()
	cpf: string
}
