import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
    <Home />
    <About />
    <Education />
    <Experience />
  </div>
  );
}

export default App;
