import React, { useEffect } from 'react';
import { useCallback } from 'react';
import MusicPlayerItem from './MusicPlayerItem';

function MusicPlayerList(): JSX.Element {
  //   const [songsList, setSongsList] = useState([]);

  //   async function getSongsList() {
  //     const res = await fetch('https://api-stg.jam-community.com/song/trending');
  //     const data = await res.json();
  //     console.log(res);
  //     return data;
  //   }

  const getSongsList = useCallback(async () => {
    const response = await fetch(
      'https://api-stg.jam-community.com/song/trending'
    );
    const songsData = await response.json();
    console.log(songsData);
  }, []);

  useEffect(() => {
    getSongsList();
  }, []);

  return (
    <ul>
      <li>
        <MusicPlayerItem />
      </li>
      <li>
        <MusicPlayerItem />
      </li>
      <li>
        <MusicPlayerItem />
      </li>
      <li>
        <MusicPlayerItem />
      </li>
    </ul>
  );
}

export default MusicPlayerList;
