import { render, screen, waitFor } from '@testing-library/react'
import { Notifications } from '.'

test('Error render', async () => {
	render(<Notifications notification={{ type: 'error', message: 'error test' }} setNotification={jest.fn()} />)

	expect(screen.getByText('error test')).not.toBeNull()
})

test('Alert render', async () => {
	render(<Notifications notification={{ type: 'alert', message: 'alert test' }} setNotification={jest.fn()} />)

	expect(screen.getByText('alert test')).not.toBeNull()
})

test('Success render with time', async () => {
	const setNotification = jest.fn()
	render(<Notifications notification={{ type: 'success', message: 'success test', seconds: 0 }} setNotification={setNotification} />)

	expect(screen.getByText('success test')).not.toBeNull()

	await waitFor(() => expect(setNotification).toHaveBeenCalled())
})
