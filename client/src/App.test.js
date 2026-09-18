import { render, screen } from '@testing-library/react';
import App from './App';

test('renders register now link', () => {
  render(<App />);
  const linkElement = screen.getByText(/register now/i);
  expect(linkElement).toBeInTheDocument();
});
