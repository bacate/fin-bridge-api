import { accountData } from "../database/database"
import { Account } from "../models/account-model"

export const getAccountRepository = async (): Promise<Account[]> => {
    return await accountData()
}