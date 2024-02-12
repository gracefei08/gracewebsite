import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import oct from './images/oct-both.png'
import bus from './images/bus.png'
import design from './images/Research_paper_author.png'


function Cards() {
  return (

    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
           src={oct}
         
              title = 'System intergrater intern'
              text='Created a program with Python (NumPy) and LabVIEW that intergrated OCT imaging system with APT motor software. 
              The user inputs 2 wells in a well plate, and the program generates coordinates taking into account the rotational shifting, completely automates the scanning process'
              path='/Work'
            />

          </ul>
          <ul className='cards__items'>
          <CardItem
              src={bus}
      
              title = 'Founder of The3DMachine'
              text='Founded a business to combine my passion for STEM and art by  3D modeling with Fusion360, 3D printing, and painting, gaining  over 1100+ sales and an average 5-star review.'
              path='/Work'              
            />

          </ul>
          <div className="button-container">
              <button className='button'>
                <a className= 'button' href ='https://www.etsy.com/shop/The3DMachine?ref=seller-platform-mcnav'
            
                target='_blank'
                >
                <p>View Shop</p>
                </a>
              </button>
          </div>

          <ul className='cards__items'>
          
          <CardItem
          src={design}
          title = 'Research Paper Co-Author'
          text='address the acoustic field synthesis of the binaural audio with a hybrid model incorporating acoustic synthesis blocks and a Head-Related Transfer Function (HRTF) module to learn the transfer function that represents the binaural audio effects'
          path='/Work'
            />

          </ul>
        </div>
      </div>
    </div>
 
  );
}

export default Cards;
