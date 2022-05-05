import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { FC } from 'react';
import { Home } from '../pages/Home';
import { Profile } from '../pages/profile/Profile';
import { Chats } from '../pages/chats/Chats';
import { MyHeader } from '../components/my-header/MyHeader';

export const AppRouter: FC = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<MyHeader />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="profile"
          element={<Profile />}
        />
        <Route
          path="chats"
          element={<Chats />}
        >
          <Route
            path=":chatId"
            element={<Chats />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);
