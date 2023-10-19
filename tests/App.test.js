import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders App component and checks for Hello, World! text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
