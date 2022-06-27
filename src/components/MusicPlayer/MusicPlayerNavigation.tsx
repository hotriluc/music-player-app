import React, { useEffect, useRef, useState } from 'react';
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
import Notification from '../UI/Notification';

let isInitial = true;

function MusicPlayerNavigation(): JSX.Element {
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );
  const isPlaying: boolean = useSelector(
    (state: IRootState) => state.musicPlayer.isPlaying
  );

  const notification = useSelector(
    (state: IRootState) => state.ui.notification
  );
  const [displayNotification, setDisplayNotification] = useState(false);

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
    dispatch(musicPlayerActions.selectCurrentSong('next'));
  };

  const prevBtnClickHandler = () => {
    dispatch(musicPlayerActions.selectCurrentSong('prev'));
  };

  const likeBtnClickHandler = () => {
    likeSong(currentSong.id, dispatch);
  };

  const onEndSongHandler = () => {
    dispatch(musicPlayerActions.selectCurrentSong('next'));
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

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    } else {
      const timer = setTimeout(() => {
        setDisplayNotification(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
        setDisplayNotification(true);
      };
    }
  }, [notification]);

  return (
    <div className={styles['navigation-wrapper']}>
      {displayNotification && notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.msg}
        />
      )}
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
