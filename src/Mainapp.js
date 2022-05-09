import { useEffect, useState } from "react"
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, AppBar, Typography, Button, Box, } from "@mui/material"
import { useNavigate, Link } from "react-router-dom"
import { Sidebar } from "./Sidebar";
import "./app.css"
export const Mainapp = () => {
    const [sidebar, setsidebar] = useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token);
    useEffect(() => {
        if (token === null) {
            navigate('/login')
        }
    }, [token])
    console.log(sidebar);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setsidebar(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Admin
                        </Typography>
                        <Link to='/login'>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white" }}>
                                Login
                            </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Sidebar sidebar={sidebar} setsidebar={setsidebar} />
        </>
    )
}