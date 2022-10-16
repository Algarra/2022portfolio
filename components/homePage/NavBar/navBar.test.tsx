import { render, screen } from '@testing-library/react'
import { NavBar } from './index'
import '@testing-library/jest-dom'
import { cloneElement, ReactElement } from 'react'

jest.mock(
	'next/link',
	() =>
		({ children, ...rest }: { children: ReactElement }) =>
			cloneElement(children, { ...rest })
)

test('Info diplay', async () => {
	render(<NavBar />)

	expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home')
	expect(screen.getByText('Recent Jobs').closest('a')).toHaveAttribute('href', '#recentJobs')
	expect(screen.getByText('Currently working on').closest('a')).toHaveAttribute('href', '#workingOn')
	expect(screen.getByText('Tecnologies').closest('a')).toHaveAttribute('href', '#tecnologies')
	expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact')

	expect(screen.getByText('Watch this website code').closest('a')).toHaveAttribute('href', 'https://github.com/Algarra/2022portfolio')

	expect(screen.getAllByText('VISIT MY ROOM')[0].closest('button')).toHaveAttribute('href', '/my-room')
	expect(screen.getAllByText('VISIT MY ROOM')[1].closest('button')).toHaveAttribute('href', '/my-room')
})
