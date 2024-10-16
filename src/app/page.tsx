"use client";

import React, { useState } from "react";
import { POPULAR_MUSIC, RECOMMAND_MUSIC } from "@/data/dummy";
import cover11 from "@/app/images/cover/theweekend.png";
import LargeCard from "./components/largeCard";
import SmallCard from "./components/card/smallCard";

const MainPage = () => {
  const [likedSongs, setLikedSongs] = useState<string[]>([]);
  const [isOptionsOpen, setIsOptionsOpen] = useState<string | null>(null);

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

  return (
    <div className="p-8 bg-black-8 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-pink-4">Music Library</h1>

      {/* 추천 음악 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-pink-3">Recommand Music</h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {RECOMMAND_MUSIC.map((music, index) => (
            <SmallCard
              key={index}
              music={music}
              isOptionsOpen={isOptionsOpen}
              toggleLike={toggleLike}
              toggleOptions={toggleOptions}
              likedSongs={likedSongs}
            />
          ))}
        </div>
      </div>

      {/* 인기 차트 섹션 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-pink-3">Popular Charts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {POPULAR_MUSIC.map((music, index) => (
            <LargeCard
              key={index}
              music={music}
              toggleLike={toggleLike}
              likedSongs={likedSongs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
