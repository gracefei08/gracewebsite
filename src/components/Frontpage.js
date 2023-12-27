import React from 'react';
import '../App.css';
import './Frontpage.css';
import self from './images/self-portrait.png'

function Frontpage() {
  return (
    <div className='hero-container'>
      <img src = {self} width={320} height={400} alt="self portrait"/>

    </div>
  );
}

export default Frontpage;
