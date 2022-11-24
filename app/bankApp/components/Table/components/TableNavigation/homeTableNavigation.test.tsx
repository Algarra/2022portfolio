import { fireEvent, render, screen } from '@testing-library/react'
import { accountDetails } from '../../../../../../data/types'
import { TableNavigation } from './index'

const accounts: accountDetails[] = [
	{
		iban: 'we2342',
		bank: 'sdcs',
		country: '',
		status: true,
		currency: '',
		amount: 44,
	},
	{
		iban: 'FR7630006000011234567890189',
		bank: 'BNP Paribas',
		country: 'France',
		status: true,
		currency: 'EUR',
		amount: 49457,
	},
	{
		iban: 'BR1500000000000010932840814P2',
		bank: 'BRS Bank',
		country: 'Brazil',
		status: false,
		currency: 'USD',
		amount: 50000,
	},
	{
		iban: 'ES7630006000011234567890189',
		bank: 'La Caixa',
		country: 'Spain',
		status: false,
		currency: 'EUR',
		amount: 50000,
	},
	{
		iban: 'PR763000600001123490189',
		bank: 'BBVA',
		country: 'Portugal',
		status: true,
		currency: 'EUR',
		amount: 50543,
	},
	{
		iban: 'GR7630006000011234567890189',
		bank: 'ING',
		country: 'Germany',
		status: false,
		currency: 'EUR',
		amount: 50000,
	},
]

jest.mock('next/router', () => ({
	useRouter: () => ({
		query: { iban: 'FR7630006000011234567890189' },
	}),
}))

test('Go to page 2 and go back to 1', async () => {
	const setPage = jest.fn()
	const { rerender } = render(<TableNavigation filteredAccounts={accounts} page={0} setPage={setPage} />)

	expect(screen.getByText('Previous')).not.toBeNull()

	fireEvent.click(screen.getByText('Next'))

	expect(setPage).toHaveBeenCalled()

	rerender(<TableNavigation filteredAccounts={accounts} page={1} setPage={setPage} />)

	fireEvent.click(screen.getByText('Previous'))

	expect(setPage).toBeCalledTimes(2)
})

test('Go to page 2 and go back to 1 with filtered', async () => {
	const setPage = jest.fn()

	const { rerender } = render(
		<TableNavigation
			filteredAccounts={[
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
				},
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
				},
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
				},
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
				},
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
				},
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
				},
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
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
		<TableNavigation
			filteredAccounts={[
				{
					iban: 'we2342',
					bank: 'sdcs',
					country: '',
					status: true,
					currency: '',
					amount: 44,
				},
			]}
			page={1}
			setPage={setPage}
		/>
	)

	fireEvent.click(screen.getByText('Previous'))

	expect(setPage).toHaveBeenCalledTimes(2)
})
