import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Media from './pages/Media';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/programs/*" element={<Programs />} />
            <Route path="/get-involved/*" element={<GetInvolved />} />
            <Route path="/media/*" element={<Media />} />
            <Route path="/contact/*" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;