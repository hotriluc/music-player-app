import { Dispatch } from '@reduxjs/toolkit';
import { ISong } from '../interfaces/SongInterface';
import { musicPlayerActions } from '../store/music-player';

type songDataType = {
  id: string;
  name: string;
  artist_name: string;
  music_file_path: string;
  likes: number;
  cover_image_path: string;
};

export const fetchMusicList = async (dispatch: Dispatch) => {
  const sendRequest = async () => {
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

    return newSongData;
  };

  try {
    const musicList = await sendRequest();
    dispatch(musicPlayerActions.replaceMusicList(musicList));
  } catch (err) {
    console.log(err);
  }
};
