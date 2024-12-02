'use client';

import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { StaticImageData } from 'next/image';

import { RECOMMAND_MUSIC } from '@/data/dummy.ts';
import PlayListItem from '../components/list/playListItem.tsx';

interface Song {
  id: string;
  title: string;
  artist: string;
  imageUrl: string | StaticImageData;
  duration: number;
}

const PlayList = function () {
  // 함수 선언 방식 사용
  const [playlist, setPlaylist] = useState<Song[]>(RECOMMAND_MUSIC);
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [likedSongs, setLikedSongs] = useState<string[]>([]);

  const moveSong = (draggedIndex: number, hoveredIndex: number) => {
    const updatedList = [...playlist];
    const [movedItem] = updatedList.splice(draggedIndex, 1);
    updatedList.splice(hoveredIndex, 0, movedItem);
    setPlaylist(updatedList);
  };

  const togglePlay = (songId: string) => {
    if (currentPlaying === songId) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(songId);
    }
  };

  const toggleLike = (songId: string) => {
    if (likedSongs.includes(songId)) {
      setLikedSongs(likedSongs.filter((id) => id !== songId));
    } else {
      setLikedSongs([...likedSongs, songId]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ul className="playlist">
        {playlist.map((song, index) => (
          <PlayListItem
            key={song.id}
            song={song}
            index={index}
            currentPlaying={currentPlaying}
            likedSongs={likedSongs}
            togglePlay={togglePlay}
            toggleLike={toggleLike}
            moveSong={moveSong}
          />
        ))}
      </ul>
    </DndProvider>
  );
};

export default PlayList;
