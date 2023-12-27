import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './components/pages/Work';
import Art from './components/pages/Art';
import Inspiring from './components/pages/Inspiring';
import Resume from './components/pages/Inspiring';

function App(){
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Work' component={Work} />
          <Route path='/Art' component={Art} />
          <Route path='/Inspiring' component={Inspiring} />
          <Route path='/Resume' component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
