import { createSlice } from '@reduxjs/toolkit';
import { ISong } from '../interfaces/SongInterface';

const initialState = {
  musicList: [],
  currentSong: {},
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
    },
  },
});

export const musicPlayerActions = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
