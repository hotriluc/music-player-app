import { ISong } from '../interfaces/SongInterface';

export interface IRootState {
  musicPlayer: {
    musicList: ISong[];
    currentSong: ISong;
  };
}
