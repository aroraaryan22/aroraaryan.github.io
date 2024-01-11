import React from 'react';
import Navbar from './Navbar';
import AryanArora from './AryanArora';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
const App = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>

      <main>
        <AryanArora />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
      </footer>
    </div>
  );
};

export default App;

