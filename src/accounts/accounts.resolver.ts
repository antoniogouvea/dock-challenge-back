import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { AccountsService } from './accounts.service'
import { AccountArgs, CreateAccountArgs } from './dto/account.dto'
import { Accounts, AccountSummary } from './models/accounts.model'
import { Operations } from './models/operations.model'

@Resolver(of => Accounts)
export class AccountsResolver {
	constructor(private readonly accountsService: AccountsService) {}

	@Query(returns => [AccountSummary])
	getAllAccounts(): Promise<[AccountSummary]> {
		return this.accountsService.findAll()
	}
	@Mutation(returns => Accounts)
	updateValueToAccount() {}

	@Mutation(returns => Accounts)
	createAccount(@Args('createAccountArgs') createAccountArgs: CreateAccountArgs) {
		return this.accountsService.createAccount(createAccountArgs)
	}
}
