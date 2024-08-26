import React from 'react';
import { MainBanner } from './MainBanner';
import { TourItems } from '../Tour/TourItems';
export const Home = () => {
  return (
    <main className='main'>
      <MainBanner />
      <TourItems />
    </main>
  );
};
