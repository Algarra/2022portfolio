import { accountDetails } from '../../../data/types'
import { TransferPage } from './content'
import settings from '../../../settings'

const getActualAccounts = () => {
	return fetch(`${settings.BASE_URL}api/accounts`, {
		cache: 'no-cache',
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
