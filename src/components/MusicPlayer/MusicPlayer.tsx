import React from 'react';
import MusicPlayerList from './MusicPlayerList';
import MusicPlayerNavigation from './MusicPlayerNavigation';
import styles from './MusicPlayer.module.css';

function MusicPlayer(): JSX.Element {
  // const [activeSong, setActiveSong] = useState({});
  // const clickedSongHandler = (song: ISong) => {
  //   setActiveSong(song);
  // };

  return (
    <div className={styles['music-player']}>
      {/* <MusicPlayerList clickSong={clickedSongHandler} /> */}
      <MusicPlayerList />
      <MusicPlayerNavigation />
    </div>
  );
}

export default MusicPlayer;
