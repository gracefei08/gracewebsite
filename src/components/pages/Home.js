import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Frontpage from '../Frontpage';
import Intro from '../Intro';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Frontpage />
      <Intro />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
