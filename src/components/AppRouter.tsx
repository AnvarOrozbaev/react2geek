import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { FC } from 'react';
import { Articles } from '../pages/articles/Articles';
import { Profile } from '../pages/profile/Profile';
import { Chats } from '../pages/chats/Chats';
import { MyHeader } from '../components/my-header/MyHeader';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
export const AppRouter: FC = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<MyHeader />}
      >
        <Route
          index
          element={<Articles />}
        />
        <Route
          path="profile"
          element={<PrivateRoute component={<Profile />} />}
        />
        <Route path="chats" element={<PrivateRoute />}>
            <Route index element={<Chats />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
        <Route
            path="signin"
            element={<PublicRoute component={<SignIn />} />}
          />
          <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </HashRouter>
);
