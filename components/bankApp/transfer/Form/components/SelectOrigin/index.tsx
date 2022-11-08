import { Dispatch, FC, SetStateAction } from 'react'
import { accountDetails } from '../../../../../data/types'

type SelectOriginProps = {
	originAccount: accountDetails | undefined
	setOriginAccount: Dispatch<SetStateAction<accountDetails | undefined>>
	setFormErrors: Dispatch<SetStateAction<{ amount: boolean; destinationAccount: boolean }>>
	activeAccounts: accountDetails[]
}

export const SelectOrigin: FC<SelectOriginProps> = ({ originAccount, setOriginAccount, setFormErrors, activeAccounts }) => (
	<div className='relative z-0 mb-6 w-full group'>
		<label htmlFor='originSelect' className='sr-only'>
			Account from select
		</label>
		<select
			onChange={e => {
				if (e.target.value) {
					const selected = activeAccounts.find(account => account.iban === e.target.value)
					if (selected) setOriginAccount(selected)
				} else {
					setOriginAccount(undefined)
					setFormErrors({ destinationAccount: false, amount: false })
				}
			}}
			required
			value={originAccount?.iban ?? ''}
			id='originSelect'
			data-testid='originAccount'
			className={`block py-2.5 px-0 w-full text-base md:text-sm ${
				originAccount ? 'text-white' : 'text-gray-400'
			}  bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-200 peer`}
		>
			<option value=''>Select origin account *</option>
			{activeAccounts.map(account => (
				<option
					key={account.iban}
					value={account.iban}
				>{`${account.iban} (${account.bank}) - ${account.amount} ${account.currency}`}</option>
			))}
		</select>
	</div>
)
