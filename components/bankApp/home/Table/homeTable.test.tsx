/* eslint-disable prefer-promise-reject-errors */
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { bankContext, initialbankContext } from '../../../../context/bankContext'
import { accountDetails } from '../../../../data/types'

import { Table } from './index'

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

let patchErrorTest = false

jest.mock('axios', () => ({
	patch: () => {
		if (!patchErrorTest) {
			return Promise.resolve({
				data: {
					accountsList: accounts,
				},
			})
		} else {
			return Promise.reject({
				response: {
					data: {
						message: 'test',
					},
				},
			})
		}
	},
}))

test('Render table without navigation', async () => {
	render(
		<bankContext.Provider value={{ ...initialbankContext, accounts: accounts.slice(0, 4) }}>
			<Table />
		</bankContext.Provider>
	)

	await waitFor(() => expect(screen.getByText('La Caixa')).not.toBeNull())
})

test('Render table with navigation', async () => {
	render(
		<bankContext.Provider value={{ ...initialbankContext, accounts }}>
			<Table />
		</bankContext.Provider>
	)

	await waitFor(() => expect(screen.getByText('Previous')).not.toBeNull())

	fireEvent.click(screen.getByText('Next'))
})

test('Filtering table', async () => {
	render(
		<bankContext.Provider value={{ ...initialbankContext, accounts }}>
			<Table />
		</bankContext.Provider>
	)

	await waitFor(() => expect(screen.getByPlaceholderText('Search by iban')).not.toBeNull())

	act(() => {
		fireEvent.change(screen.getByPlaceholderText('Search by iban'), { target: { value: 'ES' } })
	})

	await waitFor(() => expect(screen.queryAllByText('BBVA').length).toBe(0))
})

test('Closing account', async () => {
	const setNotification = jest.fn()
	render(
		<bankContext.Provider value={{ ...initialbankContext, accounts, setNotification }}>
			<Table />
		</bankContext.Provider>
	)

	await waitFor(() => expect(screen.getAllByText('BBVA')).not.toBeNull())

	act(() => {
		fireEvent.click(screen.getAllByText('Close')[2])
	})

	await waitFor(() => expect(setNotification).toHaveBeenCalled())

	act(() => {
		fireEvent.click(screen.getAllByText('Close')[1])
	})
})

test('Closing account error', async () => {
	const setNotification = jest.fn()
	patchErrorTest = true

	render(
		<bankContext.Provider value={{ ...initialbankContext, accounts, setNotification }}>
			<Table />
		</bankContext.Provider>
	)

	await waitFor(() => expect(screen.getAllByText('BBVA')).not.toBeNull())

	act(() => {
		fireEvent.click(screen.getAllByText('Close')[1])
	})

	patchErrorTest = false
})

test('Opening create account', async () => {
	const setNotification = jest.fn()

	render(
		<bankContext.Provider value={{ ...initialbankContext, accounts, setNotification }}>
			<Table />
		</bankContext.Provider>
	)

	await waitFor(() => expect(screen.getAllByText('BBVA')).not.toBeNull())

	act(() => {
		fireEvent.click(screen.getByText('Create an account'))
	})

	await waitFor(() => expect(screen.getAllByText('Generate a new account')).not.toBeNull())
})
