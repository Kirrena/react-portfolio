import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
          <Wrapper>
            <Header/>
            {/* Wrap Route elements in a Routes component */}
            <Routes>
               {/* Define routes using the Route component to render different page components at different paths */}
               {/* Define a default route that will render the Home component */}
               <Route path="/" element={<Home />} />
               <Route path="home" element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="projects" element={<Projects />} />
               <Route path="contact" element={<Contact />} />
            </Routes>
          </Wrapper>
      </div> 
    </Router>
  );
}

export default App;