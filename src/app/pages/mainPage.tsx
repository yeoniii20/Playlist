'use client';

import React, { useState } from 'react';
import { POPULAR_MUSIC, RECOMMAND_MUSIC } from '@/data/dummy.ts';
import LargeCard from '../components/card/largeMusicCard.tsx';
import LoginForm from '../components/loginForm.tsx';
import SmallCard from '../components/card/smallMusicCard.tsx';

function MainPage() {
  const [likedSongs, setLikedSongs] = useState<string[]>([]);
  const [isOptionsOpen, setIsOptionsOpen] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const toggleLike = (title: string) => {
    if (likedSongs.includes(title)) {
      setLikedSongs(likedSongs.filter((song) => song !== title));
    } else {
      setLikedSongs([...likedSongs, title]);
    }
  };

  const toggleOptions = (title: string) => {
    setIsOptionsOpen(isOptionsOpen === title ? null : title);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="relative p-8 bg-black-8 min-h-screen text-gray-0">
      {/* <Header onLoginClick={() => setIsLoginModalOpen(true)} /> */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black-8 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-black-7 p-6 rounded-lg shadow-lg relative">
            <LoginForm closeModal={closeLoginModal} />
          </div>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6 text-pink-4">Music Library</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-pink-3">Recommand Music</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {RECOMMAND_MUSIC.map((music) => (
            <SmallCard
              key={music.id}
              music={music}
              isOptionsOpen={isOptionsOpen}
              toggleLike={toggleLike}
              toggleOptions={toggleOptions}
              likedSongs={likedSongs}
            />
          ))}
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-pink-3">Popular Charts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {POPULAR_MUSIC.map((music) => (
            <LargeCard
              key={music.id}
              music={music}
              toggleLike={toggleLike}
              likedSongs={likedSongs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
