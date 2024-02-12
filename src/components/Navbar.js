import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Pdf from './GraceFeiR.pdf';

function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/personal-website/' className='navbar-logo' onClick={closeMobileMenu}>
            Grace Fei
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          

            <li className='nav-item'>
              <Link
                to='/Work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Art'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Art
              </Link>
            </li>
            <div className = "nav-item">
          <a className='nav-links' href = {Pdf} target = "_blank">Resume</a>
          
            </div>

           
             
          </ul>
  
        </div>
      </nav>
    </>
  );
}

export default Navbar;
