import React from 'react';
import styles from './MusicPlayerNavigation.module.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/RootState';

function MusicPlayerNavigation(): JSX.Element {
  const current = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );

  return (
    <div className={styles['navigation-wrapper']}>
      <img className={styles['cover-img']} src={current.coverImage} alt="" />
      <div>
        <button>back</button>
        <button>stop</button>
        <button>next</button>
      </div>
    </div>
  );
}

export default MusicPlayerNavigation;
