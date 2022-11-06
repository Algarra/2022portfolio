import { render, screen } from '@testing-library/react';
import { TransferExchangeInfo } from './index';

test('Showing data', async () => {
  render(
    <TransferExchangeInfo
      exchangeTransferRate={3}
      destinationAccount={{ iban: '', country: '', currency: 'USD' }}
      amount={2}
      originAccount={{
        iban: 'FR7630006000011234567890189',
        bank: 'BNP Paribas',
        country: 'France',
        status: true,
        currency: 'EUR',
        amount: 49457,
      }}
    />,
  );

  expect(screen.getByText('USD')).not.toBeNull();
  expect(screen.getByText('EUR')).not.toBeNull();
  expect(screen.getByText('2')).not.toBeNull();
});
