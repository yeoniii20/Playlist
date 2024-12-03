'use client';

import React from 'react';
import MainPage from './pages/mainPage.tsx';
import MusicList from './pages/musicList.tsx';
import PlayList from './pages/playList.tsx';
import MyPage from './pages/myPage.tsx';
import SubscriptionPage from './pages/subscriptionPage.tsx';
import MusicDetailPage from './pages/musicDetailPage.tsx';
import ArtistPage from './pages/artistPage.tsx';
import EventsPage from './pages/eventsPage.tsx';
import CreateItemForm from './components/form/createItemForm.tsx';
import ApiTestPage from './pages/apiTestPage.tsx';
import NowPlaying from './components/layout/nowPlaying.tsx';
import Header from './components/layout/header.tsx';

function Page() {
  return (
    <div className="px-48 bg-black-8">
      <Header />
      <ApiTestPage />
      <CreateItemForm />
      <MainPage />
      <MusicList />
      <PlayList />
      <MyPage />
      <SubscriptionPage />
      <MusicDetailPage />
      <ArtistPage />
      <EventsPage />
      <NowPlaying />
    </div>
  );
}

export default Page;
