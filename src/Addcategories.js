import { useState } from "react"
import axios from "axios"
import { Editproduct } from "./Editproduct"
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
        const {data}=await axios.get(`http://localhost:8080/category/${getpro}`)
        
        setcategory(data)
    }
    return (
        <>
            <div className="flex center container column">
                <h4>Addcategory</h4>
                <input value={cat} placeholder="Category" onChange={(e) => setcat(e.target.value)}></input>
                <button onClick={addcat}>Addcategory</button>
            </div>
            <div className="flex center container column">
                <h4>Find</h4>
                <input value={getpro} placeholder="SearchCategory" onChange={(e) => setgetpro(e.target.value)}></input>
                <button onClick={findproduct}>Addcategory</button>
            </div>
            {category.length === 0 ? <h4>...isLoading</h4> : category.map(({categoryId,img,price,name,description,id}, i) => {
                return <Editproduct categoryId={categoryId} name={name}  img={img} id={id} price={price} description={description} key={i}  />
            })}
        </>
    )
} 