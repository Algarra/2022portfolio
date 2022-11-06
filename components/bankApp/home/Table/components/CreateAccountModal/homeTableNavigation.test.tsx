/* eslint-disable prefer-promise-reject-errors */
import { fireEvent, render, screen } from '@testing-library/react';
import { globalContext, initialGlobalContext } from '../../../../../context/globalContext';
import { accountDetails } from '../../../../../data/types';
import { TableModal } from './index';

let postErrorTest = false;

const accounts: accountDetails[] = [
  {
    iban: 'FR7630006000011234567890189',
    bank: 'BNP Paribas',
    country: 'France',
    status: true,
    currency: 'EUR',
    amount: 49457,
  },
  {
    iban: 'BR15000000000000109328408142',
    bank: 'BRS Bank',
    country: 'Brazil',
    status: false,
    currency: 'USD',
    amount: 50000,
  },
];

jest.mock('axios', () => ({
  post: jest.fn(() => {
    if (!postErrorTest) {
      return Promise.resolve({
        data: {
          accountsList: accounts,
        },
      });
    } else {
      return Promise.reject({
        response: {
          data: {
            message: 'test',
          },
        },
      });
    }
  }),
}));

test('create an account', async () => {
  const setShowModal = jest.fn();
  const setAccounts = jest.fn();
  render(
    <globalContext.Provider value={{ ...initialGlobalContext, accounts }}>
      <TableModal
        showModal={true}
        setShowModal={setShowModal}
        countries={['Spain']}
        currencies={['EUR']}
        setAccounts={setAccounts}
      />
    </globalContext.Provider>,
  );

  expect(screen.getByText('Generate a new account')).not.toBeNull();

  expect(screen.getByText('Generate a new account')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('LU23 2434 1234...'), { target: { value: 'LU23' } });

  expect(screen.getByText('Bank name')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('BBVA'), { target: { value: 'La caixa' } });

  expect(screen.getByText('Country')).not.toBeNull();

  fireEvent.change(screen.getByTestId('country'), { target: { value: 'Spain' } });

  expect(screen.getByText('Currency')).not.toBeNull();

  fireEvent.change(screen.getByTestId('currency'), { target: { value: 'EUR' } });

  expect(screen.getByText('Initial amount')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('0'), { target: { value: 333 } });

  fireEvent.click(screen.getByText('Creat an account'));
});

test('API error on create an account', async () => {
  postErrorTest = true;
  const setShowModal = jest.fn();
  const setAccounts = jest.fn();
  render(
    <globalContext.Provider value={{ ...initialGlobalContext, accounts }}>
      <TableModal
        showModal={true}
        setShowModal={setShowModal}
        countries={['Spain']}
        currencies={['EUR']}
        setAccounts={setAccounts}
      />
    </globalContext.Provider>,
  );

  expect(screen.getByText('Generate a new account')).not.toBeNull();

  expect(screen.getByText('Generate a new account')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('LU23 2434 1234...'), { target: { value: 'LU23' } });

  expect(screen.getByText('Bank name')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('BBVA'), { target: { value: 'La caixa' } });

  expect(screen.getByText('Country')).not.toBeNull();

  fireEvent.change(screen.getByTestId('country'), { target: { value: 'Spain' } });

  expect(screen.getByText('Currency')).not.toBeNull();

  fireEvent.change(screen.getByTestId('currency'), { target: { value: 'EUR' } });

  expect(screen.getByText('Initial amount')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('0'), { target: { value: 333 } });

  fireEvent.click(screen.getByText('Creat an account'));

  postErrorTest = false;
});

test('Close modal', async () => {
  const setShowModal = jest.fn();
  const setAccounts = jest.fn();
  render(
    <globalContext.Provider value={{ ...initialGlobalContext, accounts }}>
      <TableModal
        showModal={true}
        setShowModal={setShowModal}
        countries={['Spain']}
        currencies={['EUR']}
        setAccounts={setAccounts}
      />
    </globalContext.Provider>,
  );

  fireEvent.click(screen.getByTestId('close'));

  expect(setShowModal).toHaveBeenCalled();
});

test('iban error', async () => {
  const setShowModal = jest.fn();
  const setAccounts = jest.fn();
  render(
    <globalContext.Provider value={{ ...initialGlobalContext, accounts }}>
      <TableModal
        showModal={true}
        setShowModal={setShowModal}
        countries={['Spain']}
        currencies={['EUR']}
        setAccounts={setAccounts}
      />
    </globalContext.Provider>,
  );

  expect(screen.getByText('Generate a new account')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('LU23 2434 1234...'), { target: { value: '23' } });

  expect(screen.getByText('- Two letters + numbers')).not.toBeNull();

  fireEvent.change(screen.getByPlaceholderText('LU23 2434 1234...'), {
    target: { value: 'BR15000000000000109328408142' },
  });

  expect(screen.getByText('- This account already exist')).not.toBeNull();
});
