import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blogs from './Blogs';
import Videos from './Videos';

const Media = () => {
  return (
    <Routes>
      <Route path="blogs" element={<Blogs />} />
      <Route path="videos" element={<Videos />} />
    </Routes>
  );
};

export default Media;