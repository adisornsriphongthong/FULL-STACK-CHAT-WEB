import React, { useState } from "react"

export interface ILoginSaveDateObj {
    username: string,
    password: string
}
export const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const saveData = () => {
        const saveDataObj: ILoginSaveDateObj = {
            username: username,
            password: password
        }

        try {

        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Login</h1>

            <label htmlFor="">Username</label>
            <input
                placeholder="Enter your email ..."
                type="text"
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setUserName(e.currentTarget.value)
                }}
            /><br />

            <label htmlFor="">Password</label>
            <input
                placeholder="Enter your password ..."
                type="text"
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setPassword(e.currentTarget.value)
                }}
            /><br
            />

            <button onClick={saveData}>submit</button>
        </>
    )
}
