'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useDrag, useDrop } from 'react-dnd';
import {
  FaPlay,
  FaPause,
  FaHeart,
  FaEllipsisH,
  FaRecordVinyl,
  FaGripVertical,
} from 'react-icons/fa';

interface PlayListItemProps {
  song: {
    id: string;
    title: string;
    artist: string;
    imageUrl: string | StaticImageData;
    duration: number;
  };
  currentPlaying: string | null;
  likedSongs: string[];
  togglePlay: (songId: string) => void;
  toggleLike: (songId: string) => void;
  index: number;
  moveSong: (draggedIndex: number, hoveredIndex: number) => void;
}

function PlayListItem({
  song,
  currentPlaying,
  likedSongs,
  togglePlay,
  toggleLike,
  index,
  moveSong,
}: PlayListItemProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'PLAYLIST_ITEM',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'PLAYLIST_ITEM',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveSong(item.index, index);
        item.index = index;
      }
    },
  });

  const dragDropRef = (node: HTMLLIElement | null) => {
    dragRef(node);
    dropRef(node);
  };

  return (
    <li
      ref={dragDropRef}
      className={`flex items-center justify-between py-2 px-4 border border-t-0 border-x-0 border-gray-300 border-opacity-50 ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-center">
        <FaGripVertical className="mr-6 text-gray-3" />
        <div
          onClick={() => console.log('Clicked')}
          className="flex items-center cursor-pointer"
        >
          {song.imageUrl ? (
            <Image
              src={song.imageUrl}
              alt={song.title}
              width={40}
              height={40}
              className="rounded-sm mr-4"
            />
          ) : (
            <div className="flex items-center justify-center bg-black-5 mr-4 rounded-md">
              <FaRecordVinyl className="text-black-3" size={40} />
            </div>
          )}
          <div className="flex flex-col">
            <h3 className="text-base text-gray-1 font-semibold">
              {song.title}
            </h3>
            <p className="text-sm text-gray-4">{song.artist}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative">
          {currentPlaying === song.id && (
            <div className="wave-animation">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <button
            onClick={() => togglePlay(song.id)}
            className="p-2 rounded-full hover:bg-opacity-30 hover:bg-black-3 transition duration-300"
          >
            {currentPlaying === song.id ? (
              <FaPause className="text-gray-2" />
            ) : (
              <FaPlay className="pl-1 text-gray-4 hover:text-gray-2" />
            )}
          </button>
        </div>

        <button
          onClick={() => toggleLike(song.id)}
          className={`p-2 rounded-full ${
            (likedSongs ?? []).includes(song.id)
              ? 'text-pink-5'
              : 'text-gray-4 hover:text-pink-5'
          }`}
        >
          <FaHeart />
        </button>

        <button className="p-2 rounded-full text-gray-4 hover:text-gray-2">
          <FaEllipsisH />
        </button>
      </div>
    </li>
  );
}

export default PlayListItem;
