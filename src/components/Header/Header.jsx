import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { Logo } from '../Logo/Logo';
import { MENU } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { Socials } from '../Socials/Socials';

export const Header = () => {
  return (
    <section className='header'>
      <div className='container'>
        <header>
          <Logo />
          <nav className='menu'>
            {MENU.map(({ link, name }, i) => (
              <ScrollAnimation
                key={link}
                className='menu-item'
                animateIn='fadeInDown'
                delay={i * 100}
                offset={0}
              >
                <Link to={`/${link}`}>{name}</Link>
              </ScrollAnimation>
            ))}
          </nav>
          <Socials width={'16px'} height={'16px'} />
        </header>
      </div>
    </section>
  );
};
