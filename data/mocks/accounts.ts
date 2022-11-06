import { accountDetails } from '../types';

const accounts = [
  {
    iban: 'FR7630006000011234567890189',
    bank: 'BNP Paribas',
    country: 'France',
    status: true,
    currency: 'EUR',
    amount: 50000,
  },
  {
    iban: 'BR1500000000000010932840814P2',
    bank: 'BRS Bank',
    country: 'Brazil',
    status: true,
    currency: 'USD',
    amount: 50000,
  },
  {
    iban: 'ES7630006000011234567890189',
    bank: 'La Caixa',
    country: 'Spain',
    status: false,
    currency: 'EUR',
    amount: 50000,
  },
  {
    iban: 'PR763000600001123490189',
    bank: 'BBVA',
    country: 'Portugal',
    status: true,
    currency: 'EUR',
    amount: 50000,
  },
  {
    iban: 'GR7630006000011234567890189',
    bank: 'ING',
    country: 'Germany',
    status: false,
    currency: 'EUR',
    amount: 50000,
  },
];

export const setAccounts = (newAccounts: accountDetails[]) => {
  process.env.ACCOUNTS = JSON.stringify([...newAccounts]);
};

export const getAccounts = () => {
  if (!process.env.ACCOUNTS) process.env.ACCOUNTS = JSON.stringify([...accounts]);

  return JSON.parse(process.env.ACCOUNTS);
};
