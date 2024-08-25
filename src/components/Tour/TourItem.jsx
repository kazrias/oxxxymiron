import React from 'react';
import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const TourItem = () => {
  return (
    <Section className='tour'>
      <div className='container'>
        <SectionTitle text={'Концерты'} />
      </div>
    </Section>
  );
};
