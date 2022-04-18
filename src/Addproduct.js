import { useEffect, useState } from "react";
import axios from 'axios'
import { Editproduct } from "./Editproduct";
export const Addproduct = () => {
    const [pname, setpname] = useState('')
    const [price, setprice] = useState('')
    const [desc, setdesc] = useState('')
    const [catId, setcatId] = useState('')
    const [res, setres] = useState('')
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
    useEffect(() => {
        const getproducts = async () => {
            const res = await axios.get(`http://localhost:8080/`)
            setres(res.data)
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
    const img = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setimge(reader.result)
        }
        reader.readAsDataURL(file);
    }
    console.log(res);
    return (
        <>
            <div className="flex center container column">
                <h4>Addproduct</h4>
                <input placeholder="ProductName" onChange={(e) => setpname(e.target.value)} value={pname}></input>
                <input placeholder="Price" type='number' onChange={(e) => setprice(e.target.value)} value={price}></input>
                <input placeholder="Description" onChange={(e) => setdesc(e.target.value)} value={desc}></input>
                <input placeholder="CategoryId" onChange={(e) => setcatId(e.target.value)} value={catId}></input>
                <input type='file' onChange={(e) => img(e)}></input>
                <button onClick={additem}>Addproduct</button>
            </div>
            {res && res.map(({ price, description, img, name, categoryId, id }, i) => {
                return <Editproduct key={i} id={id} img={img} price={price} description={description} name={name} categoryId={categoryId} />
            })}
        </>
    )
}