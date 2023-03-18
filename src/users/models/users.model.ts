import { Directive, Field, ID, ObjectType } from '@nestjs/graphql'
import { Types } from 'mongoose'

@ObjectType({ description: 'users' })
export class Users {
	@Field()
	_id: string

	@Field()
	name: string

	@Field()
	cpf: string
}
