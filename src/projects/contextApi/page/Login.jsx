import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username, password)
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}

            /><br /><br />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder='password'
            /><br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login