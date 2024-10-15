"use client";

import React from "react";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-black-primary text-white">
      {/* 헤더 */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-darker">
        <h1 className="text-3xl font-bold text-orange-500">My Music</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">Browse</li>
            <li className="hover:text-orange-400 cursor-pointer">Library</li>
          </ul>
        </nav>
      </header>

      {/* 메인 배너 */}
      <section className="px-6 py-12">
        <div className="bg-gray-primary rounded-lg p-8 text-center">
          <h2 className="text-4xl font-bold text-sky-400 mb-4">
            Discover New Music
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Browse through thousands of tracks and find your next favorite song.
          </p>
          <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-6 rounded">
            Start Listening
          </button>
        </div>
      </section>

      {/* 추천 목록 */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold text-orange-400 mb-6">
          Recommended for You
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* 카드 컴포넌트 */}
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-gray-lighter rounded-lg p-4 hover:bg-gray-primary cursor-pointer"
              >
                <div className="h-40 bg-gray-darker rounded-md mb-4"></div>
                <h4 className="text-lg font-semibold">Track {i + 1}</h4>
                <p className="text-gray-400">Artist {i + 1}</p>
              </div>
            ))}
        </div>
      </section>

      {/* 푸터 */}
      <footer className="px-6 py-4 bg-gray-darker text-center text-gray-500">
        &copy; 2024 My Music. All rights reserved.
      </footer>
    </div>
  );
};

export default MainPage;
