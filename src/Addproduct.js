import { useState } from "react";
import axios from 'axios'
import { Mainapp } from "./Mainapp";
import { TextField, Button, Input, IconButton, Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import PhotoCamera from '@mui/icons-material/PhotoCamera';

export const Addproduct = () => {
    const [pname, setpname] = useState('')
    const [price, setprice] = useState('')
    const [desc, setdesc] = useState('')
    const [catId, setcatId] = useState('')
    const [imge, setimge] = useState('')
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('uname')
    const fn = async () => {
        const data = await axios.post(`http://localhost:8080/products?name=${pname}&price=${price}&description=${desc}&categoryId=${catId}`, {
            body: {
                "img": `${imge}`,
            }
        }, {
            headers: {
                "token": `${token}`,
                "uname": `${username}`
            }
        })
        alert(data.data)
    }
    const additem = () => {
        fn()
        setpname('')
        setprice('')
        setdesc('')
        setcatId('')
    }
    const img = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setimge(reader.result)
        }
        reader.readAsDataURL(file);
    }
    const Input = styled('input')({
        display: 'none',
    });
    return (
        <>
            <Mainapp />
            <Box sx={{ display: "flex", flexDirection: "column", width: "400px", margin: "0 auto" }}>
                <Typography variant="h4" component="h2">
                    Add a product
                </Typography>
                <TextField margin="dense" label="ProductName" onChange={(e) => setpname(e.target.value)} variant="outlined" value={pname} />
                <TextField margin="dense" label="Price" onChange={(e) => setprice(e.target.value)} variant="outlined" value={price} />
                <TextField margin="dense" label="Description" onChange={(e) => setdesc(e.target.value)} variant="outlined" value={desc} />
                <TextField margin="dense" label="CategoryId" onChange={(e) => setcatId(e.target.value)} variant="outlined" value={catId} />
                <Box sx={{ display: "flex" }}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => img(e)} />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" onChange={(e) => img(e)} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </Box>
                <Button variant="contained" onClick={additem} sx={{ height: "50px" }}>Addproduct</Button>
            </Box>

        </>
    )
}