import { useRouter } from 'next/navigation'
import { FC, FormEvent, useEffect, useState } from 'react'
import { apiErrorManagement } from '../../../../utils/apiError'
import { defaultDestinationAccount } from '../../utils'

import { Amount } from './components/Amount'
import { Concept } from './components/Concept'
import { DestinationOwnerInfo } from './components/DestinationOwnerInfo'
import { OutsideDestinationAccount } from './components/OutsideDestinationAccount'
import { SelectDestination } from './components/SelectDestination'
import { SelectOrigin } from './components/SelectOrigin'
import settings from '../../../../../settings'
import { form, TransferFromProps } from './types'

async function update(form: form, refresh: () => void) {
	const response = await fetch(`${settings.BASE_URL}api/transfer`, {
		method: 'POST',
		body: JSON.stringify(form),
	})

	if (response.ok) refresh()
	return response
}

export const TransferForm: FC<TransferFromProps> = ({
	setOriginAccount,
	originAccount,
	setAmount,
	amount,
	setDestinationAccount,
	destinationAccount,
	countries,
	currencies,
	exchangeTransferRate,
	accounts,
	setNotification,
}) => {
	const [formErrors, setFormErrors] = useState({ amount: false, destinationAccount: false })
	const [destinationOwner, setDestinationOwner] = useState(true)
	const [concept, setConcept] = useState('')
	const [name, setName] = useState('')
	const [lastname, setLastname] = useState('')
	const router = useRouter()

	const sendtransfer = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const response: Response = await update(
			{
				originAccountIban: originAccount?.iban,
				amount,
				originCurrency: originAccount?.currency,
				destinationCurrency: destinationAccount.currency,
				destinationAccountIban: destinationAccount.iban,
				concept,
				name,
				lastname,
				destinationAmount: amount * (exchangeTransferRate ?? 1),
			},
			router.refresh
		)

		if (response.ok) {
			setOriginAccount(undefined)
			setDestinationAccount(defaultDestinationAccount)
			setConcept('')
			setName('')
			setLastname('')
			setAmount(0)
			setNotification({ type: 'success', message: 'Transaction created succesfully' })
		} else {
			apiErrorManagement(await response.json(), setNotification)
		}
	}

	useEffect(() => {
		let newFormErrors = { amount: false, destinationAccount: false }

		if (originAccount) {
			if (amount > originAccount?.amount) newFormErrors = { ...newFormErrors, amount: true }
			if (originAccount?.iban.toUpperCase().replace(/ /g, '') === destinationAccount.iban.toUpperCase().replace(/ /g, ''))
				newFormErrors = { ...newFormErrors, destinationAccount: true }
		}

		if (
			(destinationAccount.iban && !/^[a-zA-Z]+$/.test(destinationAccount.iban.slice(0, 2))) ||
			(destinationAccount.iban.length > 2 && !/^\d+$/.test(destinationAccount.iban.slice(2, destinationAccount.iban.length)))
		)
			newFormErrors = { ...newFormErrors, destinationAccount: true }

		setFormErrors({ ...newFormErrors })
	}, [originAccount, destinationAccount, amount])

	return (
		<form onSubmit={sendtransfer}>
			<SelectOrigin
				originAccount={originAccount}
				setOriginAccount={setOriginAccount}
				setFormErrors={setFormErrors}
				activeAccounts={(accounts ?? []).filter(account => account.status)}
			/>

			<Amount amount={amount} setAmount={setAmount} formErrors={formErrors} originAccount={originAccount} />

			<label htmlFor='destinationOwner' className='inline-flex mb-3 relative items-center cursor-pointer'>
				<input
					type='checkbox'
					id='destinationOwner'
					data-testid='destinationOwner'
					className='sr-only peer'
					checked={destinationOwner}
					onChange={e => {
						setDestinationOwner(e.target.checked)
						setDestinationAccount(defaultDestinationAccount)
					}}
				/>
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-lime-600"></div>
				<span className='ml-3 text-sm font-medium text-gray-100'>Destination owner?</span>
			</label>

			{destinationOwner ? (
				<SelectDestination
					destinationAccount={destinationAccount}
					setDestinationAccount={setDestinationAccount}
					formErrors={formErrors}
					activeAccounts={(accounts ?? []).filter(account => account.status)}
				/>
			) : (
				<OutsideDestinationAccount
					destinationAccount={destinationAccount}
					setDestinationAccount={setDestinationAccount}
					countries={countries}
					currencies={currencies}
					formErrors={formErrors}
				/>
			)}

			<Concept concept={concept} setConcept={setConcept} />

			<DestinationOwnerInfo name={name} setName={setName} lastname={lastname} setLastname={setLastname} />

			<div className=' w-full justify-end flex'>
				<button
					type='submit'
					disabled={formErrors.amount || formErrors.destinationAccount}
					className='text-white disabled:bg-gray-400 bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  '
				>
					Submit
				</button>
			</div>
		</form>
	)
}
