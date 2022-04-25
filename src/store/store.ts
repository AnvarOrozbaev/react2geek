import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../pages/profile/profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof store.getState>;
