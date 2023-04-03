import { Module } from '@nestjs/common'

import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigModule } from '@nestjs/config'
import environment from './config/environment.config'

import { AccountsModule } from './accounts/accounts.module'
import { ClientsModule } from './clients/clients.module'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { DatabaseConfig } from './config/database.config'
import { AuthModule } from './auth/auth.module';

const { NODE_ENV } = process.env
const prod = !NODE_ENV || NODE_ENV === 'production'
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: !prod ? `./environment/${process.env.NODE_ENV}.env` : '',
			isGlobal: true,
			load: [environment],
			// validationSchema: environmentSchema,
		}),
		AccountsModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'src/schema.gql',
		}),
		ClientsModule,
		UsersModule,
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
