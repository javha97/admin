import { useState } from "react"
export const Login = () => {
    const [uname, setuname] = useState('')
    const [pass, setpass] = useState('')
    const login = () => {
        console.log('hi');
    }
    return (
        <div className='flex center'>
            <div className='flex center container column'>
                <input placeholder='Username' value={uname} onChange={(e) => setuname(e.target.value)}></input>
                <input placeholder='Password' type='password' onChange={(e) => setpass(e.target.value)}></input>
                <button onClick={login}>Login</button>
            </div>
        </div>)
}