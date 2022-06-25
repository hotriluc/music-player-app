import React, { useState, useEffect } from 'react';
import { ISong } from '../../interfaces/SongInterface';
import MusicPlayerItem from './MusicPlayerItem';
import styles from './MusicPlayerList.module.css';

function MusicPlayerList(): JSX.Element {
  const [songsList, setSongsList] = useState<ISong[]>([]);

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

      setSongsList(newSongData);
    };

    getSongsList().catch((err) => console.log(err));
  }, []);

  return (
    <ul className={styles['music-player-list']}>
      {songsList.map((song) => (
        <MusicPlayerItem
          key={song.id}
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
