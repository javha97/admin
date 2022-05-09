import { useNavigate } from "react-router-dom"
import { TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Button, Box, Typography } from "@mui/material"
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
            <Box sx={{ display: "flex", alignItems: "center", width: "100vw", height: "100vh" }}>
                <Box sx={{ width: "400px", height: "400px", border: "1px solid black", display: "flex", alignItems: "center", margin: "0 auto" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "300px", margin: "0 auto" }}>
                        {!bool ? <>
                            <Typography variant="h4" component="h2">
                                Login
                            </Typography>
                            <TextField
                                margin="dense"
                                id="fullWidth"
                                fullWidth
                                label="Username"
                                value={uname}
                                onChange={(e) => setuname(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                id="outlined-name"
                                label="Password"
                                value={pass}
                                margin="dense"
                                onChange={(e) => setpass(e.target.value)}
                            />
                            <Button variant="contained" sx={{ marginTop: "10px", height: "50px" }} onClick={login}>Login</Button>

                            <Button sx={{marginTop: "10px"}} onClick={register}>Register</Button>
                        </>

                            :
                            <>
                                <Typography variant="h4" component="h2">
                                    Register
                                </Typography>
                                <TextField
                                    id="outlined-name"
                                    label="Create Username"
                                    value={cname}
                                    margin="dense"
                                    onChange={(e) => setcname(e.target.value)}
                                />
                                <TextField
                                    id="outlined-name"
                                    label="Create Password"
                                    value={cpass}
                                    margin="dense"
                                    onChange={(e) => setcpass(e.target.value)}
                                />
                                <Button variant="contained" sx={{ marginTop: "10px", height: "50px" }} onClick={reg}>Register</Button>
                                <Button sx={{marginTop: "10px"}} onClick={register}>Login</Button>
                            </>
                        }
                    </Box>
                </Box>
            </Box>


        </>
    )
}