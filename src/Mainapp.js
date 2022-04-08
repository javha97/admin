import { Link } from "react-router-dom"
import axios from "axios"
import './App.css'
export const Mainapp = () => {

    return (
        <div className="flex column  center">
            <Link to='/addcate'>
                <div>AddCategory</div>
            </Link>
            <Link to='/addproduct'>
                <div>Addproduct</div>
            </Link>
            <Link to='/login'>
            <div>Login</div>
            </Link>
        </div>
    )
}