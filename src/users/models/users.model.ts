import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'users' })
export class UsersModel {
	@Field()
	_id: string

	@Field()
	name: string

	@Field()
	email: string

}
