import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Grace Fei
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>


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

            <li className='nav-item'>
              <Link
                to='/Inspiring'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Inspiring
              </Link>
            </li>
            

            <li className='nav-item'>
              <Link
                to='/Resume'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li> 
             
          </ul>
  
        </div>
      </nav>
    </>
  );
}

export default Navbar;
