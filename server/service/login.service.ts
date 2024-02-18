import { ILoginDataInput } from "../interface/login.interface";

const getLogin = (dataInput: ILoginDataInput) => {
    try {
        console.log(dataInput, 'From Service Layer')
    } catch (error) {
        throw error
    }
    return { message: 'successfully to login' }
}

export default {
    getLogin
}