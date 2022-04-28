import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import chatsReducer from './pages/chats/chatsSlice';
import profileReducer from './pages/profile/profileSlice';

type Props = {
  children?: JSX.Element;
};
function render(
  ui: ReactElement,
  {
    store = configureStore({
      reducer: {
        chatsState: chatsReducer,
        profileState: profileReducer,
      },
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
