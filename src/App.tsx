import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/login" component={Login} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
