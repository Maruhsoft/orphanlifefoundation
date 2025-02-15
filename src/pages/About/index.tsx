import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mission from './Mission';
import WhatWeDo from './WhatWeDo';
import ServiceArea from './ServiceArea';
import Financial from './Financial';
import Board from './Board';

const About = () => {
  return (
    <Routes>
      <Route path="mission" element={<Mission />} />
      <Route path="what-we-do" element={<WhatWeDo />} />
      <Route path="service-area" element={<ServiceArea />} />
      <Route path="financial" element={<Financial />} />
      <Route path="board" element={<Board />} />
    </Routes>
  );
};

export default About;