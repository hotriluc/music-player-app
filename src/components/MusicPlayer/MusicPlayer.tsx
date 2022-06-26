import React from 'react';
import MusicPlayerList from './MusicPlayerList';
import MusicPlayerNavigation from './MusicPlayerNavigation';
import styles from './MusicPlayer.module.css';

function MusicPlayer(): JSX.Element {
  return (
    <div className={styles['music-player']}>
      <MusicPlayerList />
      <MusicPlayerNavigation />
    </div>
  );
}

export default MusicPlayer;
