import { fireEvent, render, screen } from '@testing-library/react'
import { Contact } from './index'

const sendFormMock = jest.fn()

jest.mock('emailjs-com', () => ({
	sendForm: () => ({
		then: sendFormMock,
	}),
}))

test('Forme fill and send', async () => {
	render(<Contact setSuccessMessage={jest.fn()} />)

	fireEvent.change(screen.getByTestId('name'), { target: { value: 'Marcos' } })
	fireEvent.change(screen.getByTestId('email'), { target: { value: 'marcos@test.com' } })
	fireEvent.change(screen.getByTestId('message'), { target: { value: 'Message test' } })

	expect(screen.getByDisplayValue('Marcos')).not.toBeNull()
	expect(screen.getByDisplayValue('marcos@test.com')).not.toBeNull()
	expect(screen.getByDisplayValue('Message test')).not.toBeNull()

	fireEvent.click(screen.getByTestId('submit'))

	expect(sendFormMock).toHaveBeenCalled()
})
