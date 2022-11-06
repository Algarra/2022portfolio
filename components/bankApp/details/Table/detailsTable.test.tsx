import { render, screen } from '@testing-library/react';
import { transfer } from '../../../data/mocks/transfers';
import { DetailsTable } from './index';

const transfers: transfer[] = [
  {
    to: 'FR7630006000011234567890189',
    destinationAmount: 50000,
    destinationCurrency: 'EUR',
  },
  {
    from: 'FR7630006000011234567890189',
    originAmount: 543,
    originCurrency: 'EUR',
    concept: 'ee',
    to: 'PR763000600001123490189',
    destinationAmount: 543,
    destinationCurrency: 'EUR',
  },
  {
    from: 'FR7630006000011234567890189',
    originAmount: 543,
    originCurrency: 'EUR',
    concept: 'ee',
    to: 'PR763000600001123490189',
    destinationAmount: 543,
    destinationCurrency: 'EUR',
  },
  {
    from: 'FR7630006000011234567890189',
    originAmount: 543,
    originCurrency: 'EUR',
    concept: 'ee',
    to: 'PR763000600001123490189',
    destinationAmount: 543,
    destinationCurrency: 'EUR',
  },
  {
    from: 'FR7630006000011234567890189',
    originAmount: 543,
    originCurrency: 'EUR',
    concept: 'ee',
    to: 'PR763000600001123490189',
    destinationAmount: 543,
    destinationCurrency: 'EUR',
  },
  {
    from: 'FR7630006000011234567890189',
    originAmount: 543,
    originCurrency: 'EUR',
    concept: 'ee',
    to: 'PR763000600001123490189',
    destinationAmount: 543,
    destinationCurrency: 'EUR',
  },
];

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { iban: 'FR7630006000011234567890189' },
  }),
}));

test('Render table without navigation', async () => {
  render(<DetailsTable transfers={transfers.slice(0, 1)} filter={''} filteredTransfers={[]} />);

  expect(screen.getByText('initial income')).not.toBeNull();
});

test('Render table with navigation', async () => {
  render(<DetailsTable transfers={transfers} filter={''} filteredTransfers={[]} />);

  expect(screen.getAllByText('FR7630006000011234567890189').length).toBe(5);
});

test('Render table with filter', async () => {
  render(
    <DetailsTable
      transfers={transfers}
      filter={''}
      filteredTransfers={[
        {
          to: 'Filter item',
          destinationAmount: 50000,
          destinationCurrency: 'EUR',
        },
      ]}
    />,
  );

  expect(screen.getByText('Filter item')).not.toBeNull();
});
