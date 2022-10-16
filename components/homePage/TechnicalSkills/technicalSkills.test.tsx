import { render, screen } from '@testing-library/react'
import { TechnicalSkills } from './index'

test('Info diplay', async () => {
	render(<TechnicalSkills />)

	expect(screen.getByText('Technical skills')).not.toBeNull()
	expect(screen.getByText('Here you will find a list of the technologies with which I have the most experience.')).not.toBeNull()

	expect(screen.getByText('TypeScript')).not.toBeNull()
	expect(screen.getByText('React js')).not.toBeNull()
	expect(screen.getByText('Next js')).not.toBeNull()
	expect(screen.getByText('React native')).not.toBeNull()
	expect(screen.getByText('Node')).not.toBeNull()
	expect(screen.getByText('GraphQL')).not.toBeNull()
})
