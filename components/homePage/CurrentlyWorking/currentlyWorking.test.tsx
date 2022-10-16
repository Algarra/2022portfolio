import { render, screen } from '@testing-library/react'
import { CurrentlyWorking } from './index'

test('Info diplay', async () => {
	render(<CurrentlyWorking />)

	expect(screen.getByText('Scraping application')).not.toBeNull()
	expect(screen.getByText('Eurosender')).not.toBeNull()
	expect(screen.getByText('OpenAPI')).not.toBeNull()
})
