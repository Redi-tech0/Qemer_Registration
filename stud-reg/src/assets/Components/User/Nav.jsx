import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
 
  return (
   
      <nav className="navbar">
      <h1>Qemer Solution technology </h1>
    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about ">About Us</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li><Link to="/courses">Courses</Link></li>
      </ul>
    </nav>
   
  )
}

export default Nav
