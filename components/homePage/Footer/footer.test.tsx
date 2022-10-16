import { render, screen } from '@testing-library/react'
import { Footer } from './index'

test('Info diplay', async () => {
	render(<Footer />)

	expect(screen.getByText('Keep knowing about me.')).not.toBeNull()
})
