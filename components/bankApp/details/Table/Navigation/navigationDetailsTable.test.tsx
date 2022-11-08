import { fireEvent, render, screen } from '@testing-library/react'
import { transfer } from '../../../../data/mocks/transfers'
import { TransfersNavigation } from './index'

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
]

jest.mock('next/router', () => ({
	useRouter: () => ({
		query: { iban: 'FR7630006000011234567890189' },
	}),
}))

test('Go to page 2 and go back to 1', async () => {
	const setPage = jest.fn()
	const { rerender } = render(<TransfersNavigation transfers={transfers} filteredTransfers={[]} page={0} setPage={setPage} />)

	expect(screen.getByText('Previous')).not.toBeNull()

	fireEvent.click(screen.getByText('Next'))

	expect(setPage).toHaveBeenCalled()

	rerender(<TransfersNavigation transfers={transfers} filteredTransfers={[]} page={1} setPage={setPage} />)

	fireEvent.click(screen.getByText('Previous'))

	expect(setPage).toBeCalledTimes(2)
})

test('Go to page 2 and go back to 1 with filtered', async () => {
	const setPage = jest.fn()

	const { rerender } = render(
		<TransfersNavigation
			transfers={transfers}
			filteredTransfers={[
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
			]}
			page={0}
			setPage={setPage}
		/>
	)

	expect(screen.getByText('Previous')).not.toBeNull()

	fireEvent.click(screen.getByText('Next'))

	expect(setPage).toHaveBeenCalled()

	rerender(
		<TransfersNavigation
			transfers={transfers}
			filteredTransfers={[
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
				{
					to: 'Filter item',
					destinationAmount: 50000,
					destinationCurrency: 'EUR',
				},
			]}
			page={1}
			setPage={setPage}
		/>
	)

	fireEvent.click(screen.getByText('Previous'))

	expect(setPage).toHaveBeenCalledTimes(2)
})
