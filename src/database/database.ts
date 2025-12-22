import mongoose from "mongoose";
import { Account } from "../models/account-model";

mongoose.connect("mongodb://localhost:27017/FinBridge").then(() => {
    console.log("Database is connected")
}).catch((error) => console.log(error))

const accountSchema = new mongoose.Schema({
    name: String,
    identify: String,
    balance: Number,
    fromBank: String
})

const AccountModel = mongoose.model("accounts", accountSchema)

export const accountData = async (): Promise<Account[]> => {
    return await AccountModel.find()
}