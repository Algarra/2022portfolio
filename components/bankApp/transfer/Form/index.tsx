import axios from 'axios'
import { Dispatch, FC, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'
import { defaultDestinationAccount, destinationAccount } from '../../../../app/bankApp/transfer/utils'
import { bankContext } from '../../../../context/bankContext'
import { accountDetails } from '../../../../data/types'
import { Amount } from './components/Amount'
import { Concept } from './components/Concept'
import { DestinationOwnerInfo } from './components/DestinationOwnerInfo'
import { OutsideDestinationAccount } from './components/OutsideDestinationAccount'
import { SelectDestination } from './components/SelectDestination'
import { SelectOrigin } from './components/SelectOrigin'

type TransferFromProps = {
	originAccount: accountDetails | undefined
	setOriginAccount: Dispatch<SetStateAction<accountDetails | undefined>>
	setAmount: Dispatch<SetStateAction<number>>
	amount: number
	setDestinationAccount: Dispatch<SetStateAction<destinationAccount>>
	destinationAccount: destinationAccount
	countries: string[]
	currencies: string[]
	exchangeTransferRate: number | undefined
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
}) => {
	const [formErrors, setFormErrors] = useState({ amount: false, destinationAccount: false })
	const [destinationOwner, setDestinationOwner] = useState(true)
	const [concept, setConcept] = useState('')
	const [name, setName] = useState('')
	const [lastname, setLastname] = useState('')

	const { setNotification, apiErrorManagement, accounts, setAccounts } = useContext(bankContext)

	const activeAccounts = useMemo(() => (accounts ?? []).filter(account => account.status), [accounts])

	const sendtransfer = async (e: any) => {
		e.preventDefault()
		try {
			const transferResponse = await axios.post('/api/transfer', {
				originAccountIban: originAccount?.iban,
				amount,
				originCurrency: originAccount?.currency,
				destinationCurrency: destinationAccount.currency,
				destinationAccountIban: destinationAccount.iban,
				concept,
				name,
				lastname,
				destinationAmount: amount * (exchangeTransferRate ?? 1),
			})

			setAccounts(transferResponse.data.accountsList)

			setOriginAccount(undefined)
			setDestinationAccount(defaultDestinationAccount)
			setConcept('')
			setName('')
			setLastname('')
			setAmount(0)
			setNotification({ type: 'success', message: 'Transaction created succesfully' })
		} catch (error) {
			apiErrorManagement(error)
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
				activeAccounts={activeAccounts}
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
					activeAccounts={activeAccounts}
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
