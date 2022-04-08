import { useState } from "react";
import axios from 'axios'
import { Editproduct } from "./Editproduct";
export const Addproduct = () => {
    const [pname, setpname] = useState('')
    const [price, setprice] = useState('')
    const [desc, setdesc] = useState('')
    const [id, setid] = useState('')
    const [catId, setcatId] = useState('')
    const [item, setItem] = useState([])
    const fn = async () => {
        const data = await axios.post(`http://localhost:8080/products?name=${pname}&price=${price}&id=${id}&description=${desc}&categoryId=${catId}`)
        console.log(data.data);
    }

    const additem = () => {
        fn()
        setpname('')
        setprice('')
        setdesc('')
        setcatId('')
        setid('')
    }
    return (
        <>
            <div className="flex center container column">
                <h4>Addproduct</h4>
                <input placeholder="ProductName" onChange={(e) => setpname(e.target.value)} value={pname}></input>
                <input placeholder="Price" type='number' onChange={(e) => setprice(e.target.value)} value={price}></input>
                <input placeholder="Description" onChange={(e) => setdesc(e.target.value)} value={desc}></input>
                <input placeholder="ProductId" onChange={(e) => setid(e.target.value)} value={id}></input>
                <input placeholder="CategoryId" onChange={(e) => setcatId(e.target.value)} value={catId}></input>
                <button onClick={additem}>Addproduct</button>

            </div>
            {item.length === 0 ? <h4>...isLoading</h4> : item.map(({ price, name, description, id }, i) => {
                return <Editproduct price={price} id={id} name={name} description={description} key={i} />
            })}
        </>
    )
}