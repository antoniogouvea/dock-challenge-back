import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'

export type UsersDocument = HydratedDocument<Users>

@Schema()
export class Users {
	@Prop()
	_id: Types.ObjectId

	@Prop()
	name: string

	@Prop()
	email: string

	@Prop()
	password: string
}

export const UsersSchema = SchemaFactory.createForClass(Users)
