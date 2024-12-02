'use client';

import React from 'react';
import MainPage from './pages/mainPage';
import MusicList from './pages/musicList';
import PlayList from './pages/playList';
import MyPage from './pages/myPage';
import SubscriptionPage from './pages/subscriptionPage';
import MusicDetailPage from './pages/musicDetailPage';
import ArtistPage from './pages/artistPage';
import EventsPage from './pages/eventsPage';
import CreateItemForm from './components/form/createItemForm';
import ApiTestPage from './pages/apiTestPage';
import NowPlaying from './components/layout/nowPlaying';
import Header from './components/layout/header';

const Page = () => {
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
};

export default Page;
