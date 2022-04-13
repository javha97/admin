import { useEffect, useState } from "react";
import axios from 'axios'
import { Editproduct } from "./Editproduct";
export const Addproduct = ({ token }) => {
    const [pname, setpname] = useState('')
    const [price, setprice] = useState('')
    const [desc, setdesc] = useState('')
    const [catId, setcatId] = useState('')
    const [res, setres] = useState('')
    console.log(token);
    const fn = async () => {
        const data = await axios.post(`http://localhost:8080/products?name=${pname}&price=${price}&description=${desc}&categoryId=${catId}`, {}, {
            headers: {
                "token": `${token}`
            }
        })
        console.log(data.data);
    }
    useEffect(() => {
        const getproducts = async () => {
            const res = await axios.get(`http://localhost:8080/`)
            setres(res.data)
            console.log(res.data);
        }
        getproducts()
    }, [])
    const additem = () => {
        fn()
        setpname('')
        setprice('')
        setdesc('')
        setcatId('')
    }
    return (
        <>
            <div className="flex center container column">
                <h4>Addproduct</h4>
                <input placeholder="ProductName" onChange={(e) => setpname(e.target.value)} value={pname}></input>
                <input placeholder="Price" type='number' onChange={(e) => setprice(e.target.value)} value={price}></input>
                <input placeholder="Description" onChange={(e) => setdesc(e.target.value)} value={desc}></input>
                <input placeholder="CategoryId" onChange={(e) => setcatId(e.target.value)} value={catId}></input>
                <button onClick={additem}>Addproduct</button>
            </div>
            {res && res.map(({ price, description, name, categoryId, id }, i) => {
                return <Editproduct key={i} id={id} price={price} description={description} name={name} categoryId={categoryId} />
            })}
        </>
    )
}