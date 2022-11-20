import { render, screen } from '@testing-library/react';
import { Loader } from './index';

test('Render lader', async () => {
  render(<Loader />);

  expect(screen.getByText('Loading...')).not.toBeNull();
});

test('Render dark test', async () => {
  render(<Loader dark />);

  expect(screen.getByText('Loading...')).not.toBeNull();
});
