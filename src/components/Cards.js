import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import oct from './images/oct-both.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Hi, I'm Grace (she/her)</h1>

      <p>I am a undergrad at UNC-Chapel Hill studying Computer Science and Studio Arts.  </p>
      <p>I am interested in the intersection of technology and art, exploring immersive technology and UI/UX design.  </p>

   
      <h2>Notable Works</h2>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={oct}
              title = 'research assisant'
              text='Created a program with Python (NumPy) and LabVIEW that intergrated OCT imaging system with APT motor software. '
              path='/Tech'
            />

          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-2.jpg'
              text='shop 3D modeling, printing, and painting. I am proud to have 1000+ sales and an average 5-star review.
              Additionally, my products can be found in stores at NerdBombers'
              label='Luxury'
              path='/Tech'
          
            />
          </ul>
          <ul className='cards__items'>
          
          <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/Tech'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
