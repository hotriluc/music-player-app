import React, { useRef } from 'react';
import styles from './MusicPlayerNavigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store/RootState';
import { musicPlayerActions } from '../../store/music-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

function MusicPlayerNavigation(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const currentSong = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );
  const isPlaying: boolean = useSelector(
    (state: IRootState) => state.musicPlayer.isPlaying
  );

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current && audioRef.current.pause();
    } else {
      audioRef.current && audioRef.current.play();
    }
    dispatch(musicPlayerActions.playSong());
  };

  return (
    <div className={styles['navigation-wrapper']}>
      <img
        className={styles['cover-img']}
        src={currentSong.coverImage}
        alt=""
      />
      <div className={styles['music-player-controls']}>
        <button className={styles['back-btn']}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className={styles['play-btn']} onClick={playSongHandler}>
          <FontAwesomeIcon icon={!isPlaying ? faPlay : faPause} />
        </button>
        <button className={styles['next-btn']}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
      <audio src={currentSong.audioFile} ref={audioRef}></audio>
    </div>
  );
}

export default MusicPlayerNavigation;
