import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { CreateUserDto } from './dto/user.dto'
import { UsersService } from './users.service'
import { Users } from '../schemas/users.schema'
import { UsersModel } from './models/users.model'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/jwt-auth-guard'

@Resolver(of => Users)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) { }

	// @Query(returns => Users)
	// async getUsersByEmail(@Args('email') email: string): Promise<Users> {
	// 	return await this.usersService.findUserByEmail(email)
	// }
	@UseGuards(GqlAuthGuard)
	@Mutation(returns => UsersModel)
	createUser(@Args('createUser') createUser: CreateUserDto): Promise<UsersModel> {
		return this.usersService.createUser(createUser)
	}
}
