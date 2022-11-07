import { accountDetails } from '../../../data/types'
import { TransferPage } from './content'

const getActualAccounts = () => {
	return fetch('https://next13-jade.vercel.app/api/accounts', {
		cache: 'no-store',
	}).then(response => response.json())
}

const Transfer = async () => {
	const actualAccounts: accountDetails[] = (await getActualAccounts()).accountsList

	return (
		<div>
			<TransferPage actualAccounts={actualAccounts} />
		</div>
	)
}

export default Transfer
