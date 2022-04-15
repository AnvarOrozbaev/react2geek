import React from 'react';
import { MessageForm } from './MessageForm';
import { render, screen,  fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('MessageForm', () => {
  it('render component', () => {
    render(<MessageForm/>)
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<MessageForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('render btn', async () => {
    render(<MessageForm />);
    const btn = screen.getByTestId('message-form__btn')
      expect(btn).toBeInTheDocument();
  });
  it('render input', async () => {
    const { getByPlaceholderText } = render(<MessageForm />);
    const input = getByPlaceholderText(/сообщение/i);
      expect(input).toBeInTheDocument();
  });
  it('form submit', async () => {
    const mockHandler = jest.fn();
    const { getByPlaceholderText } = render(<MessageForm onSendMessage={mockHandler} />);
    const btn = screen.getByTestId('message-form__btn')
    const input = getByPlaceholderText(/сообщение/i);

     fireEvent.change(input, { target: { value: "hello" } });
     fireEvent.click(btn);
     expect(mockHandler).toBeCalled();
  });
  it('form behavior when input is empty', async () => {
    const mockHandler = jest.fn();
    const { getByPlaceholderText } = render(<MessageForm onSendMessage={mockHandler} />);
    const btn = screen.getByTestId('message-form__btn')
    const input = getByPlaceholderText(/сообщение/i);

     fireEvent.change(input, { target: { value: "" } });
     fireEvent.click(btn);
     expect(mockHandler).toHaveBeenCalledTimes(0);;
  });

});
