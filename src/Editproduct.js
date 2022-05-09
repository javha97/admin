import { useState } from "react"
import { TextField, Button, Typography, Box } from "@mui/material"
import axios from "axios"
export const Editproduct = ({ price, name, description, img, categoryId, id }) => {
    const [pname, setpname] = useState(name)
    const [price1, setprice1] = useState(price)
    const [desc, setdesc] = useState(description)
    const [bool, setbool] = useState(false)
    const [changecat, setchangecat] = useState(categoryId)
    const username = localStorage.getItem('uname')
    const fn = async () => {
        const res = await axios.patch(`http://localhost:8080/products/${id}?name=${pname}&price=${price1}&description=${desc}&categoryId=${changecat}`, {}, {
            headers: {
                "uname": `${username}`
            }
        })
        console.log(res.data);
    }
    const delete1 = async () => {
        await axios.delete(`http://localhost:8080/products/${id}`, {
            headers: {
                "uname": `${username}`
            }
        })
    }
    const edit = () => {
        setbool(!bool)
    }
    const del = () => {
        delete1()
    }
    const savechanges = () => {
        fn()
        setbool(!bool)
    }
    return (
        <>       {!bool ?
            <>
                <Box sx={{marginTop: "20px"}}>
                    <Typography variant="h6" component="h2">
                        ProductNames: {name}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Price:${price}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Description: {description}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        CategoryId: {categoryId}
                    </Typography>
                    <img src={`http://localhost:8080/${img}.jpeg`} style={{ width: "400px" }}></img>
                    <Button sx={{ width: "200px" }} variant="text" onClick={edit}>Edit</Button>
                    <Button variant="text" sx={{ width: "200px" }} onClick={del}>Delete</Button>
                </Box>
            </>
            :
            <Box sx={{marginTop: "20px", display: "flex" , flexDirection: "column"}}>
                <TextField margin="dense" label="Change ProductName" variant="outlined" value={pname} onChange={(e) => setpname(e.target.value)} />
                <TextField margin="dense" label="Change Price" variant="outlined" value={price1} onChange={(e) => setprice1(e.target.value)} />
                <TextField margin="dense" label="Change Description" variant="outlined" value={desc} onChange={(e) => setdesc(e.target.value)} />
                <TextField margin="dense" label="Change Category" variant="outlined" value={changecat} onChange={(e) => setchangecat(e.target.value)} />
                <Button variant="contained" sx={{ width: "400px" }} onClick={savechanges}>Save changes</Button>
            </Box>
        }
        </>



    )
}