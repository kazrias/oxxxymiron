import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsItems } from '../../reducers/newsReducer';
import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '../Icon/Icon';
import { SLIDER_BUTTON_TYPES } from '../../utils/constants';
export const News = () => {
  const { PREV, NEXT } = SLIDER_BUTTON_TYPES;
  const dispatch = useDispatch();
  const { items = [], isLoading = false } = useSelector(({ news }) => news);
  const sliderRef = useRef(null);
  useEffect(() => {
    dispatch(getNewsItems());
  }, [dispatch]);
  const handleButtonClick = useCallback(type => {
    if (!sliderRef.current) return;
    const { swiper } = sliderRef.current;
    type === NEXT ? swiper.slideNext() : swiper.slidePrev();
  }, []);
  return (
    <Section className='news-section'>
      <div className='container'>
        <SectionTitle text='Новости' />
        {isLoading ? (
          'loading'
        ) : (
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            slidesPerView={4}
            className='news'
            navigation
            modules={[Navigation]}
          >
            {items.map(({ title, sys: { id }, cover: { url } }, i) => (
              <SwiperSlide key={id}>
                <ScrollAnimation animateIn='fadeInLeft' delay={i * 50}>
                  <Link to={`/news/${id}`} className='news-item'>
                    <div className='news-item__img'>
                      <img src={url} alt='news cover' />
                    </div>
                    <h3 className='news-item__title'>{title}</h3>
                  </Link>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
            <div className='navigation'>
              <div
                className='navigation-button navigation-prev'
                onClick={() => {
                  handleButtonClick(PREV);
                }}
              >
                <Icon name='slider-arrow' width={64} height={64} />
              </div>
              <div
                className='navigation-button navigation-next'
                onClick={() => {
                  handleButtonClick(NEXT);
                }}
              >
                <Icon name='slider-arrow' width={64} height={64} />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </Section>
  );
};
