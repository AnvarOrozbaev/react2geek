import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { ChatList } from './ChatList';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('ChatList', () => {
  const mockAddChat = jest.fn();
  it('render component', () => {
    render(
      <MemoryRouter>
        <ChatList />
      </MemoryRouter>
    );
  });
  it('render with snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ChatList />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('form behavior when input is empty', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <ChatList />
      </MemoryRouter>
    );
    const btn = getByTestId('add-chat__btn');
    const input = getByPlaceholderText(/название чата/i);

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(btn);
    expect(mockAddChat).toHaveBeenCalledTimes(0);
  });
});
