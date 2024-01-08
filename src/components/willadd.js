import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
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
</>
  );
}

export default willadd;
