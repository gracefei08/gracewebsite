import React from 'react';
import '../../App.css';
import Imagelist from '../art/Imagelist.js';
import Footer from '../Footer';
import Artdesc from '../art/artdesc.js';

function Art() {
    return (
      <>
        <Artdesc />
        <Imagelist />
        <Footer />
      </>
    );
  }
  
  export default Art;