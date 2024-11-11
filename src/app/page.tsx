"use client";

import React from "react";
import MainPage from "./pages/mainPage";
import MusicList from "./pages/musicList";
import PlayList from "./pages/playList";
import MyPage from "./pages/myPage";
import SubscriptionPage from "./pages/subscriptionPage";
import MusicDetailPage from "./pages/musicDetailPage";
import ArtistPage from "./pages/artistPage";
import EventsPage from "./pages/eventsPage";
import CreateItemForm from "./components/form/createItemForm";

const Page = () => {
  return (
    <div className="px-48 bg-black-8">
      <CreateItemForm />
      <MainPage />
      <MusicList />
      <PlayList />
      <MyPage />
      <SubscriptionPage />
      <MusicDetailPage />
      <ArtistPage />
      <EventsPage />
    </div>
  );
};

export default Page;
