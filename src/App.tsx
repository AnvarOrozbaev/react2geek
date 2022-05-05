import React, { FC, useEffect } from 'react';
import { changeName, checkboxSetTrue } from './pages/profile/profileSlice';
import { useDispatch } from 'react-redux';
import { AppRouter } from './components/AppRouter';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
export const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const nameFromStorage = localStorage.getItem('userName');
    if (nameFromStorage) {
      dispatch(changeName(nameFromStorage));
      dispatch(checkboxSetTrue());
    }
  }, [dispatch]);
  return (
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  );
};
