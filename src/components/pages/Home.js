import React from 'react';
import '../../App.css';
import Cards from '../work/Cards';
import Frontpage from '../Frontpage';
import Intro from '../Intro';
import Footer from '../Footer';
import FrontImage from '../art/frontimage';

function Home() {
  return (
    <>
      <Frontpage />
      <Intro />
      <Cards />
      <FrontImage/>
      <Footer />

    </>

  );
}

export default Home;
