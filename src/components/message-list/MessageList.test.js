import React from 'react';
import { MessageList } from './MessageList';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageList', () => {
  it('render component', () => {
    const messages = [{ text: 'hello', author: 'me' }];
    render(<MessageList messages={messages} />);
  });
  it('render with snapshot', () => {
    const messages = [{ text: 'hello', author: 'me' }];
    const { asFragment } = render(<MessageList messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
