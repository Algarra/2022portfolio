import { fireEvent, render, screen } from '@testing-library/react'
import { RecentWorks } from './index'

test('Info diplay + setInfoBox', async () => {
	render(<RecentWorks />)

	expect(screen.getByText('Eurosender')).not.toBeNull()
	expect(screen.getByText('Atmira')).not.toBeNull()
	expect(screen.getByText('Pro Athletes World')).not.toBeNull()

	fireEvent.click(screen.getByText('Eurosender'))
})
