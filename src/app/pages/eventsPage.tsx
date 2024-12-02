import React from 'react';
import { FaCalendarAlt, FaBell } from 'react-icons/fa';

const EventsPage = () => {
  return (
    <div className="p-8 bg-black-8 min-h-screen text-gray-0">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-pink-4">Upcoming Events</h1>
        <div className="mt-4 space-y-4">
          <div className="flex items-center bg-black-7 p-4 rounded-lg">
            <FaCalendarAlt className="text-pink-5 mr-4" />
            <div>
              <h2 className="text-xl font-bold">Event Title 1</h2>
              <p className="text-gray-2">Event details and date...</p>
            </div>
          </div>
          <div className="flex items-center bg-black-7 p-4 rounded-lg">
            <FaCalendarAlt className="text-pink-5 mr-4" />
            <div>
              <h2 className="text-xl font-bold">Event Title 2</h2>
              <p className="text-gray-2">Event details and date...</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-pink-4">Announcements</h1>
        <div className="mt-4 space-y-4">
          <div className="flex items-center bg-black-7 p-4 rounded-lg">
            <FaBell className="text-pink-5 mr-4" />
            <div>
              <h2 className="text-xl font-bold">Announcement 1</h2>
              <p className="text-gray-2">Details about this announcement...</p>
            </div>
          </div>
          <div className="flex items-center bg-black-7 p-4 rounded-lg">
            <FaBell className="text-pink-5 mr-4" />
            <div>
              <h2 className="text-xl font-bold">Announcement 2</h2>
              <p className="text-gray-2">Details about this announcement...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
