import { Injectable } from '@nestjs/common'
import { Users } from './models/users.model'

@Injectable()
export class UsersService {
	constructor() {}

	findUserById(id: string): Promise<Users> {
		return
	}
	findUserByCpf(cpf: string): Promise<Users> {
		return
	}
}
