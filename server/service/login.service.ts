import { error } from "console";
import { ILoginDataInput, ILoginResponse } from "../interface/login.interface";
import loginRepository from "../repositories/login.repository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const mysecret = 'mysecret'

const getLogin = async (dataInput: ILoginDataInput) => {
    try {
        const result: ILoginResponse = await loginRepository.getLogin(dataInput)
        const match = await bcrypt.compare(dataInput.password, result.password)
        if (!match) {
            throw error
        }

        const token = await jwt.sign({ username: result.username }, mysecret, { expiresIn: "1m" })

        const currentResult = {
            id: result.id,
            username: result.username
        }

        return { result: currentResult, token }
    } catch (error) {
        throw error
    }
}

export default {
    getLogin
}