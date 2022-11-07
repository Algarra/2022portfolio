export type transfer = {
  from?: string | undefined;
  originAmount?: string | number | undefined;
  originCurrency?: string | undefined;
  concept?: string | undefined;
  to: string;
  destinationAmount: number;
  destinationCurrency: string;
};

const transfers: transfer[] = [
  {
    from: undefined,
    originAmount: undefined,
    originCurrency: undefined,
    to: 'FR7630006000011234567890189',
    destinationAmount: 50000,
    destinationCurrency: 'EUR',
  },
  {
    from: undefined,
    originAmount: undefined,
    originCurrency: undefined,
    to: 'BR1500000000000010932840814P2',
    destinationAmount: 50000,
    destinationCurrency: 'USD',
  },
  {
    from: undefined,
    originAmount: undefined,
    originCurrency: undefined,
    to: 'ES7630006000011234567890189',
    destinationAmount: 50000,
    destinationCurrency: 'EUR',
  },
  {
    from: undefined,
    originAmount: undefined,
    originCurrency: undefined,
    to: 'PR763000600001123490189',
    destinationAmount: 50000,
    destinationCurrency: 'EUR',
  },
  {
    from: undefined,
    originAmount: undefined,
    originCurrency: undefined,
    to: 'GR7630006000011234567890189',
    destinationAmount: 50000,
    destinationCurrency: 'EUR',
  },
];

export const setTransfers = (newTransfers: transfer[]) => {
  process.env.TRANSFERS = JSON.stringify([...newTransfers]);
};

export const getTransfers = () => {
  if (!process.env.TRANSFERS) process.env.TRANSFERS = JSON.stringify([...transfers]);

  return JSON.parse(process.env.TRANSFERS);
};
