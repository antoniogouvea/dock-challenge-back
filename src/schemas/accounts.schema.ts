import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { Clients } from './clients.schema'

export type AccountsDocument = HydratedDocument<Accounts>

export class Operations {
	@Prop()
	createdAt: Date

	@Prop()
	value: number

	@Prop()
	user: string
}

@Schema()
export class Accounts {
	@Prop()
	agency: number

	@Prop()
	accountNumber: number

	@Prop({ ref: 'Clients' })
	client: string

	@Prop()
	_id: string

	@Prop()
	balance: number

	@Prop()
	operations: [Operations]
}

export const AccountsSchema = SchemaFactory.createForClass(Accounts)
