import { useState } from "react"
import axios from "axios"
import "./App.css"
export const Editproduct = ({ price, name, description, img, categoryId, id }) => {
    const [pname, setpname] = useState(name)
    const [price1, setprice1] = useState(price)
    const [desc, setdesc] = useState(description)
    const [bool, setbool] = useState(false)
    const [changecat, setchangecat] = useState(categoryId)
    const myimg = `data:image/png;base64,${img}`
    const fn = async () => {
        const res = await axios.patch(`http://localhost:8080/products/${id}?name=${pname}&price=${price1}&description=${desc}&categoryId=${changecat}`)
        console.log(res.data);
    }
    const delete1 = async () => {
        await axios.delete(`http://localhost:8080/products/${id}`)
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
        <div className="flex center container column">
            {!bool ?
                <>  <div>ProductName:{name}</div>
                    <div>price:${price}</div>
                    <div>Description: {description}</div>
                    <div>categoryId: {categoryId}</div>
                    <img src={myimg}></img>
                    <button onClick={edit}>Edit</button>
                    <button onClick={del}>Delete</button>
                </>
                :
                <>
                    <input value={pname} placeholder="Change ProductName" onChange={(e) => setpname(e.target.value)}></input>
                    <input value={price1} placeholder="Change Price" type='number' onChange={(e) => setprice1(e.target.value)}></input>
                    <input value={desc} placeholder="CHange Description" onChange={(e) => setdesc(e.target.value)}></input>
                    <input value={changecat} placeholder="Change Category" onChange={(e) => setchangecat(e.target.value)}></input>
                    <button onClick={savechanges}>Save changes</button>
                </>
            }

        </div>
    )
}