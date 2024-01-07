import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* Define a route that will have descendant routes */}
        <Route path="projects/*" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;