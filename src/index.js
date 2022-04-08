import React from 'react';
import ReactDOM from 'react-dom/client';
import { Mainapp } from './Mainapp';
import { Login } from './Login';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { Addcategories } from './Addcategories';
import { Addproduct } from './Addproduct';

const cont = document.getElementById('root')
const root = ReactDOM.createRoot(cont)
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Mainapp/>}></Route>
    <Route path='/addcate' element={<Addcategories/>}></Route>
    <Route path='/addproduct' element={<Addproduct/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>

)



