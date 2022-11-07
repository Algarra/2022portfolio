import { render, screen } from '@testing-library/react';
import Custom404 from '../pages/404';

test('Render table', async () => {
  render(<Custom404 />);

  expect(screen.getByText('Page not found')).not.toBeNull();
  expect(screen.getByText('404')).not.toBeNull();
  expect(screen.getByText('The page you’re looking for doesn’t exist.')).not.toBeNull();
  expect(screen.getByText('Go home')).not.toBeNull();
});
