import React, { useEffect } from 'react';
import { Section } from '../Section/Section';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getTourItems } from '../../reducers/tourReducer';
import { TourItem } from './TourItem';
import { Link } from 'react-router-dom';

export const TourItems = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading } = useSelector(({ tour }) => tour);
  useEffect(() => {
    dispatch(getTourItems());
  }, [dispatch]);
  //const filtered=items.filter soldOuts
  return (
    <Section className='tour'>
      <div className='container'>
        <SectionTitle text='Концерты' />
        {isLoading ? (
          'Loading'
        ) : (
          <ul className='tour-list'>
            {items.map((item, i) => {
              return <TourItem key={item.sys.id} i={i} {...item} />;
            })}
          </ul>
        )}
        <div className='button-more'>
          <Link to='/tour'>Все концерты</Link>
        </div>
      </div>
    </Section>
  );
};
