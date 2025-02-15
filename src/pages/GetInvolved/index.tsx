import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Support from './Support';
import Fundraising from './Fundraising';
import GivingTuesday from './GivingTuesday';
import Volunteer from './Volunteer';
import ReliefFund from './ReliefFund';

const GetInvolved = () => {
  return (
    <Routes>
      <Route path="support" element={<Support />} />
      <Route path="fundraising" element={<Fundraising />} />
      <Route path="giving-tuesday" element={<GivingTuesday />} />
      <Route path="volunteer" element={<Volunteer />} />
      <Route path="relief-fund" element={<ReliefFund />} />
    </Routes>
  );
};

export default GetInvolved;