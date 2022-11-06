import { render, screen, waitFor } from '@testing-library/react'
import { Notifications } from '.'
import { bankContext, initialbankContext } from '../../../../context/bankContext'

test('Error render', async () => {
	render(
		<bankContext.Provider value={{ ...initialbankContext, notification: { type: 'error', message: 'error test' } }}>
			<Notifications />
		</bankContext.Provider>
	)

	expect(screen.getByText('error test')).not.toBeNull()
})

test('Alert render', async () => {
	render(
		<bankContext.Provider value={{ ...initialbankContext, notification: { type: 'alert', message: 'alert test' } }}>
			<Notifications />
		</bankContext.Provider>
	)

	expect(screen.getByText('alert test')).not.toBeNull()
})

test('Success render with time', async () => {
	const setNotification = jest.fn()
	render(
		<bankContext.Provider
			value={{
				...initialbankContext,
				setNotification,
				notification: { type: 'success', message: 'success test', seconds: 0 },
			}}
		>
			<Notifications />
		</bankContext.Provider>
	)

	expect(screen.getByText('success test')).not.toBeNull()

	await waitFor(() => expect(setNotification).toHaveBeenCalled())
})
