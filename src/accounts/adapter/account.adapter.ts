import { Types } from "mongoose"

export const newAccountAdapter = (newAccount) => {
    return {
        _id: new Types.ObjectId(),
        balance: 0,
        client: {
            name: newAccount.client.name,
            cpf: newAccount.client.cpf,
        },
        accountNumber: newAccount.accountNumber,
        agency: newAccount.agency
    }
}