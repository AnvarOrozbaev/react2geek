import React from 'react';
import { ChatListItem } from './ChatListItem';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('ChatListItem', () => {
  const mockHandler = jest.fn();
  const mockDeleteChat = jest.fn();
  it('ChatLististItem render', () => {
    render(
      <MemoryRouter>
        <ChatListItem
          chat={{ id: '1', name: 'chat-1' }}
          selectedId={'1'}
          handleListItemClick={mockHandler}
          deleteChat={mockDeleteChat}
        />{' '}
      </MemoryRouter>
    );
  });

  it('to pick chat', () => {
    render(
      <MemoryRouter>
        <ChatListItem
          chat={{ id: '1', name: 'chat-1' }}
          selectedId={'1'}
          handleListItemClick={mockHandler}
          deleteChat={mockDeleteChat}
        />{' '}
      </MemoryRouter>
    );
    const btn = screen.getByTestId('pick-chat__btn');
    fireEvent.click(btn);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
  it('delete btn click', async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ChatListItem
          chat={{ id: '1', name: 'chat-1' }}
          selectedId={'1'}
          handleListItemClick={mockHandler}
          deleteChat={mockDeleteChat}
        />
      </MemoryRouter>
    );
    const btn = getByTestId('delete-chat__btn');
    fireEvent.click(btn);
    expect(mockDeleteChat).toBeCalled();
  });
});
