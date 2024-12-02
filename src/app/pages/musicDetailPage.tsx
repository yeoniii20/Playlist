import React from 'react';
import { FaHeart, FaPlay, FaShareAlt } from 'react-icons/fa';

const MusicDetailPage = () => {
  return (
    <div className="p-8 bg-black-8 min-h-screen text-gray-0">
      <div className="flex items-center space-x-8 mb-8">
        <div className="w-48 h-48 bg-pink-3 rounded-lg flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-0">Album Art</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-pink-4">Song Title</h1>
          <p className="text-xl text-gray-1 mb-4">Artist Name</p>
          <div className="flex items-center space-x-4 text-pink-5">
            <button className="flex items-center space-x-2">
              <FaPlay /> <span>Play</span>
            </button>
            <button className="flex items-center space-x-2">
              <FaHeart /> <span>Like</span>
            </button>
            <button className="flex items-center space-x-2">
              <FaShareAlt /> <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-pink-3">Lyrics</h2>
        <p className="text-gray-2 mt-4">
          Here are the song lyrics... (sample text for lyrics goes here)
        </p>
      </div>
    </div>
  );
};

export default MusicDetailPage;
