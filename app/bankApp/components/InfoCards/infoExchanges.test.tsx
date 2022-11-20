import { render, screen } from '@testing-library/react'
import { InfoExchanges } from '.'

const actualDate = new Date()
actualDate.setDate(actualDate.getDate() - 7)

const latests = {
	motd: {},
	success: true,
	base: 'EUR',
	date: '2022-10-31',
	rates: {
		USD: 3.656586,
		CAD: 87.590059,
		EUR: 118.242245,
		CHF: 400.908749,
		GBP: 1.795849,
		AOA: 480.367588,
		ARS: 155.385108,
		AUD: 1.554251,
	},
}

const weekAgo = {
	motd: {},
	success: true,
	historical: true,
	base: 'EUR',
	date: '2020-10-23',
	rates: {
		USD: 4.356288,
		CAD: 91.205703,
		EUR: 124.236641,
		CHF: 271.21129,
		GBP: 2.129145,
		AOA: 779.245424,
		ARS: 92.652813,
		AUD: 1.66134,
	},
}

jest.mock('axios', () => ({
	get: jest.fn(url => {
		if (url === 'https://api.exchangerate.host/latest') return Promise.resolve({ data: latests })
		if (url === `https://api.exchangerate.host/${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDate()}`)
			return Promise.resolve({ data: weekAgo })
	}),
}))

test('Arrow up render', async () => {
	render(
		<InfoExchanges
			exchanges={[
				{
					statFrom: 'EUR',
					statTo: 'USD',
					statArrow: 'up',
					statPercent: '0.28',
					statPercentColor: 'text-emerald-400',
					statDescripiron: 'Since one week',
					statActual: '1.00',
				},
				{
					statFrom: 'EUR',
					statTo: 'CAD',
					statArrow: 'down',
					statPercent: '0.71',
					statPercentColor: 'text-red-400',
					statDescripiron: 'Since one week',
					statActual: '1.35',
				},
				{
					statFrom: 'EUR',
					statTo: 'CHF',
					statArrow: 'up',
					statPercent: '0.38',
					statPercentColor: 'text-emerald-400',
					statDescripiron: 'Since one week',
					statActual: '1.00',
				},
				{
					statFrom: 'EUR',
					statTo: 'GBP',
					statArrow: 'up',
					statPercent: '2.17',
					statPercentColor: 'text-emerald-400',
					statDescripiron: 'Since one week',
					statActual: '0.88',
				},
			]}
		/>
	)

	expect(screen.getAllByText('EUR').length).toBe(4)
	expect(screen.getByText('USD')).not.toBeNull()
	expect(screen.getByText('CAD')).not.toBeNull()
	expect(screen.getByText('CHF')).not.toBeNull()
	expect(screen.getByText('GBP')).not.toBeNull()
})
