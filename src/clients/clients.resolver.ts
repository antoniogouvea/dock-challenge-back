import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ClientsService } from './clients.service'
import { NewClientData } from './dto/clients.dto'
import { Clients } from './models/clients.model'

@Resolver(of => Clients)
export class ClientsResolver {
	constructor(private readonly clientsService: ClientsService) {}

	@Mutation(returns => Clients)
	async addClient(@Args('newClientData') newClientData: NewClientData): Promise<Clients> {
		const client = await this.clientsService.createOrUpdateClient(newClientData)
		return client
	}

	// @Query(returns => Clients)
	// async getClient(@Args('newClientData') newClientData: NewClientData): Promise<Clients> {
	// 	const client = await this.clientsService.getClientById(newClientData)
	// 	return client
	// }
}
