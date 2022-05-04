import { useNavigate } from "react-router-dom"
import { TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
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
    useEffect(() => {
        console.log(token1.status);
        if (!token1) return
        if (token1.status === 200) {
            navigate('/addproduct')
        }
    }, [token1]);

    const login = () => {
        if (!uname || !pass) return
        fn()
    }
    const reg = () => {
        registerfn()
    }
    if (uname) {
        localStorage.setItem('uname', uname)
    }
    return (
        <>
            <div className='flex center'>
                <div className='flex center container column'>
                    {!bool ? <>
                        <h3>Login</h3>
                        <TextField
                            id="outlined-name"
                            label="Username"
                            value={uname}
                            sx={{ width: "254px" }}
                            onChange={(e) => setuname(e.target.value)}
                        />
                        <TextField
                            id="outlined-name"
                            label="Password"
                            value={pass}
                            margin="dense"
                            sx={{ width: "254px" }}
                            onChange={(e) => setpass(e.target.value)}
                        />
                      <Button variant="contained" sx={{marginTop: "10px"}}onClick={login}>Login</Button>
                        <div>
                        <Button onClick={register}>Register</Button>
                        </div>  </>
                        :
                        <>
                            <h3>Register</h3>
                            <TextField
                                id="outlined-name"
                                label="Create Username"
                                value={cname}
                                margin="dense"
                                sx={{ width: "254px" }}
                                onChange={(e) => setcname(e.target.value)}
                            />
                            <TextField
                                id="outlined-name"
                                label="Create Password"
                                value={cpass}
                                margin="dense"
                                sx={{ width: "254px" }}
                                onChange={(e) => setcpass(e.target.value)}
                            />
                            <Button variant="contained" sx={{marginTop: "10px"}} onClick={reg}>Register</Button>
                            <div>
                            <Button onClick={register}>Login</Button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}