import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../pages'

test('Load + opnen projectInfo', async () => {
	render(<Home />)

	expect(screen.getByText('Welcome to the site to know who I am.')).not.toBeNull()
	expect(screen.getByText('Recent works')).not.toBeNull()
	expect(screen.getAllByText('Currently working on')[1]).not.toBeNull()
	expect(screen.getByText('Technical skills')).not.toBeNull()
	expect(screen.getByText('Contact me')).not.toBeNull()

	fireEvent.click(screen.getAllByText('Eurosender')[0])

	expect(screen.getByText('Vans tracker')).not.toBeNull()
})
