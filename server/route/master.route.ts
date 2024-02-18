import express from 'express'
import routerLogin from './login/login.route'
const router = express.Router()

router.use('/', routerLogin)

export default router;