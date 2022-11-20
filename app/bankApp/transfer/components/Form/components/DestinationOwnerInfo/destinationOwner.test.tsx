import { fireEvent, render, screen } from '@testing-library/react';
import { DestinationOwnerInfo } from './index';

test('Changing input', async () => {
  const setName = jest.fn();
  const setLastname = jest.fn();
  render(<DestinationOwnerInfo setName={setName} name="" setLastname={setLastname} lastname="" />);

  fireEvent.change(screen.getByTestId('firstName'), { target: { value: '22' } });

  expect(setName).toHaveBeenCalledTimes(1);

  fireEvent.change(screen.getByTestId('lastName'), { target: { value: '22' } });

  expect(setLastname).toHaveBeenCalledTimes(1);
});
