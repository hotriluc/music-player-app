import React from 'react';
import styles from '../MusicPlayer/MusicPlayerItem.module.css';
interface MusicPlayerItemProps {
  title: string;
  artistName: string;
  coverImage: string;
  likes: number;
}

function MusicPlayerItem(props: MusicPlayerItemProps): JSX.Element {
  return (
    <li className={styles['song']}>
      <div className={styles['img-holder']}>
        <img className={styles['cover-img']} src={props.coverImage} alt="" />
      </div>
      <div className={styles['title-wrapper']}>
        <p className={styles['title']}>{props.title}</p>
        <p className={styles['artist-name']}>{props.artistName}</p>
      </div>
      <p className={styles['likes']}>{props.likes}</p>
    </li>
  );
}

export default MusicPlayerItem;
