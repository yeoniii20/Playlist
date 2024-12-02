import React from 'react';
import { FaMusic, FaCompactDisc, FaHeart } from 'react-icons/fa';

const ArtistPage = () => {
  return (
    <div className="p-8 bg-black-8 min-h-screen text-gray-0">
      <div className="flex items-center space-x-8 mb-8">
        <div className="w-48 h-48 bg-pink-3 rounded-full flex items-center justify-center">
          <span className="text-4xl font-bold text-gray-0">Artist</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-pink-4">Artist Name</h1>
          <p className="text-gray-2">Genre: Pop, Rock</p>
          <button className="mt-4 flex items-center bg-pink-5 text-gray-0 px-4 py-2 rounded-lg">
            <FaHeart className="mr-2" /> Follow
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-pink-3">Popular Songs</h2>
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex items-center justify-between text-gray-0">
            <span>Song Title 1</span> <FaMusic />
          </div>
          <div className="flex items-center justify-between text-gray-0">
            <span>Song Title 2</span> <FaMusic />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-pink-3">Albums</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-black-7 rounded-lg text-center">
            <FaCompactDisc className="text-pink-5 mx-auto mb-2" />
            <p>Album Title 1</p>
          </div>
          <div className="p-4 bg-black-7 rounded-lg text-center">
            <FaCompactDisc className="text-pink-5 mx-auto mb-2" />
            <p>Album Title 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
