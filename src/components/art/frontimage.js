import React from 'react';

import './frontimage.css';
import { Link } from 'react-router-dom';

import a6 from './artimages/6.png';
import a14 from './artimages/14.jpg';
import a16 from './artimages/16.jpg';
import a21 from './artimages/21.png';


function frontimage() {
    return (
        <>
        <div className='Art-container'>
  
          <h2>Artwork</h2>
      
        </div>
        <section className="gallery">
            <ul className="images">
            <li className="card"> <img src={a6} alt = "art1"/></li>
            <li className="card"> <img src={a21} alt = "art1"/></li>
            <li className="card"> <img src={a14} alt = "art1"/></li>
            <li className="card"> <img src={a16} alt = "art1"/></li>
        
              
        </ul>
        </section>

        <li className='button'>
              <Link
                to='/Art'
                className='button-links'
              >
                View Portfolio 
              </Link>
            </li>
        </>
        );
}

export default frontimage;