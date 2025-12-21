import { Account } from "../models/account-model"
import { getAccountRepository } from "../repositories/get-account-repository"

export const getAccountService = async (): Promise<Account> => {
    return await getAccountRepository()
}