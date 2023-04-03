import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'

export type ClientsDocument = HydratedDocument<Clients>

@Schema()
export class Clients {
	@Prop()
	name: string

	@Prop()
	cpf: string

	@Prop()
	_id: string
}

export const ClientsSchema = SchemaFactory.createForClass(Clients)
