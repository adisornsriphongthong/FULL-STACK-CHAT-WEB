import express from 'express'
import routerLogin from './login/login.route'
import { authorization } from '../middleware/authorization.middleware';
const router = express.Router()

router.use('/', authorization, routerLogin)

export default router;