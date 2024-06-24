import React from 'react';
import './App.css';
import Header from './components/header';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Link, Element } from 'react-scroll';



function App() {
  return (
    <div className="App">
      <Header />
      <nav className="navbar">

        <Link to="header" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="contact" smooth={true} duration={500}>Contact Me</Link>
  
        
        
      </nav>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}


export default App;

