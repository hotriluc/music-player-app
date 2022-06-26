import { createSlice } from '@reduxjs/toolkit';
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
    selectCurrentSong(state, action) {
      const foundIndex = state.musicList.findIndex(
        (song: ISong) => song.id === action.payload
      );
      state.currentSong = state.musicList[foundIndex];
      state.isPlaying = false;
    },
    playSong(state) {
      state.isPlaying = !state.isPlaying;
    },
    nextSong(state) {
      const currentSongIndex = state.musicList.findIndex(
        (song: ISong) => song.id === state.currentSong.id
      );
      const nextSongIndex = (currentSongIndex + 1) % state.musicList.length;
      state.currentSong = state.musicList[nextSongIndex];
    },
  },
});

export const musicPlayerActions = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
