import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/RootState';

function MusicPlayerNavigation(): JSX.Element {
  const current = useSelector(
    (state: IRootState) => state.musicPlayer.currentSong
  );

  return (
    <div>
      <p>{current.id}</p>
      <button>next</button>
      <button>back</button>
      <button>stop</button>
    </div>
  );
}

export default MusicPlayerNavigation;
