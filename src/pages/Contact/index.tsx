import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import FAQs from './FAQs';

const ContactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="faqs" element={<FAQs />} />
    </Routes>
  );
};

export default ContactRouter;