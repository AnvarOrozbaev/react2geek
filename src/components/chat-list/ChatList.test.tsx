import React from 'react';
import { ChatList } from './ChatList';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ChatList', () => {
  it('render component', () => {
    render(<ChatList chats={[{id: '1', name: 'chat-1' },{id: '2', name: 'chat-2' }]}/>);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<ChatList chats={[{id: '1', name: 'chat-1' },{id: '2', name: 'chat-2' }]}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
