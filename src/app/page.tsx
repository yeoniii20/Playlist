"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaHeart,
  FaEllipsisH,
  FaDownload,
  FaPlus,
} from "react-icons/fa";
import Image from "next/image";
import { POPULAR_MUSIC, RECOMMAND_MUSIC } from "@/data/dummy";
import cover11 from "@/app/images/cover/theweekend.png";

const defaultCDImage = cover11;

const MainPage = () => {
  const [likedSongs, setLikedSongs] = useState<string[]>([]);
  const [isOptionsOpen, setIsOptionsOpen] = useState<string | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const toggleLike = (title: string) => {
    if (likedSongs.includes(title)) {
      setLikedSongs(likedSongs.filter((song) => song !== title));
    } else {
      setLikedSongs([...likedSongs, title]);
    }
  };

  const toggleOptions = (title: string) => {
    setIsOptionsOpen(isOptionsOpen === title ? null : title);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setIsOptionsOpen(null);
      }
    };

    if (isOptionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOptionsOpen]);

  return (
    <div className="p-8 bg-black-8 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-purple-4">Music Library</h1>

      {/* 추천 음악 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-3">
          Recommand Music
        </h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {RECOMMAND_MUSIC.map((music, index) => (
            <div
              key={index}
              className="relative group bg-black-6 rounded-lg shadow-lg w-[180px] flex-shrink-0"
            >
              <Image
                src={music.imageUrl || defaultCDImage}
                alt={music.title}
                width={180}
                height={180}
                className="object-cover rounded-t-lg shadow-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center mb-16 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="bg-black-3 bg-opacity-50 p-3 rounded-full hover:bg-purple-5 hover:bg-opacity-30">
                  <FaPlay className="text-3xl pl-1 text-purple-5" />
                </div>
              </button>
              <div className="p-2">
                <h3 className="text-base font-semibold">{music.title}</h3>
                <p className="text-sm text-gray-4">{music.artist}</p>
              </div>
              <div
                className={`absolute top-1.5 right-1.5 flex space-x-2 items-center ${
                  isOptionsOpen === music.title ? "translate-x-[0px]" : ""
                }`}
                ref={optionsRef}
              >
                <button
                  onClick={() => toggleLike(music.title)}
                  className={`${
                    likedSongs.includes(music.title)
                      ? "text-purple-5"
                      : "text-white"
                  } p-1.5 bg-black-3 bg-opacity-50 rounded-full shadow-md transition duration-300 ease-in-out`}
                >
                  <FaHeart className="text-xs" />
                </button>

                {isOptionsOpen !== music.title ? (
                  <button
                    onClick={() => toggleOptions(music.title)}
                    className="text-white bg-black-3 bg-opacity-50 p-1.5 rounded-full shadow-md"
                  >
                    <FaEllipsisH className="text-xs" />
                  </button>
                ) : (
                  <div className="bg-opacity-50 rounded-full shadow-md bg-black-3">
                    <button className="text-white p-1.5 hover:text-gray-1">
                      <FaPlay className="text-xs" />
                    </button>
                    <button className="text-white p-1.5 hover:text-gray-1">
                      <FaDownload className="text-xs" />
                    </button>
                    <button className="text-white p-1.5 hover:text-gray-1">
                      <FaPlus className="text-xs" />
                    </button>
                    <button className="text-white p-1.5 ">
                      <FaEllipsisH
                        className="text-xs"
                        onClick={() => toggleOptions(music.title)}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 인기 차트 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-3">
          Popular Charts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {POPULAR_MUSIC.map((music, index) => (
            <div
              key={index}
              className="relative group bg-black-6 p-4 rounded-lg shadow-lg"
            >
              <Image
                src={music.imageUrl || defaultCDImage}
                alt={music.title}
                className="w-full h-52 object-cover rounded-lg shadow-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <FaPlay className="text-3xl text-white bg-purple-5 p-3 rounded-full shadow-lg" />
              </button>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{music.title}</h3>
                <p className="text-sm text-gray-400">{music.artist}</p>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <button
                  onClick={() => toggleLike(music.title)}
                  className={`${
                    likedSongs.includes(music.title)
                      ? "text-purple-5 bg-black-3 bg-opacity-50"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
