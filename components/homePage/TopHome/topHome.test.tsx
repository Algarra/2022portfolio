import { render, screen } from '@testing-library/react'
import { TopHome } from './index'

test('Info diplay', async () => {
	render(<TopHome />)

	expect(screen.getByText('Welcome to the site to know who I am.')).not.toBeNull()
	expect(screen.getByText('Daniel Algarra Navarro JavaScript developer!')).not.toBeNull()
})
