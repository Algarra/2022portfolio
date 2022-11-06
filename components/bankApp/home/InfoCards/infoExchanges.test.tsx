import { render, screen, waitFor } from '@testing-library/react';
import { InfoExchanges } from './InfoExchanges';

const actualDate = new Date();
actualDate.setDate(actualDate.getDate() - 7);

const latests = {
  motd: {},
  success: true,
  base: 'EUR',
  date: '2022-10-31',
  rates: {
    USD: 3.656586,
    CAD: 87.590059,
    EUR: 118.242245,
    CHF: 400.908749,
    GBP: 1.795849,
    AOA: 480.367588,
    ARS: 155.385108,
    AUD: 1.554251,
  },
};

const weekAgo = {
  motd: {},
  success: true,
  historical: true,
  base: 'EUR',
  date: '2020-10-23',
  rates: {
    USD: 4.356288,
    CAD: 91.205703,
    EUR: 124.236641,
    CHF: 271.21129,
    GBP: 2.129145,
    AOA: 779.245424,
    ARS: 92.652813,
    AUD: 1.66134,
  },
};

jest.mock('axios', () => ({
  get: jest.fn((url) => {
    if (url === 'https://api.exchangerate.host/latest') return Promise.resolve({ data: latests });
    if (
      url ===
      `https://api.exchangerate.host/${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDate()}`
    )
      return Promise.resolve({ data: weekAgo });
  }),
}));

test('Arrow up render', async () => {
  render(<InfoExchanges />);

  expect(screen.getByText('Loading...')).not.toBeNull();
  await waitFor(() => expect(screen.getAllByText('EUR').length).toBe(4));

  expect(screen.getByText('USD')).not.toBeNull();
  expect(screen.getByText('CAD')).not.toBeNull();
  expect(screen.getByText('CHF')).not.toBeNull();
  expect(screen.getByText('GBP')).not.toBeNull();
});
