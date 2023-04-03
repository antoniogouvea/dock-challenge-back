import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import { AuthType, TokenValidate } from './dto/auth.type';
import { UsersModel } from '../users/models/users.model';

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @Mutation(() => AuthType)
    async login(@Args('data') data: AuthInput): Promise<AuthType> {
        const response = await this.authService.validateUser(data.email, data.password)
        return response
    }

    @Query(() => AuthType)
    async validateToken(@Args('token') token: string): Promise<AuthType> {
        return await this.authService.validateToken(token)
    }

}
