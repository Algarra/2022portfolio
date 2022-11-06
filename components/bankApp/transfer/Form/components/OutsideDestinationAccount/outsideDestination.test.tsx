import { fireEvent, render, screen } from '@testing-library/react';
import { OutsideDestinationAccount } from './index';

test('Changing input', async () => {
  const setDestinationAccount = jest.fn();
  render(
    <OutsideDestinationAccount
      destinationAccount={{ iban: '', country: '', currency: '' }}
      setDestinationAccount={setDestinationAccount}
      formErrors={{ amount: false, destinationAccount: false }}
      countries={['spain']}
      currencies={['EUR']}
    />,
  );

  fireEvent.change(screen.getByTestId('destinationIban'), { target: { value: '22' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByTestId('destinationCountry'), { target: { value: '22' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(2);

  fireEvent.change(screen.getByTestId('destinationCurrency'), { target: { value: '22' } });

  expect(setDestinationAccount).toHaveBeenCalledTimes(3);
});

test('Rendering with error', async () => {
  const setDestinationAccount = jest.fn();
  render(
    <OutsideDestinationAccount
      destinationAccount={{ iban: '', country: '', currency: '' }}
      setDestinationAccount={setDestinationAccount}
      formErrors={{ amount: false, destinationAccount: true }}
      countries={['spain']}
      currencies={['EUR']}
    />,
  );

  expect(screen.getByText('- Two letters + numbers')).not.toBeNull();
});
