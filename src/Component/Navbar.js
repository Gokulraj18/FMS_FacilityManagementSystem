import React from 'react'
import Admin from './Admin'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'

export default function Navbar() {
  return (
    <div>
      <NavLink to={'/'} element={<Home/>}/>
      <NavLink to={'/admin'} element={<Admin/>}/>
    </div>
  )
}
