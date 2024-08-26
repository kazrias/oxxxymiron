import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from '../Icon/Icon';

export const TrackItem = ({
  cover = 'ss',
  title,
  link,
  date,
  i,
  playing,
  onClick,
  currentTrack,
  sys,
}) => {
  console.log('cover');
  return (
    <ScrollAnimation
      className='track-item'
      animateIn='fadeInLeft'
      animateOut='fadeOutRight'
      delay={i * 100}
    >
      <div className='track' onClick={onClick}>
        <div className='track-image'>
          <img src={cover.url} alt={title} />
          {!!playing && currentTrack.sys.id === sys.id ? (
            <Icon name='pause' />
          ) : (
            <Icon name='play' />
          )}
        </div>
        <p className='track-date'>
          {new Date(date).toLocaleDateString('ru-RU', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <h3 className='track-title'>{title}</h3>
      </div>
    </ScrollAnimation>
  );
};
