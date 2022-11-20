import { accountDetails } from '../../../data/types'
import { TransferPage } from './content'
import { getAccounts } from '../../../data/mocks/accounts'

const getActualAccounts = () => {
	return getAccounts()
}

const Transfer = async () => {
	const actualAccounts: accountDetails[] = await getActualAccounts()

	return (
		<div>
			<TransferPage actualAccounts={actualAccounts} />
		</div>
	)
}

export default Transfer
