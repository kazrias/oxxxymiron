import React from 'react';
import { MainBanner } from './MainBanner';
import { TourItems } from '../Tour/TourItems';
import { TourBanner } from './TourBanner';
import { Tracks } from '../Tracks/Tracks';
import { ShopBanner } from './ShopBanner';
export const Home = () => {
  return (
    <main className='main'>
      <MainBanner />
      <TourItems />
      <TourBanner />
      <Tracks />
      <ShopBanner />
    </main>
  );
};
