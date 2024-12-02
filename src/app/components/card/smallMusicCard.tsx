'use client';

import React, { useRef } from 'react';
import {
  FaPlay,
  FaHeart,
  FaEllipsisH,
  FaDownload,
  FaPlus,
  FaRecordVinyl,
} from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';

interface SmallCardProps {
  music: {
    title: string;
    artist: string;
    imageUrl?: string | StaticImageData;
  };
  isOptionsOpen: string | null;
  toggleLike: (title: string) => void;
  toggleOptions: (title: string) => void;
  likedSongs: string[];
}

const SmallCard = ({
  music,
  isOptionsOpen,
  toggleLike,
  toggleOptions,
  likedSongs,
}: SmallCardProps) => {
  const optionsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative group bg-black-6 rounded-lg shadow-lg w-[180px] flex-shrink-0">
      {music.imageUrl ? (
        <Image
          src={music.imageUrl}
          alt={music.title}
          width={180}
          height={180}
          className="object-cover rounded-t-lg shadow-lg"
        />
      ) : (
        <div className="w-[180px] h-[180px] flex items-center justify-center bg-black-5 rounded-t-lg shadow-lg">
          {/* <FaCompactDisc className="text-pink-5 text-8xl" /> */}
          <FaRecordVinyl className="text-black-3 text-8xl" />
        </div>
      )}

      {/* 재생 아이콘 */}
      <button className="absolute inset-0 flex items-center justify-center mb-[87px] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="bg-black-3 bg-opacity-50 p-3 rounded-full hover:bg-pink-5 hover:bg-opacity-30">
          <FaPlay className="text-3xl pl-1 text-pink-5" />
        </div>
      </button>

      {/* 카드 하단 텍스트 */}
      <div className="p-2 space-y-0.5">
        <h3 className="text-sm font-semibold">{music.title}</h3>
        <p className="text-xs text-gray-4">{music.artist}</p>
      </div>

      {/* 아이콘 (좋아요, 옵션) */}
      <div
        className={`absolute top-1.5 right-1.5 flex space-x-2 items-center ${
          isOptionsOpen === music.title ? 'translate-x-[0px]' : ''
        }`}
        ref={optionsRef}
      >
        {/* 하트 버튼 */}
        <button
          onClick={() => toggleLike(music.title)}
          className={`${
            likedSongs.includes(music.title) ? 'text-pink-5' : 'text-gray-0'
          } p-1.5 bg-black-3 bg-opacity-50 rounded-full shadow-md transition duration-300 ease-in-out`}
        >
          <FaHeart className="text-xs" />
        </button>

        {/* 옵션 버튼 */}
        {isOptionsOpen !== music.title ? (
          <button
            onClick={() => toggleOptions(music.title)}
            className="text-gray-0 bg-black-3 bg-opacity-50 p-1.5 rounded-full shadow-md"
          >
            <FaEllipsisH className="text-xs" />
          </button>
        ) : (
          <div className="bg-opacity-50 rounded-full shadow-md bg-black-3">
            <button className="text-gray-0 p-1.5 hover:text-gray-1">
              <FaPlay className="text-xs" />
            </button>
            <button className="text-gray-0 p-1.5 hover:text-gray-1">
              <FaDownload className="text-xs" />
            </button>
            <button className="text-gray-0 p-1.5 hover:text-gray-1">
              <FaPlus className="text-xs" />
            </button>
            <button className="text-gray-0 p-1.5">
              <FaEllipsisH
                className="text-xs"
                onClick={() => toggleOptions(music.title)}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallCard;
