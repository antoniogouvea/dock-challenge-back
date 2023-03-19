import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DatabaseConfig } from '../config/database.config'
import { Accounts, AccountsSchema } from '../schemas/accounts.schema'
import { AccountsResolver } from './accounts.resolver'
import { AccountsService } from './accounts.service'

@Module({
	imports: [
		MongooseModule.forRootAsync({
			useClass: DatabaseConfig,
		}),
		MongooseModule.forFeature([
			{
				name: Accounts.name,
				schema: AccountsSchema,
			},
		]),
	],
	providers: [AccountsService, AccountsResolver],
})
export class AccountsModule {}
