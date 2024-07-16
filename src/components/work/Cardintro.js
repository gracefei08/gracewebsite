import React from 'react';
import './Cardintro.css';
import CardItem from './CardItem';
import oct from './images/oct-both.png'
import bus from './images/bus.png'
import design from './images/Research_paper_author.png'
import { Link } from 'react-router-dom';

function Cardintro() {
  return (
    <>
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={oct}
              title = 'System intergrater intern'
              text='Created a program with Python (NumPy) and LabVIEW that intergrated OCT imaging system with APT motor software. '
              path='/Work'
            />

          </ul>
          <ul className='cards__items'>
          <CardItem
              src={bus}
              title = 'Founder of The3DMachine'
              text='3D modeled, printed, and hand painted with over 1100+ sales, promoting the intersection of STEM and art.'
              path='/Work'
            />
          </ul>
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
      <div className="button-container">
      <button className='button'>
            <Link
              to='/Work'
              className='button'
            >
              View All Work 
            </Link>
          </button>
          </div>
          </>
  );
}

export default Cardintro;
