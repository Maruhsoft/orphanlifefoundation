import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Education from './Education';
import Lifestyle from './Lifestyle';
import Health from './Health';

const Programs = () => {
  return (
    <Routes>
      <Route path="education" element={<Education />} />
      <Route path="lifestyle" element={<Lifestyle />} />
      <Route path="health" element={<Health />} />
    </Routes>
  );
};

export default Programs;