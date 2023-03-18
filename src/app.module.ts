import { Module } from '@nestjs/common'

import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { AccountsModule } from './accounts/accounts.module'
import { ClientsModule } from './clients/clients.module'
import { UsersModule } from './users/users.module'

@Module({
	imports: [
		AccountsModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'src/schema.gql',
		}),
		ClientsModule,
		UsersModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
