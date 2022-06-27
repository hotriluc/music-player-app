import { INotification } from '../interfaces/NotifiationInterface';
import { ISong } from '../interfaces/SongInterface';

export interface IRootState {
  musicPlayer: {
    musicList: ISong[];
    currentSong: ISong;
    isPlaying: boolean;
  };
  ui: {
    notification: INotification;
  };
}
