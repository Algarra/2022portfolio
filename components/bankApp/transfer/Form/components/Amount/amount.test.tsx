import { fireEvent, render, screen } from '@testing-library/react';
import { Amount } from './index';

test('Changing input', async () => {
  const setAmount = jest.fn();
  render(
    <Amount
      setAmount={setAmount}
      amount={2}
      originAccount={{
        iban: 'FR7630006000011234567890189',
        bank: 'BNP Paribas',
        country: 'France',
        status: true,
        currency: 'EUR',
        amount: 49457,
      }}
      formErrors={{ amount: false, destinationAccount: false }}
    />,
  );

  fireEvent.change(screen.getByTestId('amount'), { target: { value: '-2' } });

  expect(setAmount).toHaveBeenCalledTimes(0);

  fireEvent.change(screen.getByTestId('amount'), { target: { value: '22' } });

  expect(setAmount).toHaveBeenCalledTimes(1);
});

test('render with error', async () => {
  const setAmount = jest.fn();
  render(
    <Amount
      setAmount={setAmount}
      amount={0}
      originAccount={{
        iban: 'FR7630006000011234567890189',
        bank: 'BNP Paribas',
        country: 'France',
        status: true,
        currency: 'EUR',
        amount: 49457,
      }}
      formErrors={{ amount: true, destinationAccount: false }}
    />,
  );

  expect(screen.getAllByText('Amount bigger than available *')).not.toBeNull();
});

test('render with unknown origin', async () => {
  const setAmount = jest.fn();
  render(
    <Amount
      setAmount={setAmount}
      amount={0}
      originAccount={undefined}
      formErrors={{ amount: false, destinationAccount: false }}
    />,
  );

  expect(screen.getAllByText('Transfer amount in origin currency')).not.toBeNull();
});
