import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { AccountsService } from './accounts.service'
import { AccountArgs, AccountSummary } from './dto/account.dto'
import { Accounts } from './models/accounts.model'
import { Operations } from './models/operations.model'

@Resolver(of => Accounts)
export class AccountsResolver {
	constructor(private readonly accountsService: AccountsService) {}

	@Query(returns => [AccountSummary])
	getAllAccounts(): Promise<[Omit<Accounts, 'operations'>]> {
		return this.accountsService.findAll()
	}
}
