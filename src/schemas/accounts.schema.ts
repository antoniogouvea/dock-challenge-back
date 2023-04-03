import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { Clients } from './clients.schema'

export type AccountsDocument = HydratedDocument<Accounts>

@Schema({ id: true })
export class Operations {
	@Prop()
	_id: Types.ObjectId

	@Prop()
	value: number

	@Prop()
	transactionType: string

	@Prop()
	user: string

	@Prop({ default: () => Date.now() })
	createdAt: Date
}
export const OperationsSchema = SchemaFactory.createForClass(Operations)
@Schema()
export class Accounts {
	@Prop()
	agency: number

	@Prop()
	accountNumber: number

	@Prop({ type: Clients })
	client: Clients

	@Prop()
	_id: string

	@Prop()
	balance: number

	@Prop()
	operations: [Operations]
}

export const AccountsSchema = SchemaFactory.createForClass(Accounts)
