import { accountDetails } from '../../../data/types'
import settings from '../../../settings'
import { TransferPage } from './content'

const getActualAccounts = async () => {
	return fetch(`${settings.BASE_URL}api/accounts`, {
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
