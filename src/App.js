import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tech from './components/pages/Tech';
import Art from './components/pages/Art';
import Business from './components/pages/Business';
import Inspiring from './components/pages/Inspiring';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Tech' component={Tech} />
          <Route path='/Art' component={Art} />
          <Route path='/Business' component={Business} />
          <Route path='/Inspiring' component={Inspiring} />
          <Route path='/Resume' component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
