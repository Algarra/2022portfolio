import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { countries } from '../../../../../../data/mocks/countires'
import { currencies } from '../../../../../../data/mocks/currencies'
import { accountDetails } from '../../../../../../data/types'
import { notificationObject } from '../../../../common/Notifications'
import { apiErrorManagement } from '../../../../utils/apiError'

type TableModalProps = {
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	setNotification: Dispatch<SetStateAction<notificationObject>>
	accounts: accountDetails[]
}

const initialFormData = {
	iban: '',
	bank: '',
	country: '',
	status: true,
	currency: '',
	amount: 0,
}

export const TableModal: FC<TableModalProps> = ({ showModal, setShowModal, setNotification, accounts }) => {
	const [ibanError, setIbanError] = useState('')
	const [newAccount, setNewAccount] = useState(initialFormData)
	const router = useRouter()

	const addNewAccount = async (account: accountDetails) => {
		try {
			try {
				await axios.post(`/api/accounts`, account)
				setNotification({ type: 'success', message: 'Account created' })
				setNewAccount(initialFormData)
				setShowModal(false)
				router.refresh()
			} catch (error) {
				apiErrorManagement(error, setNotification)
			}
		} catch (error) {}
	}
	return (
		<div
			className={` ${
				!showModal && 'hidden'
			} backdrop-blur transition-all flex justify-center overflow-y-auto px-3 overflow-x-hidden fixed top-0 right-0 left-0 z-40 w-full md:inset-0 h-modal h-full`}
		>
			<div className='relative m-auto w-full max-w-md rounded-lg shadow bg-gray-700'>
				<button
					onClick={() => setShowModal(false)}
					data-testid='close'
					className='absolute text-xl top-3 right-2.5 text-gray-400 bg-transparentrounded-lg  p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white'
				>
					<i className='fa-solid fa-xmark '></i>
				</button>
				<div className='py-6 px-6 lg:px-8'>
					<h3 className='mb-4 text-xl font-medium text-white'>Generate a new account</h3>
					<form
						className='space-y-6'
						onSubmit={e => {
							e.preventDefault()
							addNewAccount(newAccount)
						}}
					>
						<div>
							<label htmlFor='iban' className='block mb-2 text-sm font-medium text-gray-300'>
								Iban
							</label>
							<input
								name='iban'
								id='iban'
								value={newAccount.iban}
								onChange={e => {
									setNewAccount({ ...newAccount, iban: e.target.value })
									if (
										(e.target.value && !/^[a-zA-Z]+$/.test(e.target.value.slice(0, 2))) ||
										(e.target.value.length > 2 && !/^\d+$/.test(e.target.value.slice(2, e.target.value.length)))
									)
										setIbanError('- Two letters + numbers')
									else if (accounts?.find(account => account.iban === e.target.value)) {
										setIbanError('- This account already exist')
									} else setIbanError('')
								}}
								className='border text-base md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
								placeholder='LU23 2434 1234...'
								required
							/>
							{ibanError && <p className={`font-medium pt-2 block mt-0 text-sm text-red-400 `}>{ibanError}</p>}
						</div>

						<div>
							<label htmlFor='bank' className='block mb-2 text-sm font-medium text-gray-300'>
								Bank name
							</label>
							<input
								name='bank'
								id='bank'
								value={newAccount.bank}
								onChange={e => setNewAccount({ ...newAccount, bank: e.target.value })}
								className=' border text-base md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
								placeholder='BBVA'
								required
							/>
						</div>
						<div>
							<label htmlFor='country' className='block mb-2 text-sm font-medium text-gray-300'>
								Country
							</label>
							<select
								name='country'
								id='country'
								data-testid='country'
								value={newAccount.country}
								onChange={e => setNewAccount({ ...newAccount, country: e.target.value })}
								className='block p-2 mb-6 w-full text-base md:text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
								required
							>
								<option value=''>Choose a country</option>
								{countries.map(countrie => (
									<option key={countrie} value={countrie}>
										{countrie}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor='currency' className='block mb-2 text-sm font-medium text-gray-300'>
								Currency
							</label>
							<select
								name='currency'
								id='currency'
								data-testid='currency'
								value={newAccount.currency}
								onChange={e => setNewAccount({ ...newAccount, currency: e.target.value })}
								className='block p-2 mb-6 w-full text-base md:text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
								required
							>
								<option value=''>Choose a currency</option>
								{currencies.map(currency => (
									<option key={currency} value={currency}>
										{currency}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor='amount' className='block mb-2 text-sm font-medium text-gray-300'>
								Initial amount
							</label>
							<input
								type='number'
								name='amount'
								id='amount'
								value={newAccount.amount === 0 ? '' : newAccount.amount}
								onChange={e => setNewAccount({ ...newAccount, amount: Number(e.target.value) })}
								className='border text-base md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
								placeholder='0'
								required
							/>
						</div>

						<button
							type='submit'
							disabled={!!ibanError}
							className='w-full text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-400 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
						>
							Creat an account
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
