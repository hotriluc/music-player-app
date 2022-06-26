import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISong } from '../../interfaces/SongInterface';
import MusicPlayerItem from './MusicPlayerItem';
import styles from './MusicPlayerList.module.css';
// import { musicPlayerActions } from '../../store/music-player';
import { IRootState } from '../../store/RootState';
import { fetchMusicList } from '../../services/MusicPlayerService';

function MusicPlayerList(): JSX.Element {
  const dispatch = useDispatch();
  const songsList: ISong[] = useSelector(
    (state: IRootState) => state.musicPlayer.musicList
  );

  useEffect(() => {
    fetchMusicList(dispatch);
  }, [dispatch, fetchMusicList]);

  return (
    <ul className={styles['music-player-list']}>
      {songsList.map((song) => (
        <MusicPlayerItem
          key={song.id}
          id={song.id}
          title={song.songName}
          artistName={song.artistName}
          likes={song.likes}
          coverImage={song.coverImage}
        />
      ))}
    </ul>
  );
}

export default MusicPlayerList;
