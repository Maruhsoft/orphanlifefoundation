import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CWC from './CWC';
import DCP from './DCP';
import TRP from './TRP';

const Projects = () => {
  return (
    <Routes>
      <Route path="cwc" element={<CWC />} />
      <Route path="dcp" element={<DCP />} />
      <Route path="2rp" element={<TRP />} />
    </Routes>
  );
};

export default Projects;