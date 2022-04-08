import { db } from "./Firebase"
import { useState } from "react"
export const Editcategory = ({ category, id }) => {
    const [bool, setbool] = useState(false)
    const [value, setvalue] = useState('')
    
    const edit = () => {
        setbool(!false)
    }

    const save = () => {
        setbool(!bool)
        setvalue('')
    }
    const del = () => {
    }
    return (
        <div className="flex column center container">
            {!bool ? <>
                <div>Category: {category}</div>
                <button onClick={edit}>Edit</button>
                <button onClick={del}>Delete</button>
            </> :
                <>
                    <input value={value} onChange={(e) => setvalue(e.target.value)} placeholder="Change Category"></input>
                    <button onClick={save}>Save changes</button>
                </>}
        </div>
    )
}