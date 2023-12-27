import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     
          <div class='footer-links'>
            <h2>Contact me at gfei826@gmail.com</h2>
          </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
        
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='\github.com/gracefei08'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
        
            <Link
              class='social-icon-link twitter'
              to='\www.linkedin.com/in/grace-fei-144a48212/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
