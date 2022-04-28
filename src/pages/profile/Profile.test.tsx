import React from 'react';
import { render, fireEvent } from '../../test-utils';
import { Profile } from './Profile';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Profile test', () => {
  it('render Profile', () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
  });
  it('form submit', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
    const btn = getByText(/изменить/i);
    const input = getByPlaceholderText(/введите имя/i);
    fireEvent.change(input, { target: { value: 'testName' } });
    fireEvent.click(btn);
    expect(getByText(/testName/i)).toBeInTheDocument();
  });
  it('checkbox can checked', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
    const checkbox = getByTestId('profile-checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('form behavior when input is empty', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    );
    const btn = getByText(/изменить/i);
    const input = getByPlaceholderText(/введите имя/i);
    fireEvent.change(input, { target: { value: 'testName' } });
    fireEvent.click(btn);
    const name = getByTestId('user-name');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(btn);
    expect(name).toBeInTheDocument();
  });
});
