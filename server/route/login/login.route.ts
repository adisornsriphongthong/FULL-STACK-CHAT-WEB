import express from 'express'
import loginController from '../../controller/login.controller'
const routerLogin = express.Router()

routerLogin.post(
    '/login', loginController.getLogin
)

export default routerLogin;