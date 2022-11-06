import { fireEvent, render, screen } from '@testing-library/react';
import { Concept } from './index';

test('Changing input', async () => {
  const setConcept = jest.fn();
  render(<Concept setConcept={setConcept} concept={''} />);

  fireEvent.change(screen.getByTestId('concept'), { target: { value: '22' } });

  expect(setConcept).toHaveBeenCalledTimes(1);
});
