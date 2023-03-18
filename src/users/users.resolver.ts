import { Args, Query, Resolver } from '@nestjs/graphql'
import { UsersCpf, UsersId } from './dto/user.dto'
import { Users } from './models/users.model'
import { UsersService } from './users.service'

@Resolver(of => Users)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(returns => Users)
	getUsersById(@Args('id') id: string): Promise<Users> {
		return this.usersService.findUserById(id)
	}

	@Query(returns => Users)
	getUsersByCpf(@Args('cpf') cpf: string): Promise<Users> {
		return this.usersService.findUserByCpf(cpf)
	}
}
