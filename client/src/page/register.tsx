import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies, getCookie } from '../utils/cookie.util';

export const Register = () => {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [username, setUsername] = useState('')
    const [isCookies, setIsCookies] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handleClick() {
        const token = localStorage.getItem('token')
        console.log(token)
    }

    function handleLogOff() {
        const cookies: string[] = ['id', 'username', 'token']
        Cookies.clear(cookies)
        navigate('/');
    }

    useEffect(() => {
        const id: string = getCookie('id').value;
        const username: string = getCookie('username').value
        setId(id);
        setUsername(username)
        setTimeout(() => {
            setIsLoading(true)
        }, 1000)
        if (username) {
            setIsCookies(true)
        }

    }, [])

    return (
        <>
            {
                isLoading
                    ? isCookies ? (
                        <div>
                            <button onClick={handleLogOff}>log-off</button>
                            <div>register</div>
                            <p>{'id: ' + id}</p>
                            <p>{'username: ' + username}</p>
                            <button onClick={handleClick}>click</button>
                        </div>
                    ) : (
                        <h1>Not found this page.</h1>
                    ) : (
                        <div><h1>isLoading ....</h1></div>
                    )
            }
        </>
    )
}
