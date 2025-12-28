import { Account } from "../models/account-model"
import { accountData } from "../repositories/get-account-repository"

export const getAccountService = async (): Promise<Account[]> => {
    return await accountData()
}