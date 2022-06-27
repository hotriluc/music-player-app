import React, { useEffect, useRef } from 'react';
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
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { likeSong } from '../../services/MusicPlayerService';

function MusicPlayerNavigation(): JSX.Element {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );
  const isPlaying: boolean = useSelector(
    (state: IRootState) => state.musicPlayer.isPlaying
  );

  const playOrPauseSong = () => {
    if (isPlaying) {
      audioRef.current && audioRef.current.pause();
    } else {
      audioRef.current && audioRef.current.play();
    }
    dispatch(musicPlayerActions.playPauseSong());
  };

  const playBtnClickHandler = () => {
    playOrPauseSong();
  };

  const nextBtnClickHandler = () => {
    dispatch(musicPlayerActions.nextSong());
  };

  const prevBtnClickHandler = () => {
    dispatch(musicPlayerActions.prevSong());
  };

  const likeBtnClickHandler = () => {
    likeSong(currentSong.id);
  };

  const onEndSongHandler = () => {
    dispatch(musicPlayerActions.nextSong());
  };

  useEffect(() => {
    const promise = audioRef?.current?.play();

    if (promise !== undefined) {
      promise
        .then(() => {
          playOrPauseSong();
        })
        .catch(() => {
          return;
        });
    }
  }, [currentSong]);

  return (
    <div className={styles['navigation-wrapper']}>
      <button className={styles['like-btn']} onClick={likeBtnClickHandler}>
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <img
        className={styles['cover-img']}
        src={currentSong.coverImage}
        alt=""
      />
      <div className={styles['music-player-controls']}>
        <button className={styles['back-btn']} onClick={prevBtnClickHandler}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          className={
            !isPlaying
              ? styles['play-btn']
              : `${styles['play-btn']} ${styles['is-playing']}`
          }
          onClick={playBtnClickHandler}
        >
          <FontAwesomeIcon icon={!isPlaying ? faPlay : faPause} />
        </button>
        <button className={styles['next-btn']} onClick={nextBtnClickHandler}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
      <audio
        src={currentSong.audioFile}
        ref={audioRef}
        onEnded={onEndSongHandler}
      ></audio>
    </div>
  );
}

export default MusicPlayerNavigation;
