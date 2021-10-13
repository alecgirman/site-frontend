import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  setTimeout(() => {
    const apiVersionStr = screen.getByText(/\d+\.\d+\.\d+/i);
    expect(apiVersionStr).toBeInTheDocument();
  }, 2000)
});
