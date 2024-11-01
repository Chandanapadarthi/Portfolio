// App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './components/Portfolio.css';
import Projects from './components/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <ProjectCard/>
        <Projects/>
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;