import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { AccountsService } from './accounts.service'
import { AccountArgs, CreateAccountArgs, ValueToUpdateArgs } from './dto/account.dto'
import { Accounts, AccountSummary } from './models/accounts.model'
import { Operations } from './models/operations.model'

@Resolver(of => Accounts)
export class AccountsResolver {
	constructor(private readonly accountsService: AccountsService) {}

	@Query(returns => [AccountSummary])
	getAllAccounts(): Promise<[Accounts]> {
		return this.accountsService.findAll()
	}
	@Mutation(returns => Accounts)
	updateValueToAccount(@Args('valueToUpdateArgs') valueToUpdateArgs: ValueToUpdateArgs) {
		console.log(
			'🚀 ~ file: accounts.resolver.ts:17 ~ AccountsResolver ~ updateValueToAccount ~ valueToUpdateArgs:',
			valueToUpdateArgs
		)
		return this.accountsService.updateValueToAccount(valueToUpdateArgs)
	}

	@Mutation(returns => Accounts)
	createAccount(@Args('createAccountArgs') createAccountArgs: CreateAccountArgs) {
		return this.accountsService.createAccount(createAccountArgs)
	}
}
