import { Mainapp } from './Mainapp';
import { Login } from './Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Addcategories } from './Addcategories';
import { Addproduct } from './Addproduct';
import {Showproducts} from './Showproducts'
import { useState } from 'react';
import axios from 'axios';
export const App = () => {
    const [uname, setuname] = useState('')
    const [pass, setpass] = useState('')
    const [token1, settoken1] = useState('')
    const fn = async () => {
        const res = await axios.post('http://localhost:8080/login', {}, {
            headers: {
                'username': `${uname}`,
                'password': `${pass}`
            }
        }
        )
        settoken1(res)
        localStorage.setItem('token', res.data[0])
        localStorage.setItem('pass', res.data[1])
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Mainapp />}></Route>
                <Route path='/AddCategory' element={<Addcategories />}></Route>
                <Route path='/addproduct' element={<Addproduct/>}></Route>
                <Route path='/login' element={<Login token1={token1} fn={fn} uname={uname} setuname={setuname} pass={pass} setpass={setpass} />}></Route>
                <Route path="/showproducts" element={<Showproducts/>}></Route>
            </Routes>
        </BrowserRouter>
    )
} 