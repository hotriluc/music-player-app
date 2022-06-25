import { configureStore } from '@reduxjs/toolkit';
import musicPlayerReducer from './music-player';

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
  },
});
