import { poolReader } from "../config/database.config";
import { ILoginDataInput, ILoginResponse } from "../interface/login.interface";

const getLogin = async (dataInput: ILoginDataInput) => {
    try {
        const sql = ` SELECT
                        ID,
                        USERNAME,
                        PASSWORD
                      FROM
                        "C##test1".ACCOUNT
                      WHERE
                        USERNAME = :username `;

        const param = { username: dataInput.username }
        const rows = await poolReader.query(sql, param)

        const result: ILoginResponse[] = rows?.map((e: any) => {
            return {
                id: e[0],
                username: e[1],
                password: e[2]
            }
        }) || [];

        return result[0]

    } catch (error) {
        console.log(error)
        throw error
    }
}

export default {
    getLogin
}