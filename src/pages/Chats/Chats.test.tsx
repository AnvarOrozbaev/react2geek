import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Chats } from './Chats';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
describe('Chats test', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <Chats />
      </MemoryRouter>
    );
  });
  it('form submit', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <Chats />
      </MemoryRouter>
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: 'chat-4' } });
    fireEvent.click(btn);
    expect(getByText(/chat-4/i)).toBeInTheDocument();
  });
  it('show message form ', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <Chats />
      </MemoryRouter>
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: 'chat-4' } });
    fireEvent.click(btn);
    const chatItem = getByText(/chat-4/i);
    fireEvent.click(chatItem);
    expect(getByText(/Сообщения:/i)).toBeInTheDocument();
  });
  it('show message form ', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <Chats />
      </MemoryRouter>
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);
    fireEvent.change(input, { target: { value: 'chat-4' } });
    fireEvent.click(btn);
    const chatItem = getByText(/chat-4/i);
    fireEvent.click(chatItem);
    const messageBtn = getByTestId('message-form__btn');
    const messageInput = getByPlaceholderText(/сообщение/i);
    fireEvent.change(messageInput, { target: { value: 'test' } });
    fireEvent.click(messageBtn);
    expect(getByText(/test/i)).toBeInTheDocument();
  });
});
