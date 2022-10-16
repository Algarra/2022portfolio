import { fireEvent, render, screen } from '@testing-library/react'
import { ProjectInfo } from './index'
import '@testing-library/jest-dom'

const infoBoxMock = {
	options: ['Tracker', 'Pricing Engine'],
	info: [
		{
			title: 'Vans tracker',
			text: 'Tracker is an application to follow the actual position of your parcel. This application was made with React, Next, Redux and Here Maps',
		},
		{
			title: 'Finance application',
			text: 'Price engine is an application to make finance able to manage the calculation of the shipping prices. This application was made with React, context, Jest, OpenAPI TypeScript Fetcher...',
		},
	],
}

test('Load + tabs content', async () => {
	const setInfoBox = jest.fn()

	render(<ProjectInfo infoBox={infoBoxMock} setInfoBox={setInfoBox} />)

	expect(screen.getByText('Tracker')).not.toBeNull()
	expect(screen.getByText('Vans tracker')).not.toBeNull()
	expect(screen.getByText('Pricing Engine')).not.toBeNull()
	expect(screen.queryByText('Finance application')?.parentElement?.getAttribute('class')).toContain('hidden')

	fireEvent.click(screen.getByText('Pricing Engine'))

	expect(screen.getByText('Finance application')).not.toBeNull()
	expect(screen.queryByText('Vans tracker')?.parentElement?.getAttribute('class')).toContain('hidden')
})

test('close action', async () => {
	const setInfoBox = jest.fn()

	render(<ProjectInfo infoBox={infoBoxMock} setInfoBox={setInfoBox} />)

	expect(screen.getByText('Vans tracker')).not.toBeNull()

	fireEvent.click(screen.getByTestId('closeIcon'))

	expect(setInfoBox).toHaveBeenCalled()
})
