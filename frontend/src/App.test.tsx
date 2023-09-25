import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App component matches snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
