import { Dispatch, FC, SetStateAction } from 'react'
import { defaultDestinationAccount, destinationAccount } from '../../../../../../app/bankApp/transfer/page'
import { accountDetails } from '../../../../../../data/types'

type SelectDestinationProps = {
	destinationAccount: destinationAccount
	setDestinationAccount: Dispatch<SetStateAction<destinationAccount>>
	formErrors: { amount: boolean; destinationAccount: boolean }
	activeAccounts: accountDetails[]
}

export const SelectDestination: FC<SelectDestinationProps> = ({
	destinationAccount,
	setDestinationAccount,
	formErrors,
	activeAccounts,
}) => (
	<div className='relative z-0 mb-6 w-full group'>
		{!formErrors.destinationAccount ? (
			<label htmlFor='destinationIban' className='sr-only'>
				Account to select
			</label>
		) : (
			<label htmlFor='destinationIban' className=' text-red-500 '>
				Origin and destinaton iban are the same *
			</label>
		)}
		<select
			required
			onChange={e => {
				if (e.target.value) {
					const selected = activeAccounts.find(account => account.iban === e.target.value)
					if (selected) setDestinationAccount(selected)
				} else {
					setDestinationAccount(defaultDestinationAccount)
				}
			}}
			id='destinationIban'
			data-testid='destinationIban'
			value={destinationAccount.iban}
			className={`block py-2.5 px-0 w-full text-base md:text-sm ${
				!formErrors.destinationAccount
					? `${destinationAccount.iban ? 'text-gray-300' : 'text-gray-400'} border-gray-300 focus:border-gray-400`
					: 'text-red-300 border-red-300 focus:border-red-400'
			}  bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0  peer`}
		>
			<option value=''>Select destination account *</option>
			{activeAccounts.map(account => (
				<option
					key={account.iban}
					value={account.iban}
				>{`${account.iban} (${account.bank}) - ${account.amount} ${account.currency}`}</option>
			))}
		</select>
	</div>
)
