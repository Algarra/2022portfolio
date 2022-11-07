import { accountDetails } from '../../../data/types'
import { TransferPage } from './content'

const getActualAccounts = () => {
	return fetch('https://www.danielalgarranavarro.com/api/accounts', {
		next: { revalidate: 10 },
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
