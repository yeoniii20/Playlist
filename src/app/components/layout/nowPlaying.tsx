import React from "react";

const NowPlaying = () => {
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
          <button className="w-8 h-8 bg-gray-5 rounded-full flex items-center justify-center">
            <span className="text-gray-0">⏮</span>
          </button>
          <button className="w-10 h-10 bg-pink-4 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black-0 font-bold">⏯</span>
          </button>
          <button className="w-8 h-8 bg-gray-5 rounded-full flex items-center justify-center">
            <span className="text-gray-0">⏭</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default NowPlaying;