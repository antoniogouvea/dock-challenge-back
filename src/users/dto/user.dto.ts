import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql'

@InputType()
class Client {

	@Field()
	"name": string
	@Field()
	"cpf": string

}
@InputType()
export class CreateUserDto {

	@Field()
	name: string

	@Field()
	email: string

	@Field()
	password: string

}

// @ObjectType()
// export class User 
