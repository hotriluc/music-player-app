import React from 'react';
import styles from '../MusicPlayer/MusicPlayerItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { musicPlayerActions } from '../../store/music-player';
import { IRootState } from '../../store/RootState';

interface MusicPlayerItemProps {
  id: string;
  title: string;
  artistName: string;
  coverImage: string;
  likes: number;
}

function MusicPlayerItem(props: MusicPlayerItemProps): JSX.Element {
  const dispatch = useDispatch();

  const onClickSongHandler = () => {
    dispatch(musicPlayerActions.selectCurrentSong(props.id));
  };

  const currentSong = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );

  const activeSongClasses =
    currentSong.id === props.id
      ? `${styles['song']} ${styles['active-song']}`
      : `${styles['song']}`;

  return (
    <li className={activeSongClasses} onClick={onClickSongHandler}>
      <div className={styles['img-holder']}>
        <img className={styles['cover-img']} src={props.coverImage} alt="" />
      </div>
      <div className={styles['title-wrapper']}>
        <p className={styles['title']}>{props.title}</p>
        <p className={styles['artist-name']}>{props.artistName}</p>
      </div>
      <div className={styles['likes']}>
        <p>Likes</p>
        <p>{props.likes}</p>
      </div>
    </li>
  );
}

export default MusicPlayerItem;
