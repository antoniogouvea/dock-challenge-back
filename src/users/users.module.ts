import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Users, UsersSchema } from '../schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConfig } from '../config/database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseConfig,
    }),
    MongooseModule.forFeature([
      {
        name: Users.name,
        schema: UsersSchema,
      },
    ]),
  ],
  providers: [UsersService, UsersResolver]
})
export class UsersModule { }
