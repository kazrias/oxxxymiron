import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon } from '../Icon/Icon';
export const TourItem = ({
  date,
  city,
  place,
  ticketLink,
  videoLink,
  soldOut,
  i,
}) => {
  return (
    <li>
      <ScrollAnimation
        className='tour-item'
        animateIn='fadeInLeft'
        animateOut='fadeOutRight'
        delay={i * 100}
        offset={150}
      >
        <div className='tour-item__info'>
          <div className='tour-item__date'>
            {new Date(date).toLocaleDateString('ru-RU', {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
          <p className='tour-item__place'>{place}</p>
        </div>
        <p className='tour-item__city'>{city}</p>
        {!soldOut ? (
          <a
            href={ticketLink || videoLink}
            target='_blank'
            className='tour-item__button link'
          >
            {ticketLink ? (
              <>
                <span>Билеты</span>
                <Icon name='arrow-right' />
              </>
            ) : (
              <>
                <span>Видео</span>
                <Icon name='arrow-right' />
              </>
            )}
          </a>
        ) : (
          <button className='tour-item__button soldout'>Sold Out</button>
        )}
      </ScrollAnimation>
    </li>
  );
};
