import http from 'http'
import { getAccountController } from "./controllers/get-account-controller"
import { ROUTES } from './utils/routes'
import { METHODS } from './utils/methods'

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.method === METHODS.GET && request.url === ROUTES.ACCOUNT) {
        await getAccountController(request, response)
    }
}