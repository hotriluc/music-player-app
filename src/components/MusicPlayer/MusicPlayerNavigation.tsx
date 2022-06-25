import React from 'react';
import styles from './MusicPlayerNavigation.module.css';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/RootState';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  // faPause,
  faForward,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

function MusicPlayerNavigation(): JSX.Element {
  const current = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );

  return (
    <div className={styles['navigation-wrapper']}>
      <img className={styles['cover-img']} src={current.coverImage} alt="" />
      <div className={styles['music-player-controls']}>
        <button className={styles['back-btn']}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className={styles['play-btn']}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className={styles['next-btn']}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </div>
  );
}

export default MusicPlayerNavigation;
