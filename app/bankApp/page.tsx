import { InfoExchanges } from '../../components/bankApp/home/InfoCards/InfoExchanges'
import { Table } from '../../components/bankApp/home/Table'
import settings from '../../settings'

export type exchanges = {
	statFrom: string
	statTo: string
	statArrow: 'up' | 'down'
	statPercent: string
	statPercentColor: string
	statDescripiron: string
	statActual: string
}

const fetchExchangeData = () => {
	return fetch('https://api.exchangerate.host/latest', {
		next: { revalidate: 300 },
	}).then(response => response.json())
}

const fetchLastWeekExchangeData = () => {
	const actualDate = new Date()
	actualDate.setDate(actualDate.getDate() - 7)

	return fetch(`https://api.exchangerate.host/${actualDate.getFullYear()}-${actualDate.getMonth() + 1}-${actualDate.getDate()}`, {
		next: { revalidate: 300 },
	}).then(response => response.json())
}

const getActualAccounts = () => {
	return fetch(`${settings.BASE_URL}api/accounts`, { next: { revalidate: 10 } }).then(response => response.json())
}

const Home = async () => {
	const [actualExchanges, lastWeekExchanges, { accountsList }] = await Promise.all([
		fetchExchangeData(),
		fetchLastWeekExchangeData(),
		getActualAccounts(),
	])

	const currencies = ['USD', 'CAD', 'CHF', 'GBP']
	const exchanges: exchanges[] = []
	for (let i = 0; i < 4; i++) {
		exchanges.push({
			statFrom: 'EUR',
			statTo: currencies[i],
			statArrow: actualExchanges.rates[currencies[i]] > lastWeekExchanges.rates[currencies[i]] ? 'up' : 'down',
			statPercent: `${(
				100 *
				Math.abs(
					(lastWeekExchanges.rates[currencies[i]] - actualExchanges.rates[currencies[i]]) /
						((lastWeekExchanges.rates[currencies[i]] + actualExchanges.rates[currencies[i]]) / 2)
				)
			).toFixed(2)}`,
			statPercentColor: actualExchanges.rates[currencies[i]] > lastWeekExchanges.rates[currencies[i]] ? 'text-emerald-400' : 'text-red-400',
			statDescripiron: 'Since one week',
			statActual: `${actualExchanges.rates[currencies[i]].toFixed(2)}`,
		})
	}

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<div className=' w-full h-fit md:m-auto py-5 '>
				<InfoExchanges exchanges={exchanges} />
				<Table actualAccounts={accountsList} />
			</div>
		</div>
	)
}
export default Home
