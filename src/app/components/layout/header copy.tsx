import React from 'react';
import Search from '../input/search';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="text-2xl font-bold text-pink-4">Logo</div>

      <div className="flex items-center space-x-4">
        <Search />
        <button
          onClick={onLoginClick}
          className="bg-pink-5 text-gray-0 px-4 py-2 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
