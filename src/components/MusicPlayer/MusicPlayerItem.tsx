import React from 'react';

interface MusicPlayerItemProps {
  title: string;
  artistName: string;
  coverImage: string;
  likes: number;
}

function MusicPlayerItem(props: MusicPlayerItemProps): JSX.Element {
  return (
    <li>
      <p>{props.title}</p>
      <p>{props.artistName}</p>
      <img src={props.coverImage} />
      <p>{props.likes}</p>
    </li>
  );
}

export default MusicPlayerItem;
