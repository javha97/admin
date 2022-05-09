import { useState } from "react"
import axios from "axios"
import { Editproduct } from "./Editproduct"
import { Mainapp } from "./Mainapp"
import { TextField, Button, Typography,Box } from "@mui/material"
export const Addcategories = () => {
    const [cat, setcat] = useState('')
    const [getpro, setgetpro] = useState('')
    const [category, setcategory] = useState([])
    const fn = async () => {
        await axios.post('http://localhost:8080/category', {
            params: {
                category: cat
            }
        })
    }
    const addcat = () => {
        fn()
        setcat('')
    }
    const findproduct = () => {
        getdata()
        setgetpro('')
    }
    const getdata = async () => {
        const { data } = await axios.get(`http://localhost:8080/category/${getpro}`)

        setcategory(data)
    }
    return (
        <>
            <Mainapp />
            <Box sx={{display: "flex", margin:"0 auto", width: "400px",flexDirection: "column"}}>
            <Typography variant="h4" component="h2">
            Addcategory
            </Typography>
            <TextField label="Category" variant="outlined" onChange={(e) => setcat(e.target.value)} value={cat} />
            <Button variant="contained" onClick={addcat}>Addcategory</Button>
            <Typography variant="h4" component="h2">
            Find
            </Typography>
            <TextField label="SearchCategory" variant="outlined" onChange={(e) => setgetpro(e.target.value)} value={getpro} />
            <Button variant="contained" onClick={findproduct}>Getitems</Button>
            {category.length === 0 ? <h4>...isLoading</h4> : category.map(({ categoryId, img, price, name, description, id }, i) => {
                return <Editproduct categoryId={categoryId} name={name} img={img} id={id} price={price} description={description} key={i} />
            })}
            </Box>
        </>
    )
} 