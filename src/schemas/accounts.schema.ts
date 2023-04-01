import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { Clients } from './clients.schema'

export type AccountsDocument = HydratedDocument<Accounts>

@Schema({ timestamps: true })
export class Operations {
	@Prop()
	value: number

	@Prop()
	transactionType: string

	@Prop()
	user: string
}
export const OperationsSchema = SchemaFactory.createForClass(Operations)
@Schema()
export class Accounts {
	@Prop()
	agency: number

	@Prop()
	accountNumber: number

	@Prop({ type: Types.ObjectId, ref: 'Clients' })
	client: Types.ObjectId

	@Prop()
	_id: string

	@Prop()
	balance: number

	@Prop()
	operations: [Operations]
}

export const AccountsSchema = SchemaFactory.createForClass(Accounts)
