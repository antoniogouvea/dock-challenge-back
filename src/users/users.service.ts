import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Users, UsersDocument } from '../schemas/users.schema'
import { Model, Types } from 'mongoose'
import { CreateUserDto } from './dto/user.dto'
import * as bcrypt from 'bcrypt'
import { UsersModel } from './models/users.model'


@Injectable()
export class UsersService {
	saltRounds = 10;

	constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {
	}

	async findUserById(id: string): Promise<Users> {
		return await this.usersModel.findOne({ _id: new Types.ObjectId(id) }).exec()
	}
	findUserByCpf(cpf: string): Promise<Users> {
		return
	}
	async findUserByEmail(email: string): Promise<Users> {
		return await this.usersModel.findOne({ email: email }).exec()
	}

	async createUser(newUser: CreateUserDto): Promise<UsersModel> {
		const userToSave = {
			password: await bcrypt.hash(newUser.password, this.saltRounds),
			name: newUser.name,
			email: newUser.email
		}

		const response = await this.usersModel.findOneAndUpdate({ _id: new Types.ObjectId() }, userToSave, { new: true, upsert: true }).select('_id name email ').exec()
		return {
			_id: response._id.toString(),
			name: response.name,
			email: response.email
		}

	}
}
