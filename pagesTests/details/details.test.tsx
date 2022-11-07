/* eslint-disable prefer-promise-reject-errors */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Details from '../../pages/details/[iban]';

let getErrorTest = false;

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { iban: 'ES67898' },
  }),
}));

jest.mock('axios', () => ({
  get: jest.fn(() => {
    if (!getErrorTest) {
      return Promise.resolve({
        data: {
          transfers: [
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
              to: 'FR7630006000011234567890179',
              destinationAmount: 50000,
              destinationCurrency: 'EUR',
            },
          ],
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

test('Render table', async () => {
  render(<Details />);

  expect(screen.getByText('Loading...')).not.toBeNull();

  await waitFor(() => expect(screen.getByText('FR7630006000011234567890189')).not.toBeNull());
});

test('Api error', async () => {
  getErrorTest = true;
  render(<Details />);

  expect(screen.getByText('Loading...')).not.toBeNull();

  await waitFor(() => expect(screen.queryAllByText('FR7630006000011234567890189').length).toBe(0));
  getErrorTest = false;
});

test('Filter', async () => {
  render(<Details />);

  expect(screen.getByText('Loading...')).not.toBeNull();

  await waitFor(() => expect(screen.getByText('FR7630006000011234567890189')).not.toBeNull());

  act(() => {
    fireEvent.change(screen.getByPlaceholderText('Search by iban'), { target: { value: 'ES' } });
  });

  await waitFor(() => expect(screen.queryAllByText('FR7630006000011234567890189').length).toBe(0));
});
