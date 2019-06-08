import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    const loggedIn = true;
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" render={() => (
            loggedIn ? (
              <Redirect to="/dashboard" component={Home}/>
            ) : (
              <Home/>
            )
          )}/>
          {/* <Route exact path='/' component={Home}/> */}
          <Route path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
        </Switch>

      </div>
    );
  }
}

export default App;
