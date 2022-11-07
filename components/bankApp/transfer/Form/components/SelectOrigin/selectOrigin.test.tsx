import { fireEvent, render, screen } from '@testing-library/react';
import { SelectOrigin } from './index';

test('Selecting', async () => {
  const setDestinationAccount = jest.fn();
  const setFormErrors = jest.fn();
  render(
    <SelectOrigin
      originAccount={undefined}
      setOriginAccount={setDestinationAccount}
      setFormErrors={setFormErrors}
      activeAccounts={[
        {
          iban: '22',
          bank: '',
          country: '',
          status: true,
          currency: '',
          amount: 300,
        },
      ]}
    />,
  );

  fireEvent.change(screen.getByTestId('originAccount'), { target: { value: '22' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByTestId('originAccount'), { target: { value: '' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(2);
});

test('Selecting with account already selected', async () => {
  const setDestinationAccount = jest.fn();
  const setFormErrors = jest.fn();
  render(
    <SelectOrigin
      originAccount={{
        iban: '22',
        bank: '',
        country: '',
        status: true,
        currency: '',
        amount: 300,
      }}
      setOriginAccount={setDestinationAccount}
      setFormErrors={setFormErrors}
      activeAccounts={[
        {
          iban: '22',
          bank: '',
          country: '',
          status: true,
          currency: '',
          amount: 300,
        },
      ]}
    />,
  );

  fireEvent.change(screen.getByTestId('originAccount'), { target: { value: '22' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByTestId('originAccount'), { target: { value: '' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(2);
});
