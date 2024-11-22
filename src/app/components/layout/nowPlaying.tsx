"use client";

import React, { useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "phosphor-react"; // Phosphor Icons

const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black-7 text-gray-0 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-pink-4 rounded-full flex items-center justify-center">
            <span className="text-black-0 font-bold">🎵</span>
          </div>
          <div>
            <p className="text-gray-0 text-sm">Now Playing</p>
            <p className="text-pink-3 font-semibold">My Favorite Song</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* 이전 곡 버튼 */}
          <button className="w-8 h-8 bg-gray-5 rounded-full flex items-center justify-center">
            <SkipBack size={20} weight="bold" className="text-gray-0" />
          </button>
          {/* 재생/정지 버튼 */}
          <button
            className="w-10 h-10 bg-pink-4 rounded-full flex items-center justify-center shadow-lg"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause size={24} weight="bold" className="text-black-0" />
            ) : (
              <Play size={24} weight="bold" className="text-black-0" />
            )}
          </button>
          {/* 다음 곡 버튼 */}
          <button className="w-8 h-8 bg-gray-5 rounded-full flex items-center justify-center">
            <SkipForward size={20} weight="bold" className="text-gray-0" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default NowPlaying;
