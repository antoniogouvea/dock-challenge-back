import { Injectable } from '@nestjs/common'
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose'
import config from './environment.config'

@Injectable()
export class DatabaseConfig implements MongooseOptionsFactory {
	createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
		return config().database
	}
}
