import React from 'react';
import { ChatListAddForm } from './ChatListAddForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ChatListAddForm', () => {
  const mockAddChat = jest.fn();

  it('render component', () => {
    render(<ChatListAddForm handleAddChat={mockAddChat} />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(
      <ChatListAddForm handleAddChat={mockAddChat} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('form behavior when input is empty', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ChatListAddForm handleAddChat={mockAddChat} />
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(btn);
    expect(mockAddChat).toHaveBeenCalledTimes(0);
  });
  it('form submit', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ChatListAddForm handleAddChat={mockAddChat} />
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: 'chat-4' } });
    fireEvent.click(btn);
    expect(mockAddChat).toBeCalled();
  });
});
