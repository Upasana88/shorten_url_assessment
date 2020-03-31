import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import Login from './components/login/login'
import SignUp from './components/sign-up/sign-up'
import Shortener from './components/shortener/shortener'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App d-flex flex-column">
      <div className="h-25">
        <NavBar />
      </div>
      <div className="h-50 d-flex align-items-center body-container">
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/shorten/:short_url?" component={Shortener} />
          </Switch>
        </Router>

      </div>
      <div className="h-25 mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
