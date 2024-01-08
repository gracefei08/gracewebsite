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
            <footer
              class='social-icon-link github'
              to ='https://github.com/gracefei08'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </footer>
        
            <footer
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/grace-fei-144a48212/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </footer>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
