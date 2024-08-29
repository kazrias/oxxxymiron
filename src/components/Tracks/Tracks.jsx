import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTracksItems } from '../../reducers/tracksReducer';
import { Section } from '../Section/Section';
import { TrackItem } from './TrackItem';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

export const Tracks = () => {
  const dispatch = useDispatch();
  const { items = [], isLoading } = useSelector(({ tracks }) => tracks);
  const [audio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  useEffect(() => {
    dispatch(getTracksItems());
  }, [dispatch]);
  const handleTrackClick = track => {
    setCurrentTrack(track);
    setPlaying(prev => {
      const isPlaying = track.sys.id === currentTrack?.sys?.id ? !prev : true;
      audio.src = track.link.url;
      !isPlaying ? audio.pause() : audio.play();
      return isPlaying;
    });
  };
  return (
    <Section className='tracks-section'>
      <div className='container'>
        <SectionTitle text='Релизы' />
        {isLoading ? (
          'Loading'
        ) : (
          <div className='tracks'>
            {items.map((track, i) => {
              return (
                <TrackItem
                  key={track.sys.id}
                  {...track}
                  i={i}
                  playing={playing}
                  onClick={() => handleTrackClick(track)}
                  currentTrack={currentTrack}
                />
              );
            })}
          </div>
        )}
        <Link to='/tracks' className='button-more'>
          Все релизы
        </Link>
      </div>
    </Section>
  );
};
