import React from 'react';

function MusicPlayerItem(props: { id: string }): JSX.Element {
  return (
    <div>
      <p>{props.id}</p>
    </div>
  );
}

export default MusicPlayerItem;
