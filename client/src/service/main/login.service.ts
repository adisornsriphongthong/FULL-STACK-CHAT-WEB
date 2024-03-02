import { ILoginSaveDateObj } from "../../page/login"
import axiosInstance from "../app.client"

export const loginService = {
    login: async (saveDataObj: ILoginSaveDateObj) => {
        const api = '/Login'
        const result = await axiosInstance.post(api, saveDataObj)
        return result.data.result
    }
}
