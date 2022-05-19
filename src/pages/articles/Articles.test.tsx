import React from 'react';
import { render } from '../../test-utils';
import { Articles } from './Articles';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
describe('Articles test', () => {
  it('render', () => {
    render(
      <MemoryRouter>
        <Articles />
      </MemoryRouter>
    );
  });
});
