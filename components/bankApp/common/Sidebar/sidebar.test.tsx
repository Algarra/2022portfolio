import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '.';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}));

test('Sidebar renderization', async () => {
  render(<Sidebar />);

  expect(screen.getByText('GOMSpace Bank')).not.toBeNull();
  expect(screen.getByText('Management')).not.toBeNull();
  expect(screen.getByText('Accounts')).not.toBeNull();
  expect(screen.getByText('Make a transfer')).not.toBeNull();
  expect(screen.getByText('Settings')).not.toBeNull();

  expect(screen.getByTestId('menuBurguer')).not.toBeNull();
});

test('Open mobile menu action', async () => {
  render(<Sidebar />);

  expect(screen.getByTestId('menuBurguer')).not.toBeNull();

  // open action
  fireEvent.click(screen.getByTestId('menuBurguer'));
  // close action
  fireEvent.click(screen.getByTestId('menuBurguer'));
});
