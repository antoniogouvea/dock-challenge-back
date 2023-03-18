import { Directive, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Operations {
	@Field(type => Date)
	createdAt: Date

	@Field()
	value: number

	@Field()
	user: string
}
