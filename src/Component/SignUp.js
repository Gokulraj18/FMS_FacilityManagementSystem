import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import './SignUp.css';

export default function SignUp() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()
    const port = process.env.VITE_PORT;    
    const handleSignup = (e) => {
        e.preventDefault();
        axios.post(`${port}/Users`, { "name": name, "email": email, "phone": phone, "password": password })
            .then(res => {
                console.log(res);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup}>
                <h2 className="form-title">SignUp</h2>
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input type='text' className="form-input" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type='email' className="form-input" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone no:</label>
                    <input type='number' className="form-input" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type='password' className="form-input" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button type='submit' className="form-submit">Signup</button>
                <NavLink to="/login">Already have an Account? Login</NavLink>
            </form>
        </div>
    )
}
