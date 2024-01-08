import React from 'react';
import '../../App.css';

import Frontpage from '../Frontpage';
import Intro from '../Intro';
import Footer from '../Footer';
import FrontImage from '../art/frontimage';
import Cardsintro from '../work/Cardintro';

function Home() {
  return (
    <>
      <Frontpage />
      <Intro />
      <Cardsintro />
      <FrontImage/>
      <Footer />

    </>

  );
}

export default Home;
