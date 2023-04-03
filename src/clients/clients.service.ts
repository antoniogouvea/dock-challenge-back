import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { ClientsDocument, Clients } from '../schemas/clients.schema'
import { NewClientData } from './dto/clients.dto'
// import { Clients } from './models/clients.model'

@Injectable()
export class ClientsService {
	constructor(@InjectModel(Clients.name) private clientsModel: Model<ClientsDocument>) {}

	async createOrUpdateClient(client: NewClientData): Promise<Clients> {
		if (!client?._id) delete client._id
		const newClient = { _id: !client._id ? new Types.ObjectId() : new Types.ObjectId(client?._id), ...client }
		return await this.clientsModel
			.findOneAndUpdate({ _id: newClient._id }, newClient, { new: true, upsert: true })
			.exec()
	}
}
