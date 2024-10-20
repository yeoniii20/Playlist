"use client";

import React from "react";
import MainPage from "./pages/mainPage";
import MusicList from "./pages/musicList";
import PlayList from "./pages/playList";
import MyPage from "./pages/myPage";

const Page = () => {
  return (
    <div className="px-48 bg-black-8">
      <MainPage />
      <MusicList />
      <PlayList />
      <MyPage />
    </div>
  );
};

export default Page;
