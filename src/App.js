import { Mainapp } from './Mainapp';
import { Login } from './Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Addcategories } from './Addcategories';
import { Addproduct } from './Addproduct';
import { useState } from 'react';
import axios from 'axios';
export const App = () => {
    const [token, settoken] = useState('')
    const [uname, setuname] = useState('')
    const [pass, setpass] = useState('')
    const fn = async () => {
        const res = await axios.post('http://localhost:8080/login', {}, {
            headers: {
                'username': `${uname}`,
                'password': `${pass}`
            }
        }
        )
        settoken(res.data);
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Mainapp />}></Route>
                <Route path='/addcate' element={<Addcategories />}></Route>
                <Route path='/addproduct' element={<Addproduct token={token}/>}></Route>
                <Route path='/login' element={<Login fn={fn} token={token} uname={uname} setuname={setuname} pass={pass} setpass={setpass} />}></Route>
            </Routes>
        </BrowserRouter>
    )
} 