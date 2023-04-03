import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'
import { AuthResolver } from './auth.resolver';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConfig } from '../config/database.config';
import { Users, UsersSchema } from '../schemas/users.schema';
import { JwtStrategy } from './strategies/jwt.strategy';


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
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '12h' },
    })],
  providers: [AuthService, AuthResolver, UsersService, JwtStrategy]
})
export class AuthModule { }
