import React from "react";
import  './Navbar.css';
import {useState, useEffect} from 'react'

function Navbar() {
  
  

  return (
    <nav className='navbar'>
      <a href="/" className='logoLink'>Space</a>
      <div className='dividerNavbar'>
      <a href="#">About Earth</a>
      <a href="#">More Planets</a>
      <a href="#">Solar System</a>
      </div>
    </nav>
  )
}

export default Navbar;