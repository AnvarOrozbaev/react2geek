import React from 'react';
import { ChatListItem } from './ChatListItem';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('ChatListItem', () => {
  const mockHandler = jest.fn();
  const mockDeleteChat = jest.fn();
  it('ChatLististItem render', () => {
    render(
      <BrowserRouter>
        <ChatListItem
          chat={{ id: '1', name: 'chat-1' }}
          selectedId={'1'}
          handleListItemClick={mockHandler}
          deleteChat={mockDeleteChat}
        />{' '}
      </BrowserRouter>
    );
  });

  it('to pick chat', () => {
    render(
      <BrowserRouter>
        <ChatListItem
          chat={{ id: '1', name: 'chat-1' }}
          selectedId={'1'}
          handleListItemClick={mockHandler}
          deleteChat={mockDeleteChat}
        />{' '}
      </BrowserRouter>
    );
    const btn = screen.getByTestId('pick-chat__btn');
    fireEvent.click(btn);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  it('delete btn click', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <ChatListItem
          chat={{ id: '1', name: 'chat-1' }}
          selectedId={'1'}
          handleListItemClick={mockHandler}
          deleteChat={mockDeleteChat}
        />
      </BrowserRouter>
    );
    const btn = getByTestId('delete-chat__btn');
    fireEvent.click(btn);
    expect(mockDeleteChat).toBeCalled();
  });
});
