import { fireEvent, render, screen } from '@testing-library/react';
import { SelectDestination } from './index';

test('Changing input', async () => {
  const setDestinationAccount = jest.fn();
  render(
    <SelectDestination
      destinationAccount={{ iban: '', country: '', currency: '' }}
      setDestinationAccount={setDestinationAccount}
      formErrors={{ amount: false, destinationAccount: false }}
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

  fireEvent.change(screen.getByTestId('destinationIban'), { target: { value: '22' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByTestId('destinationIban'), { target: { value: '' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(2);
});

test('Rendering with error', async () => {
  const setDestinationAccount = jest.fn();
  render(
    <SelectDestination
      destinationAccount={{ iban: '22', country: '', currency: '' }}
      setDestinationAccount={setDestinationAccount}
      formErrors={{ amount: false, destinationAccount: true }}
      activeAccounts={[
        {
          iban: '',
          bank: '',
          country: '',
          status: true,
          currency: '',
          amount: 300,
        },
      ]}
    />,
  );

  expect(screen.getByText('Origin and destinaton iban are the same *')).not.toBeNull();
});
