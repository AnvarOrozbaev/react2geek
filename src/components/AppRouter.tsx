import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { FC, useEffect } from 'react';
import { Articles } from '../pages/articles/Articles';
import { Profile } from '../pages/profile/Profile';
import { Chats } from '../pages/chats/Chats';
import { MyHeader } from '../components/my-header/MyHeader';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { auth } from '../services/firebase';
import { useAppDispatch } from '../store/store';
import { changeAuth } from '../pages/profile/profileSlice';
import { initialMessagesFB } from '../pages/chats/chatsSlice';
export const AppRouter: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    dispatch(initialMessagesFB());
  }, []);
  return(
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
        <Route
          path="chats"
          element={<PrivateRoute />}
        >
          <Route
            index
            element={<Chats />}
          />
          <Route
            path=":chatId"
            element={<Chats />}
          />
        </Route>
        <Route
          path="signin"
          element={<PublicRoute component={<SignIn />} />}
        />
        <Route
          path="signup"
          element={<SignUp />}
        />
      </Route>
      <Route
        path="*"
        element={<h2>404</h2>}
      />
    </Routes>
  </HashRouter>
)};
