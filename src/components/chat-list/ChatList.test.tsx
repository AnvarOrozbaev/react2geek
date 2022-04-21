import React from 'react';
import { ChatList } from './ChatList';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('ChatList', () => {
  const chats = {
    'chat-1': { name: 'chat-1', messages: [] },
    'chat-2': { name: 'chat-1', messages: [] },
    'chat-3': { name: 'chat-1', messages: [] },
  };
  const mockAddChat = jest.fn();
  const mockClick = jest.fn();
  const mockDeleteChat = jest.fn();
  it('render component', () => {
    render(
      <BrowserRouter>
        <ChatList
          chats={chats}
          addChat={mockAddChat}
          selectedId="chat-1"
          handleChatClick={mockClick}
          deleteChat={mockDeleteChat}
        />
      </BrowserRouter>
    );
  });
  it('render with snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ChatList
          chats={chats}
          addChat={mockAddChat}
          selectedId="chat-1"
          handleChatClick={mockClick}
          deleteChat={mockDeleteChat}
        />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('form behavior when input is empty', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <BrowserRouter>
        <ChatList
          chats={chats}
          addChat={mockAddChat}
          selectedId="chat-1"
          handleChatClick={mockClick}
          deleteChat={mockDeleteChat}
        />
      </BrowserRouter>
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(btn);
    expect(mockAddChat).toHaveBeenCalledTimes(0);
  });
  it('form submit', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <BrowserRouter>
        <ChatList
          chats={chats}
          addChat={mockAddChat}
          selectedId="chat-1"
          handleChatClick={mockClick}
          deleteChat={mockDeleteChat}
        />
      </BrowserRouter>
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: 'chat-4' } });
    fireEvent.click(btn);
    expect(mockAddChat).toBeCalled();
  });
});
