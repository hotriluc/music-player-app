import React from 'react';
import Wrapper from '../Layout/Wrapper';
import MusicPlayerList from './MusicPlayerList';

function MusicPlayer(): JSX.Element {
  return (
    <Wrapper>
      <MusicPlayerList />
    </Wrapper>
  );
}

export default MusicPlayer;
