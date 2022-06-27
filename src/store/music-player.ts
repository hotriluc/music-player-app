import { createSlice } from '@reduxjs/toolkit';
import { mod } from '../helpers/modulo';
import { ISong } from '../interfaces/SongInterface';
import { IRootState } from './RootState';

const initialState: IRootState['musicPlayer'] = {
  musicList: [],
  currentSong: {
    id: '',
    songName: '',
    artistName: '',
    audioFile: '',
    coverImage: '',
    likes: 0,
    duration: 0,
  },
  isPlaying: false,
};

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState: initialState,
  reducers: {
    replaceMusicList(state, action) {
      state.musicList = action.payload;
      state.currentSong = state.musicList[0];
    },
    playPauseSong(state) {
      state.isPlaying = !state.isPlaying;
    },
    selectCurrentSong(state, action) {
      let currentSongIndex;
      let songIndexToPlay;

      if (action.payload === 'next' || action.payload === 'prev') {
        currentSongIndex = state.musicList.findIndex(
          (song: ISong) => song.id === state.currentSong.id
        );
        songIndexToPlay = mod(
          action.payload === 'next'
            ? currentSongIndex + 1
            : currentSongIndex - 1,
          state.musicList.length
        );
      } else {
        songIndexToPlay = state.musicList.findIndex(
          (song: ISong) => song.id === action.payload
        );
      }

      state.currentSong =
        state.musicList[songIndexToPlay] || state.musicList[0];
      state.isPlaying = false;
    },
  },
});

export const musicPlayerActions = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
