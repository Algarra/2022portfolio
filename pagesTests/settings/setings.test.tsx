/* eslint-disable prefer-promise-reject-errors */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { globalContext, initialGlobalContext } from '../../context/globalContext';
import Settings from '../../pages/settings';

const postAction = jest.fn();
const apiErrorManagement = jest.fn();

let getErrorTest = false;
let postErrorTest = false;

jest.mock('axios', () => ({
  get: () => {
    if (!getErrorTest) {
      return Promise.resolve({
        data: {
          settings: {
            accountsDetatilsGetError: false,
            accountsPostError: false,
            accountsPatchError: false,
            transferPostError: false,
          },
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
  },
  post: () => {
    postAction();
    if (!postErrorTest) {
      return {
        data: {
          settings: {
            accountsDetatilsGetError: false,
            accountsPostError: false,
            accountsPatchError: false,
            transferPostError: false,
          },
        },
      };
    } else {
      return Promise.reject({
        response: {
          data: {
            message: 'test',
          },
        },
      });
    }
  },
}));

test('Getting data test', async () => {
  render(<Settings />);

  expect(screen.getByText('Loading...')).not.toBeNull();
  expect(screen.getByText('API management')).not.toBeNull();

  await waitFor(() =>
    expect(
      screen.getByText('GET /api/transfer/:iban (receive all the transfer for an specific account)'),
    ).not.toBeNull(),
  );
  expect(screen.getByText('POST /api/accounts (add new account action)')).not.toBeNull();
  expect(screen.getByText('PATCH /api/close-account (close an existing account)')).not.toBeNull();
  expect(screen.getByText('POST /api/transfer (create a new transfer)')).not.toBeNull();
});

test('Editing data', async () => {
  render(<Settings />);

  expect(screen.getByText('Loading...')).not.toBeNull();
  await waitFor(() =>
    expect(
      screen.getByText('GET /api/transfer/:iban (receive all the transfer for an specific account)'),
    ).not.toBeNull(),
  );

  act(() => {
    fireEvent.click(screen.getByTestId('getTransfersDetails-toggle'));
  });
  await waitFor(() => expect(postAction).toHaveBeenCalledTimes(1));

  act(() => {
    fireEvent.click(screen.getByTestId('postAccount-toggle'));
  });
  await waitFor(() => expect(postAction).toHaveBeenCalledTimes(2));

  act(() => {
    fireEvent.click(screen.getByTestId('patchAccount-toggle'));
  });
  await waitFor(() => expect(postAction).toHaveBeenCalledTimes(3));

  act(() => {
    fireEvent.click(screen.getByTestId('postCloseAccount-toggle'));
  });
  await waitFor(() => expect(postAction).toHaveBeenCalledTimes(4));
});

test('Get data error', async () => {
  getErrorTest = true;

  render(
    <globalContext.Provider value={{ ...initialGlobalContext, apiErrorManagement }}>
      <Settings />
    </globalContext.Provider>,
  );

  expect(screen.getByText('Loading...')).not.toBeNull();
  await waitFor(() =>
    expect(
      screen.getByText('GET /api/transfer/:iban (receive all the transfer for an specific account)'),
    ).not.toBeNull(),
  );

  expect(apiErrorManagement).toHaveBeenCalledTimes(1);

  getErrorTest = false;
});

test('Post data error', async () => {
  postErrorTest = true;

  render(
    <globalContext.Provider value={{ ...initialGlobalContext, apiErrorManagement }}>
      <Settings />
    </globalContext.Provider>,
  );

  expect(screen.getByText('Loading...')).not.toBeNull();
  await waitFor(() =>
    expect(
      screen.getByText('GET /api/transfer/:iban (receive all the transfer for an specific account)'),
    ).not.toBeNull(),
  );

  act(() => {
    fireEvent.click(screen.getByTestId('getTransfersDetails-toggle'));
  });
  await waitFor(() => expect(postAction).toHaveBeenCalledTimes(5));

  expect(apiErrorManagement).toHaveBeenCalledTimes(2);

  postErrorTest = false;
});
