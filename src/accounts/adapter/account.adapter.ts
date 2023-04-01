import { Types } from "mongoose"

export const newAccountAdapter = (newAccount) => {
    return {
        _id: !newAccount?._id
            ? new Types.ObjectId()
            : new Types.ObjectId(newAccount?._id),
        balance: 0,
        client: new Types.ObjectId(newAccount?.client),
        accountNumber: newAccount.accountNumber,
        agency: newAccount.agency
    }
}