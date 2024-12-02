'use client';

import { RECOMMAND_MUSIC } from '@/data/dummy';
import { useState } from 'react';
import MusicListItem from '../components/list/musicListItem';

const MusicList = () => {
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [likedSongs, setLikedSongs] = useState<string[]>([]);

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
    <div className="p-8 bg-black-8 min-h-screen text-gray-0">
      <h1 className="text-3xl font-bold mb-6 text-pink-4">Music List</h1>
      <ul className="space-y-4">
        {RECOMMAND_MUSIC.map((song) => (
          <MusicListItem
            key={song.id}
            song={song}
            currentPlaying={currentPlaying}
            likedSongs={likedSongs}
            togglePlay={togglePlay}
            toggleLike={toggleLike}
          />
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
