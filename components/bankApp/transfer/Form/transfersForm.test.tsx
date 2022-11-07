/* eslint-disable prefer-promise-reject-errors */
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { TransferForm } from './index'

let postErrorTest = false
jest.mock('next/navigation', () => ({ useRouter: () => ({ refresh: jest.fn() }) }))

jest.mock('axios', () => ({
	post: jest.fn(() => {
		if (!postErrorTest) {
			return Promise.resolve({
				data: {
					accountsList: [
						{
							iban: 'FR7630006000011234567890189',
							bank: 'BNP Paribas',
							country: 'France',
							status: true,
							currency: 'EUR',
							amount: 49457,
						},
						{
							iban: 'ES7630006000011234567890779',
							bank: 'BNP Paeribas',
							country: 'Spain',
							status: true,
							currency: 'EUR',
							amount: 49457,
						},
					],
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
	}),
}))

test('Changing destination owner toggle', async () => {
	const setAmount = jest.fn()
	const setOriginAccount = jest.fn()
	const setDestinationAccount = jest.fn()

	render(
		<TransferForm
			setAmount={setAmount}
			amount={2}
			originAccount={{
				iban: 'FR7630006000011234567890189',
				bank: 'BNP Paribas',
				country: 'France',
				status: true,
				currency: 'EUR',
				amount: 49457,
			}}
			setOriginAccount={setOriginAccount}
			setDestinationAccount={setDestinationAccount}
			destinationAccount={{ iban: '22', country: '', currency: '' }}
			countries={[]}
			currencies={[]}
			exchangeTransferRate={3}
			accounts={[]}
			setNotification={jest.fn()}
		/>
	)

	expect(screen.getByText('Submit')).not.toBeNull()

	act(() => {
		fireEvent.click(screen.getByTestId('destinationOwner'))
	})
})

test('submit form', async () => {
	const setAmount = jest.fn()
	const setOriginAccount = jest.fn()
	const setDestinationAccount = jest.fn()

	render(
		<TransferForm
			setAmount={setAmount}
			amount={2}
			originAccount={{
				iban: 'FR7630006000011234567890189',
				bank: 'BNP Paribas',
				country: 'France',
				status: true,
				currency: 'EUR',
				amount: 49457,
			}}
			setOriginAccount={setOriginAccount}
			setDestinationAccount={setDestinationAccount}
			destinationAccount={{ iban: 'ES7630006000011234567890779', country: 'Spain', currency: 'EUR' }}
			countries={[]}
			currencies={[]}
			exchangeTransferRate={3}
			accounts={[
				{
					iban: 'FR7630006000011234567890189',
					bank: 'BNP Paribas',
					country: 'France',
					status: true,
					currency: 'EUR',
					amount: 49457,
				},
				{
					iban: 'ES7630006000011234567890779',
					bank: 'BNP Paeribas',
					country: 'Spain',
					status: true,
					currency: 'EUR',
					amount: 49457,
				},
			]}
			setNotification={jest.fn()}
		/>
	)

	act(() => {
		fireEvent.change(screen.getByTestId('amount'), { target: { value: '22' } })
	})

	act(() => {
		fireEvent.change(screen.getByTestId('concept'), { target: { value: 'Transfer reason' } })
	})

	expect(screen.getByText('Submit')).not.toBeNull()

	act(() => {
		fireEvent.click(screen.getByText('Submit'))
	})
})

test('submit form API error', async () => {
	postErrorTest = true
	const setAmount = jest.fn()
	const setOriginAccount = jest.fn()
	const setDestinationAccount = jest.fn()

	render(
		<TransferForm
			setAmount={setAmount}
			amount={2}
			originAccount={{
				iban: 'FR7630006000011234567890189',
				bank: 'BNP Paribas',
				country: 'France',
				status: true,
				currency: 'EUR',
				amount: 49457,
			}}
			setOriginAccount={setOriginAccount}
			setDestinationAccount={setDestinationAccount}
			destinationAccount={{ iban: 'ES7630006000011234567890779', country: 'Spain', currency: 'EUR' }}
			countries={[]}
			currencies={[]}
			exchangeTransferRate={3}
			accounts={[
				{
					iban: 'FR7630006000011234567890189',
					bank: 'BNP Paribas',
					country: 'France',
					status: true,
					currency: 'EUR',
					amount: 49457,
				},
				{
					iban: 'ES7630006000011234567890779',
					bank: 'BNP Paeribas',
					country: 'Spain',
					status: true,
					currency: 'EUR',
					amount: 49457,
				},
			]}
			setNotification={jest.fn()}
		/>
	)

	act(() => {
		fireEvent.change(screen.getByTestId('amount'), { target: { value: '22' } })
	})

	act(() => {
		fireEvent.change(screen.getByTestId('concept'), { target: { value: 'Transfer reason' } })
	})

	expect(screen.getByText('Submit')).not.toBeNull()

	act(() => {
		fireEvent.click(screen.getByText('Submit'))
	})

	postErrorTest = false
})
