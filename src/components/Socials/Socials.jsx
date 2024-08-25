import React from 'react';

import { SOCIALS } from '../../utils/constants';

import { Icon } from '../Icon/Icon';

export const Socials = ({ width, height }) => {
  return (
    <ul className='socials'>
      {SOCIALS.map(({ icon, link }) => (
        <li key={icon} title={icon} className='socials-item'>
          <a href={link} target='_blank'>
            <Icon name={icon} width={width} height={height} />
          </a>
        </li>
      ))}
    </ul>
  );
};
