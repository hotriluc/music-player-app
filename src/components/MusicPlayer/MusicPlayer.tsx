import React from 'react';
import MusicPlayerList from './MusicPlayerList';
import MusicPlayerNavigation from './MusicPlayerNavigation';
import styles from './MusicPlayer.module.css';
import Notification from '../UI/Notification';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/RootState';

function MusicPlayer(): JSX.Element {
  const notification = useSelector(
    (state: IRootState) => state.ui.notification
  );

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.msg}
          title={notification.title}
        />
      )}
      <div className={styles['music-player']}>
        <MusicPlayerList />
        <MusicPlayerNavigation />
      </div>
    </>
  );
}

export default MusicPlayer;
