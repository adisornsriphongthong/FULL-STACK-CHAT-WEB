import React, { useEffect, useState } from "react"
import { loginService } from "../service/main/login.service"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { rootState } from "../store/store"
import { setId } from "../store/states/user.state"
import CookiesDOM from 'js-cookie';
import { Input } from 'antd'
import { getCookie, Cookies, ICookie } from '../utils/cookie.util'
import { onChangeFormInput } from "../utils/input.util"

export interface ILoginSaveDateObj {
    username: string,
    password: string
}

export const Login = () => {
    const user = useSelector((state: rootState) => state.user.userState)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const saveData = async () => {
        const saveDataObj = {
            username: username,
            password: password
        };

        try {
            const response = await loginService.login(saveDataObj);
            dispatch(setId({
                id: response.result.id,
                username: response.result.username
            }));

            const cookies: ICookie[] = [
                {
                    name: 'id',
                    value: response.result.id
                },
                {
                    name: 'username',
                    value: response.result.username
                },
                {
                    name: 'token',
                    value: response.token
                }
            ]

            Cookies.set(cookies)
            setUserName(response.result.username)
            navigate(`/${response.result.username}`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const username = CookiesDOM.get('username')
        if (username) {
            navigate(`/${username}`);
        }
    }, []);


    return (
        <>
            <div style={{ display: 'flex' }} className="background">
                <div
                    style={{
                        backgroundColor: 'rgb(0, 0, 0, 0.25)',
                    }}
                    className="w-4/12 h-full backdrop-blur shadow-amber-600 flex justify-center"
                >
                    <div className="w-10/12 h-2/4 mt-10">
                        <div className="w-full h-32 flex items-center">
                            <div style={{ width: '20px', height: '20px', backgroundColor: '#0078FF', borderRadius: '50%', margin: '0 15px' }}></div>
                            <h3 className="text-4xl text-white font-bold">LOGO</h3>
                        </div>
                        <div className="w-full h-14">
                            <p className="text-2xl text-white" >Login</p>
                        </div>
                        <div className="w-full h-24">
                            <p className="text-white font-thin">Username</p>
                            <input
                                className={onChangeFormInput(username)}
                                placeholder="Enter your email ..."
                                type="text"
                                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                    setUserName(e.currentTarget.value)
                                }}
                            />
                            <br /><br />
                            <div className="w-full h-24">
                                <p className="text-white font-thin">Password</p>
                                <input
                                    className={onChangeFormInput(password)}
                                    placeholder="Enter your password ..."
                                    type="password"
                                    onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                        setPassword(e.currentTarget.value)
                                    }}
                                />
                                <a className="text-white text-xs underline" href="">Forgot password.</a>
                                <br /><br />
                                <button
                                    className="rounded transition delay-150 text-black hover:text-slate-400 w-28 h-8 bg-white hover:bg-gray-700"
                                    onClick={saveData}>
                                    submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="w-8/12 h-full backdrop-blur shadow-amber-600 flex justify-center"
                >
                    <div style={{ top: '40%', position: 'relative', height: '0' }}>
                        <h3 className="text-4xl text-white font-bold">Why did the password go to therapy?</h3>
                        <p className="text-2xl text-white">Because it had too many issues to hash out!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
