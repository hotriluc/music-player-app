import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  musicList: [],
};

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState: initialState,
  reducers: {
    replaceMusicList(state, action) {
      state.musicList = action.payload;
    },
  },
});

export const musicPlayerActions = musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
