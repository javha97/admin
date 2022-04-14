import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
export const Login = ({ fn, pass, setpass, token1, uname, setuname }) => {
    const navigate = useNavigate()
    const [bool, setbool] = useState(false)
    const [cpass, setcpass] = useState('')
    const [cname, setcname] = useState('')

    const registerfn = async () => {
        const res = await axios.post(`http://localhost:8080/register`, {}, {
            headers: {
                "username": `${cname}`,
                "password": `${cpass}`
            }
        })
        alert(res.data)
    }
    const register = () => {
        setbool(!bool)
    }
    console.log(token1)
    useEffect(() => {
        if (!token1) return
        console.log('hi');
        if (token1.length >= 30) {
            navigate('/addproduct')
        }
    },[token1]);

    const login = () => {
        if (!uname || !pass) return
        fn()
    }
    const reg = () => {
        registerfn()
    }
    return (
        <>
            <div className='flex center'>
                <div className='flex center container column'>
                    {!bool ? <>
                        <h3>Login</h3>
                        <input placeholder='Username' value={uname} onChange={(e) => setuname(e.target.value)}></input>
                        <input placeholder='Password' type='password' value={pass} onChange={(e) => setpass(e.target.value)}></input>
                        <button onClick={login}>Login</button>
                        <div>
                            <button onClick={register} className='noback'>register</button>
                        </div>  </>
                        :
                        <>
                            <h3>Register</h3>
                            <input placeholder='Create Username' value={cname} onChange={(e) => setcname(e.target.value)}></input>
                            <input placeholder='Create Password' type='password' value={cpass} onChange={(e) => setcpass(e.target.value)}></input>
                            <button onClick={reg}>Register</button>
                            <div>
                                <button className="noback" onClick={register}>Login</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}