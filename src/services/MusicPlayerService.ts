import { Dispatch } from '@reduxjs/toolkit';
import { ISong } from '../interfaces/SongInterface';
import { musicPlayerActions } from '../store/music-player';
import { UiActions } from '../store/ui';

type songDataType = {
  id: string;
  name: string;
  artist_name: string;
  music_file_path: string;
  likes: number;
  cover_image_path: string;
  duration: number;
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
        duration: song.duration,
      };
    });

    return newSongData;
  };

  try {
    const musicList = await sendRequest();
    dispatch(musicPlayerActions.replaceMusicList(musicList));
  } catch (err) {
    dispatch(
      UiActions.setNotification({
        status: 'error',
        title: 'Error',
        msg: 'Music list fetching was failed',
      })
    );
  }
};

export const likeSong = async (songId: string, dispatch: Dispatch) => {
  const sendRequest = async () => {
    const response = await fetch(
      'https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id=${songId}`,
      }
    );
    return response.json();
  };

  try {
    const likedSong = await sendRequest();
    console.log(likedSong);
    dispatch(
      UiActions.setNotification({
        status: 'success',
        title: 'Success',
        msg: 'Song was liked successfully',
      })
    );
  } catch (err) {
    dispatch(
      UiActions.setNotification({
        status: 'error',
        title: 'Error',
        msg: 'Like song was failed',
      })
    );
  }
};
