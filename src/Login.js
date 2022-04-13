export const Login = ({ token, fn, pass, setpass, uname, setuname }) => {
    const login = () => {
        fn()
    }
    console.log(token);
    return (
        <div className='flex center'>
            <div className='flex center container column'>
                <input placeholder='Username' value={uname} onChange={(e) => setuname(e.target.value)}></input>
                <input placeholder='Password' type='password' value={pass} onChange={(e) => setpass(e.target.value)}></input>
                <button onClick={login}>Login</button>
            </div>
        </div>)
}