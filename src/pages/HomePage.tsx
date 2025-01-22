import React from 'react';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Mission from '../components/Mission';
import VideoGallery from '../components/VideoGallery';
import Support from '../components/Support';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImpactStats />
      <Mission />
      <VideoGallery />
      <Support />
    </>
  );
};

export default HomePage;