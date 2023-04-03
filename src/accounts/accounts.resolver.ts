import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { AccountsService } from './accounts.service'
import { AccountArgs, CreateAccountArgs, ValueToUpdateArgs } from './dto/account.dto'
import { Accounts, AccountSummary } from './models/accounts.model'
import { Operations } from './models/operations.model'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../auth/guards/jwt-auth-guard'

@Resolver(of => Accounts)
export class AccountsResolver {
	constructor(private readonly accountsService: AccountsService) { }

	@Query(() => [AccountSummary])
	@UseGuards(GqlAuthGuard)
	getAllAccounts(): Promise<[Accounts]> {
		return this.accountsService.findAll()
	}

	@UseGuards(GqlAuthGuard)
	@Query(() => Accounts)
	getAccountById(@Args('id') id: string): Promise<Accounts> {
		return this.accountsService.findById(id)
	}
	@UseGuards(GqlAuthGuard)
	@Mutation(() => Accounts)
	updateValueToAccount(@Args('valueToUpdateArgs') valueToUpdateArgs: ValueToUpdateArgs) {
		return this.accountsService.updateValueToAccount(valueToUpdateArgs)
	}

	@UseGuards(GqlAuthGuard)
	@Mutation(() => Accounts)
	createAccount(@Args('createAccountArgs') createAccountArgs: CreateAccountArgs) {
		return this.accountsService.createAccount(createAccountArgs)
	}
}
