import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const SectionTitle = ({ text }) => {
  return (
    <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutLeft'>
      <h2>{text}</h2>
    </ScrollAnimation>
  );
};
