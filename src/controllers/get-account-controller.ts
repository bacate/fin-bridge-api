import http from 'http'
import { getAccountService } from "../services/get-account-service"
import { StatusCode } from '../utils/status-code'

export const getAccountController = (async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //needed typing
    const content = await getAccountService()

    response.writeHead(StatusCode.OK, { 'Content-Type': 'aplication/json' })
    response.write(JSON.stringify(content))
    response.end()
})