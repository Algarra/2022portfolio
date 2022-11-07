import { render, screen } from '@testing-library/react';
import Home from '../pages';

test('Render table', async () => {
  render(<Home countries={[]} currencies={[]} />);

  expect(screen.getAllByText('Loading...')).not.toBeNull();

  expect(screen.getByText('Create an account')).not.toBeNull();
});
