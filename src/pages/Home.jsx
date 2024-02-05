import React from 'react';
import BgAnimation from '../components/BgAnimation';
import BottomGrid from '../components/BottomGrid';
import Hero from '../components/Hero';


export default function Home() {
  return (
    <div className="app-container">
      <BgAnimation />
      <Hero />
      <BottomGrid />
      
    </div>
  );
}
