import { render, screen } from '@testing-library/react';
import TransferPage from '../../pages/transfer';

test('Render table', async () => {
  render(<TransferPage countries={[]} currencies={[]} />);

  expect(screen.getAllByText('Owner last name')).not.toBeNull();

  expect(screen.getByText('Submit')).not.toBeNull();
});
