import React from 'react';
import '../App.css';
import './Frontpage.css';
import self from './work/images/self-portrait.png'

function Frontpage() {
  return (
    <div className='hero-container'>
      <img src = {self} width={640} height={800} alt="self portrait"/>

    </div>
  );
}

export default Frontpage;
