'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  FaTimes,
  FaPlay,
  FaPause,
  FaBackward,
  FaForward,
  FaHeart,
} from 'react-icons/fa';

interface AlbumModalProps {
  song: {
    id: string;
    title: string;
    artist: string;
    imageUrl: string | StaticImageData;
    duration: number;
  };
  onClose: () => void;
}

const AlbumModal = ({ song, onClose }: AlbumModalProps) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [likedSongs, setLikedSongs] = useState<string[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= song.duration) {
            clearInterval(interval!);
            return song.duration;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (!isPlaying && currentTime !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [isPlaying, currentTime, song.duration]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleLike = (songId: string) => {
    setLikedSongs((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId],
    );
  };

  // Convert seconds to MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Calculate the progress percentage for the circle position
  const progressPercentage = (currentTime / song.duration) * 100;

  return (
    <div
      className="fixed inset-0 bg-black-8 bg-opacity-60 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-gray-5 bg-opacity-60 p-8 rounded-lg relative w-[360px] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-4 hover:text-white"
        >
          <FaTimes size={20} />
        </button>
        <div className="flex flex-col items-center relative">
          {/* Heart Button */}
          <button
            onClick={() => toggleLike(song.id)}
            className={`absolute bottom-52 right-6 p-2 rounded-full ${
              likedSongs.includes(song.id)
                ? 'text-pink-5'
                : 'text-gray-4 hover:text-pink-5'
            }`}
          >
            <FaHeart size={30} />
          </button>

          <Image
            src={
              typeof song.imageUrl === 'string'
                ? song.imageUrl
                : song.imageUrl.src
            }
            alt={song.title}
            width={250}
            height={250}
            className="rounded-md"
          />
          <div className="pt-4 text-center space-y-1 mb-6">
            <h2 className="text-2xl font-semibold">{song.title}</h2>
            <p className="text-gray-4">{song.artist}</p>
          </div>

          <div className="w-full mt-4 px-4">
            <div className="relative h-1 bg-gray-3 rounded-full">
              <div
                className="absolute top-0 left-0 h-1 bg-pink-5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div
                className="absolute top-[-5px] left-0 w-3 h-3 bg-black-0 border border-none rounded-full"
                style={{ left: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-black-0">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(song.duration)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center w-full mt-8 px-8">
            <button className="text-gray-1 hover:text-black-0">
              <FaBackward size={24} />
            </button>
            <button
              className="text-gray-1 hover:text-black-0"
              onClick={handlePlayPause}
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}{' '}
            </button>
            <button className="text-gray-1 hover:text-black-0">
              <FaForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumModal;
