import { ArgsType, Field, InputType, Int, ObjectType, OmitType, PartialType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

// @ObjectType()
// export class ClientsDto {
// 	@Field(type => String)
// 	_id: string
// 	@Field()
// 	name: string
// 	@Field()
// 	cpf: string
// }

@InputType()
export class NewClientData {
	@Field(type => String)
	@IsOptional()
	_id?: string

	@Field(type => String)
	cpf: string

	@Field(type => String)
	name: string
}
