import { configureStore } from '@reduxjs/toolkit';
import musicPlayerReducer from './music-player';
import UiReducer from '../store/ui';

export const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
    ui: UiReducer,
  },
});
