import React from 'react';
import { ChatListItem } from './ChatListItem';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ChatListItem', () => {
  it('ChatLististItem render', () => {
    const mockHandler = jest.fn();
    render(
      <ChatListItem
        chat={{ id: '1', name: 'chat-1' }}
        selectedId={'testId'}
        handleListItemClick={mockHandler}
      />
    );
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
