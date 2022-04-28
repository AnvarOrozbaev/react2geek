import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { ChatList } from './ChatList';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('ChatList', () => {
  const mockAddChat = jest.fn();
  it('render component', () => {
    render(
      <BrowserRouter>
        <ChatList />
      </BrowserRouter>
    );
  });
  it('render with snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ChatList />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('form behavior when input is empty', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <BrowserRouter>
        <ChatList />
      </BrowserRouter>
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(btn);
    expect(mockAddChat).toHaveBeenCalledTimes(0);
  });
});
