import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black-7 text-gray-0 shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-pink-4 rounded-full flex items-center justify-center">
            <span className="text-black-0 font-bold">🎶</span>
          </div>
          <h1 className="text-pink-3 font-semibold text-lg">My Playlist</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-5 rounded-md text-gray-0 hover:bg-gray-4">
            Home
          </button>
          <button className="px-4 py-2 bg-gray-5 rounded-md text-gray-0 hover:bg-gray-4">
            Browse
          </button>
          <button className="px-4 py-2 bg-pink-4 rounded-md text-black-0 font-semibold shadow-md hover:bg-pink-3">
            Library
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
