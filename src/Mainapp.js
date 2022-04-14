import { Link } from "react-router-dom"
import './App.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const Mainapp = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log(token);
    useEffect(() => {
        console.log('hi');
        if (token === null) {
            navigate('/login')
        }
    },[token])
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