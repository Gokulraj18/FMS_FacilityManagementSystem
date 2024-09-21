import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'
import './Login.css';

export default function Login() {
    const navigate = useNavigate()
    const port = process.env.VITE_PORT;
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [userlist, setUserlist] = useState([])
    useEffect(() => {
        axios.get(`${port}/Users`)
            .then(res => setUserlist(res.data))
            .catch(err => console.log(err))
    }, [])
    const auth = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = userlist.find(a => a.name === name && a.password === password)
        if (user) {
            auth.login(name)
            if (user.name === 'admin' && user.password === 'admin') {
                console.log(user.name+" "+user.password)
                navigate('/admin')
            } else {
                navigate('/')
            }
        } else {
            alert("Invalid name or password")
        }
    }

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2 className="form-title">Login</h2>
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input type='text' className="form-input" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type='password' className="form-input" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type='submit' className="form-submit">Login</button>
                <NavLink to="/signup">Create new Account? Signup</NavLink>
            </form>
        </div>
    )
}
