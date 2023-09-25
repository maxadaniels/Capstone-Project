/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import NotesPageLoggedOutView from './NotesPageLoggedOutView';

test('renders "Please login to see your notes"', () => {
    const { getByText } = render(<NotesPageLoggedOutView />);
    const textElement = getByText('Please login to see your notes');
    expect(textElement).toBeInTheDocument();
  });
  