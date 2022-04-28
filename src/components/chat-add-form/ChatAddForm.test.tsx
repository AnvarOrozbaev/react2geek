import React from 'react';
import { ChatAddForm } from './ChatAddForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ChatAddForm', () => {
  const mockAddChat = jest.fn();

  it('render component', () => {
    render(<ChatAddForm handleAddChat={mockAddChat} />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<ChatAddForm handleAddChat={mockAddChat} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('form behavior when input is empty', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ChatAddForm handleAddChat={mockAddChat} />
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(btn);
    expect(mockAddChat).toHaveBeenCalledTimes(0);
  });
  it('form submit', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ChatAddForm handleAddChat={mockAddChat} />
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: 'chat-4' } });
    fireEvent.click(btn);
    expect(mockAddChat).toBeCalled();
  });
});
