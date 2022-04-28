import React, { FC, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/profile/Profile';
import { Chats } from './pages/chats/Chats';
import { MyHeader } from './components/my-header/MyHeader';
import { changeName, checkboxSetTrue } from './pages/profile/profileSlice';
import { useDispatch } from 'react-redux';


export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const nameFromStorage = localStorage.getItem('userName');
    if (nameFromStorage) {
      dispatch(changeName(nameFromStorage));
      dispatch(checkboxSetTrue());
    }
  });
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
};
