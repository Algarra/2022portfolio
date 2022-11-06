import { Dispatch, FC, SetStateAction } from 'react'
import { destinationAccount } from '../../../../../../app/(bank)/bankApp/transfer/utils'

type OutsideDestinationAccountProps = {
	destinationAccount: destinationAccount
	setDestinationAccount: Dispatch<SetStateAction<destinationAccount>>
	formErrors: { amount: boolean; destinationAccount: boolean }
	countries: string[]
	currencies: string[]
}

export const OutsideDestinationAccount: FC<OutsideDestinationAccountProps> = ({
	destinationAccount,
	setDestinationAccount,
	formErrors,
	countries,
	currencies,
}) => (
	<>
		<div className='relative z-0 mb-6 w-full'>
			<input
				name='destinationIban'
				id='destinationIban'
				data-testid='destinationIban'
				value={destinationAccount.iban}
				onChange={e => {
					setDestinationAccount({ ...destinationAccount, iban: e.target.value })
				}}
				className={`block py-2.5 px-0 w-full text-base md:text-sm ${
					!formErrors.destinationAccount
						? ' text-gray-100 border-gray-300 focus:border-lime-500'
						: ' text-red-300 border-red-400 focus:border-red-500'
				}  bg-transparent border-0 border-b-2  appearance-none focus:border-lime-500 focus:outline-none focus:ring-0  peer`}
				placeholder=' '
				required
			/>
			<label
				htmlFor='destinationIban'
				className={`peer-focus:font-medium absolute text-sm ${
					!formErrors.destinationAccount
						? 'text-gray-400 peer-focus:text-lime-600 peer-focus:scale-75 scale-75'
						: 'text-red-500 peer-focus:text-red-300 peer-focus:scale-75 scale-75'
				}  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6`}
			>
				{!formErrors.destinationAccount ? (
					<>
						Destination iban ( LU34 2343....) <span className=' text-lime-400'>*</span>
					</>
				) : (
					<>{'Field with errors *'}</>
				)}
			</label>
		</div>

		{formErrors.destinationAccount && (
			<>
				<p className={`font-medium -mt-5 text-sm text-red-500 `}>{'- Two letters + numbers'}</p>
				<p className={`font-medium text-sm text-red-500 `}>{"- Origin and destination shouldn't be the same *"}</p>
			</>
		)}

		<div className='grid md:grid-cols-2 md:gap-6'>
			<div className='relative z-0 mb-6 w-full group'>
				<label htmlFor='destinationCountry' className='sr-only'>
					Country
				</label>
				<select
					id='destinationCountry'
					required
					data-testid='destinationCountry'
					value={destinationAccount.country}
					onChange={e => setDestinationAccount({ ...destinationAccount, country: e.target.value })}
					className='block py-2.5 px-0 w-full text-base md:text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer'
				>
					<option>Select country *</option>
					{countries.map(countrie => (
						<option key={countrie} value={countrie}>
							{countrie}
						</option>
					))}
				</select>
			</div>
			<div className='relative z-0 mb-6 w-full group'>
				<label htmlFor='destinationCurrency' className='sr-only'>
					Currency
				</label>
				<select
					id='destinationCurrency'
					required
					data-testid='destinationCurrency'
					value={destinationAccount.currency}
					onChange={e => setDestinationAccount({ ...destinationAccount, currency: e.target.value })}
					className='block py-2.5 px-0 w-full text-base md:text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer'
				>
					<option>Select origin currency *</option>
					{currencies.map(currencie => (
						<option key={currencie} value={currencie}>
							{currencie}
						</option>
					))}
				</select>
			</div>
		</div>
	</>
)
