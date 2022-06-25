import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISong } from '../../interfaces/SongInterface';
import MusicPlayerItem from './MusicPlayerItem';
import styles from './MusicPlayerList.module.css';
import { musicPlayerActions } from '../../store/music-player';
import { IRootState } from '../../store/RootState';

function MusicPlayerList(): JSX.Element {
  const dispatch = useDispatch();
  const songsList: ISong[] = useSelector(
    (state: IRootState) => state.musicPlayer.musicList
  );

  useEffect(() => {
    const getSongsList = async () => {
      type songDataType = {
        id: string;
        name: string;
        artist_name: string;
        music_file_path: string;
        likes: number;
        cover_image_path: string;
      };

      const response = await fetch(
        'https://api-stg.jam-community.com/song/trending'
      );
      const songsData = await response.json();
      const newSongData: ISong[] = songsData.map((song: songDataType) => {
        return {
          id: song.id,
          songName: song.name,
          artistName: song.artist_name,
          audioFile: song.music_file_path,
          likes: song.likes,
          coverImage: song.cover_image_path,
        };
      });

      dispatch(musicPlayerActions.replaceMusicList(newSongData));
    };

    getSongsList().catch((err) => console.log(err));
  }, []);

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
