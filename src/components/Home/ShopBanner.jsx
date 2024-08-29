import React from 'react';
import { Section } from '../Section/Section';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import logo from '../../images/oxxxyshop.webp';
import bannerImg from '../../images/banner.webp';

export const ShopBanner = () => {
  return (
    <Section className='shop-banner__section'>
      <div className='container'>
        <div className='shop-banner__wrapper'>
          <Link to='/ shop' className='shop-banner'>
            <ScrollAnimation
              className='shop-banner__text'
              animateIn='fadeInRight'
              animateOut='fadeOutRight'
            >
              <p className='shop-banner__subtitle'>
                Обновленный мерч от оксимирона
              </p>
              <p className='shop-banner__title'>OXXXYSHOP 2.0</p>
            </ScrollAnimation>
            <ScrollAnimation
              className='shop-banner__logo'
              animateIn='fadeIn'
              animateOut='fadeOutLeft'
              delay={300}
            >
              <img src={logo} alt='shop logo' />
            </ScrollAnimation>
            <ScrollAnimation
              className='shop-banner__img'
              animateIn='fadeInLeft'
              animateOut='fadeOutLeft'
            >
              <img src={bannerImg} alt='shop banner' />
            </ScrollAnimation>
          </Link>
        </div>
      </div>
    </Section>
  );
};
