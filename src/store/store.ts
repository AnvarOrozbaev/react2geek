import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../pages/profile/profileSlice';
import chatsReducer from '../pages/chats/chatsSlice';
export const store = configureStore({
  reducer: {
    profileState: profileReducer,
    chatsState: chatsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof store.getState>;
