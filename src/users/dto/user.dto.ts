import { ArgsType, Field, Int } from '@nestjs/graphql'

@ArgsType()
export class UsersId {
	@Field()
	id = '123'
}

@ArgsType()
export class UsersCpf {
	@Field()
	cpf = '123'
}
