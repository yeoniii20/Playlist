"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  FaPlay,
  FaPause,
  FaHeart,
  FaEllipsisH,
  FaRecordVinyl,
} from "react-icons/fa";
import AlbumModal from "../modal/albumModal";

interface MusicListItemProps {
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
}

const MusicListItem = ({
  song,
  currentPlaying,
  likedSongs,
  togglePlay,
  toggleLike,
}: MusicListItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className="flex items-center justify-between bg-black-7 p-3 rounded-lg shadow-md">
        <div className="flex items-center cursor-pointer" onClick={openModal}>
          {song.imageUrl ? (
            <Image
              src={song.imageUrl}
              alt={song.title}
              width={64}
              height={64}
              className="rounded-md mr-4"
            />
          ) : (
            <div className="w-16 h-16 flex items-center justify-center bg-black-5 mr-4 rounded-md">
              <FaRecordVinyl className="text-black-3 text-5xl" />
            </div>
          )}

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">{song.title}</h3>
            <p className="text-gray-4">{song.artist}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => togglePlay(song.id)}
            className="p-2 rounded-full hover:bg-opacity-30 hover:bg-black-3 transition duration-300"
          >
            {currentPlaying === song.id ? (
              <FaPause size={20} className="text-gray-2" />
            ) : (
              <FaPlay
                size={20}
                className="pl-1 text-gray-4 hover:text-gray-2"
              />
            )}
          </button>

          <button
            onClick={() => toggleLike(song.id)}
            className={`p-2 rounded-full ${
              likedSongs.includes(song.id)
                ? "text-pink-5"
                : "text-gray-4 hover:text-pink-5"
            }`}
          >
            <FaHeart size={20} />
          </button>

          <button className="p-2 rounded-full text-gray-4 hover:text-gray-2">
            <FaEllipsisH size={20} />
          </button>
        </div>
      </li>

      {isModalOpen && <AlbumModal song={song} onClose={closeModal} />}
    </>
  );
};

export default MusicListItem;
