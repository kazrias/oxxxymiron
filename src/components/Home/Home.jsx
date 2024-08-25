import React from 'react';
import { MainBanner } from './MainBanner';
import { TourItem } from '../Tour/TourItem';
export const Home = () => {
  return (
    <main className='main'>
      <MainBanner />
      <TourItem />
    </main>
  );
};
