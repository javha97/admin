import { useEffect, useState } from "react"
import { Editcategory } from "./Editcategory"
export const Addcategories = () => {
    const [cat, setcat] = useState('')
    const [category, setcategory] = useState([])
    const addcat = () => {

        setcat('')
    }
    return (
        <>
            <div className="flex center container column">
                <h4>Addcategory</h4>
                <input value={cat} placeholder="Category" onChange={(e) => setcat(e.target.value)}></input>
                <button onClick={addcat}>Addcategory</button>
            </div>
            {category.length === 0 ? <h4>...isLoading</h4> : category.map((el, i) => {
                return <Editcategory category={el.category} key={i} id={el.id} />
            })}
        </>
    )
} 