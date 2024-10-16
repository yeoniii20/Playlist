"use client";

import React from "react";
import { FaPlay, FaHeart, FaEllipsisH, FaCompactDisc } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

interface LargeCardProps {
  music: {
    title: string;
    artist: string;
    imageUrl?: string | StaticImageData;
  };
  toggleLike: (title: string) => void;
  likedSongs: string[];
}

const LargeCard = ({ music, toggleLike, likedSongs }: LargeCardProps) => {
  return (
    <div className="relative group bg-black-6 p-4 rounded-lg shadow-lg">
      {music.imageUrl ? (
        <Image
          src={music.imageUrl}
          alt={music.title}
          className="w-full h-52 object-cover rounded-lg shadow-lg"
        />
      ) : (
        <div className="w-full h-52 flex items-center justify-center bg-black-3 rounded-lg shadow-lg">
          <FaCompactDisc className="text-pink-5 text-6xl" />
        </div>
      )}

      {/* 재생 아이콘 */}
      <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <FaPlay className="text-3xl text-white bg-pink-5 p-3 rounded-full shadow-lg" />
      </button>

      {/* 카드 하단 텍스트 */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{music.title}</h3>
        <p className="text-sm text-gray-400">{music.artist}</p>
      </div>

      {/* 아이콘 (좋아요, 옵션) */}
      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <button
          onClick={() => toggleLike(music.title)}
          className={`${
            likedSongs.includes(music.title)
              ? "text-pink-5 bg-black-3 bg-opacity-50"
              : "text-white bg-black-3 bg-opacity-50"
          } p-2 rounded-full shadow-md transition duration-300 ease-in-out`}
        >
          <FaHeart />
        </button>
        <button className="text-white bg-black-3 bg-opacity-50 p-2 rounded-full shadow-md">
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
