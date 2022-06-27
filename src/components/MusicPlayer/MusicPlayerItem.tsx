import React from 'react';
import styles from '../MusicPlayer/MusicPlayerItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { musicPlayerActions } from '../../store/music-player';
import { IRootState } from '../../store/RootState';
import moment from 'moment';

interface MusicPlayerItemProps {
  id: string;
  title: string;
  artistName: string;
  coverImage: string;
  duration: number;
  likes: number;
}

function MusicPlayerItem(props: MusicPlayerItemProps): JSX.Element {
  const dispatch = useDispatch();
  const currentSong = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );

  const activeSongClasses =
    currentSong.id === props.id
      ? `${styles['song']} ${styles['active-song']}`
      : `${styles['song']}`;

  const formattedDuration = moment()
    .startOf('day')
    .seconds(currentSong.duration)
    .format('mm:ss');

  const onClickSongHandler = () => {
    dispatch(musicPlayerActions.selectCurrentSong(props.id));
  };

  return (
    <li className={activeSongClasses} onClick={onClickSongHandler}>
      <div className={styles['img-holder']}>
        <img className={styles['cover-img']} src={props.coverImage} alt="" />
      </div>
      <div className={styles['title-wrapper']}>
        <p className={styles['title']}>{props.title}</p>
        <p className={styles['artist-name']}>{props.artistName}</p>
      </div>
      <p className={styles['duration']}>{formattedDuration}</p>
    </li>
  );
}

export default MusicPlayerItem;
