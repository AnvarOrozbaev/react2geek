import React, { FC } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Profile } from '@/pages/profile/Profile';
import { Chats } from 'src/pages/chats/Chats';
import { MyHeader } from '@/components/my-header/MyHeader';

export const App: FC = () => {
  const bool = false
  return (
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
            element={<Chats lintResolver={bool} />}
          >
            <Route
              path=":chatId"
              element={<Chats lintResolver={true}/>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};
