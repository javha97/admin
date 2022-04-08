import { useState } from "react"
export const Editproduct = ({ price, name, description, id }) => {
    const [pname, setpname] = useState('')
    const [price1, setprice1] = useState('')
    const [desc, setdesc] = useState('')
    const [bool, setbool] = useState(false)
    const edit = () => {
        setbool(!bool)
    }
    const del = () => {
    }
    const savechanges = () => {

    }
    return (
        <div className="flex center container column">
            {!bool ?
                <>  <div>ProductName:{name}</div>
                    <div>${price}</div>
                    <div>Description: {description}</div>
                    <button onClick={edit}>Edit</button>
                    <button onClick={del}>Delete</button>
                </>
                :
                <>
                    <input placeholder="Change ProductName" onChange={(e) => setpname(e.target.value)}></input>
                    <input placeholder="Change Price" type='number' onChange={(e) => setprice1(e.target.value)}></input>
                    <input placeholder="CHange Description" onChange={(e) => setdesc(e.target.value)}></input>
                    <button onClick={savechanges}>Save changes</button>
                </>
            }

        </div>
    )
}