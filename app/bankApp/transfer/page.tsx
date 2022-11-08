import { accountDetails } from '../../../data/types'
import { TransferPage } from './content'

const getActualAccounts = () => {
	return fetch('http://localhost:3000/api/accounts', {
		cache: 'force-cache',
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
