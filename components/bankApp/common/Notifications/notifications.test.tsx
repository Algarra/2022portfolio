import { render, screen, waitFor } from '@testing-library/react';
import { globalContext, initialGlobalContext } from '../../../context/globalContext';
import { Notifications } from '.';

test('Error render', async () => {
  render(
    <globalContext.Provider value={{ ...initialGlobalContext, notification: { type: 'error', message: 'error test' } }}>
      <Notifications />
    </globalContext.Provider>,
  );

  expect(screen.getByText('error test')).not.toBeNull();
});

test('Alert render', async () => {
  render(
    <globalContext.Provider value={{ ...initialGlobalContext, notification: { type: 'alert', message: 'alert test' } }}>
      <Notifications />
    </globalContext.Provider>,
  );

  expect(screen.getByText('alert test')).not.toBeNull();
});

test('Success render with time', async () => {
  const setNotification = jest.fn();
  render(
    <globalContext.Provider
      value={{
        ...initialGlobalContext,
        setNotification,
        notification: { type: 'success', message: 'success test', seconds: 0.2 },
      }}>
      <Notifications />
    </globalContext.Provider>,
  );

  expect(screen.getByText('success test')).not.toBeNull();

  await waitFor(() => expect(setNotification).toHaveBeenCalled());
});
