import { Request, Response } from "express";
import loginService from "../service/login.service";

const getLogin = async (req: Request, res: Response) => {
    try {
        const dataInput = req.body
        const headers = req.headers;
        console.log(headers)
        const result = await loginService.getLogin(dataInput)
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(401).json({ message: 'login fail email or password.' })
    }
}

export default {
    getLogin
}