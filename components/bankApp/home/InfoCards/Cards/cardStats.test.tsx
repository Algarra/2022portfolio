import { render, screen } from '@testing-library/react';
import { CardStats } from './CardStats';

test('Arrow up render', async () => {
  render(
    <CardStats
      statFrom={'EUR'}
      statTo={'USD'}
      statArrow={'up'}
      statPercent={'33'}
      statPercentColor={'bg-red-600'}
      statDescripiron={'Since one week'}
      statIconColor={'bg-red-200'}
      statActual={'88'}
    />,
  );

  expect(screen.getByText('EUR')).not.toBeNull();
  expect(screen.getByText('USD')).not.toBeNull();
  expect(screen.getByText('33%')).not.toBeNull();
  expect(screen.getByText('Since one week')).not.toBeNull();
  expect(screen.getByText('88')).not.toBeNull();
});

test('Arrow down render', async () => {
  render(
    <CardStats
      statFrom={'EUR'}
      statTo={'USD'}
      statArrow={'down'}
      statPercent={'33'}
      statPercentColor={'bg-red-600'}
      statDescripiron={'Since one week'}
      statIconColor={'bg-red-200'}
      statActual={'88'}
    />,
  );

  expect(screen.getByText('EUR')).not.toBeNull();
  expect(screen.getByText('USD')).not.toBeNull();
  expect(screen.getByText('33%')).not.toBeNull();
  expect(screen.getByText('Since one week')).not.toBeNull();
  expect(screen.getByText('88')).not.toBeNull();
});
