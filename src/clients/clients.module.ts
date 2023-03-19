import { Module } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { ClientsResolver } from './clients.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Clients, ClientsSchema } from '../schemas/clients.schema'
import { DatabaseConfig } from '../config/database.config'

@Module({
	imports: [
		MongooseModule.forRootAsync({
			useClass: DatabaseConfig,
		}),
		MongooseModule.forFeature([
			{
				name: Clients.name,
				schema: ClientsSchema,
			},
		]),
	],
	providers: [ClientsService, ClientsResolver],
})
export class ClientsModule {}
