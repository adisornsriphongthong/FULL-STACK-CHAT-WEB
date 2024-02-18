import { Request, Response } from "express";
import loginService from "../service/login.service";

const getLogin = async (req: Request, res: Response) => {
    try {
        const dataInput = req.body
        const result = await loginService.getLogin(dataInput)
        res.status(200).json({
            result
        })
    } catch (error) {
        throw error
    }
}

export default {
    getLogin
}