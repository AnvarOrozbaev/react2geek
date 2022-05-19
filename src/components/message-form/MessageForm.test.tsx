import React from 'react';
import { MessageForm } from './MessageForm';
import { render, fireEvent, screen } from '../../test-utils';
import '@testing-library/jest-dom';

describe('MessageForm', () => {
  it('render component', () => {
    const mockHandler = jest.fn();
    render(<MessageForm onSendMessage={mockHandler} />);
  });
  it('render with snapshot', () => {
    const mockHandler = jest.fn();
    const { asFragment } = render(<MessageForm onSendMessage={mockHandler} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('render btn', async () => {
    const mockHandler = jest.fn();
    render(<MessageForm onSendMessage={mockHandler} />);
    const btn = screen.getByTestId('message-form__btn');
    expect(btn).toBeInTheDocument();
  });
  it('render input', async () => {
    const mockHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <MessageForm onSendMessage={mockHandler} />
    );
    const input = getByPlaceholderText(/сообщение/i);
    expect(input).toBeInTheDocument();
  });
  it('form submit', async () => {
    const mockHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <MessageForm onSendMessage={mockHandler} />
    );
    const btn = screen.getByTestId('message-form__btn');
    const input = getByPlaceholderText(/сообщение/i);

    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.click(btn);
    expect(mockHandler).toBeCalled();
  });
  it('form behavior when input is empty', async () => {
    const mockHandler = jest.fn();
    const { getByPlaceholderText } = render(
      <MessageForm onSendMessage={mockHandler} />
    );
    const btn = screen.getByTestId('message-form__btn');
    const input = getByPlaceholderText(/сообщение/i);

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(btn);
    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});
