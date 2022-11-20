import { Dispatch, FC, SetStateAction } from 'react'
import { accountDetails } from '../../../../../../../data/types'

type AmountProps = {
	amount: number
	setAmount: Dispatch<SetStateAction<number>>
	originAccount: accountDetails | undefined
	formErrors: { amount: boolean; destinationAccount: boolean }
}

export const Amount: FC<AmountProps> = ({ setAmount, originAccount, amount, formErrors }) => (
	<div className='relative z-0 mb-6 md:w-1/2'>
		<input
			onChange={e => {
				if (!e.target.value.includes('-')) setAmount(Number(e.target.value))
			}}
			type='number'
			min='0'
			value={amount === 0 ? '' : amount}
			name='amount'
			id='amount'
			data-testid='amount'
			className={`block py-2.5 px-0 w-full text-base md:text-sm ${
				!formErrors.amount ? ' text-white border-gray-300 focus:border-lime-500' : ' text-red-300 border-red-400 focus:border-red-500'
			}  bg-transparent border-0 border-b-2 appearance-none focus:border-lime-500 focus:outline-none focus:ring-0  peer`}
			placeholder=' '
			required
		/>
		<label
			htmlFor='amount'
			className={`peer-focus:font-medium absolute text-sm ${
				!formErrors.amount
					? 'text-gray-400 peer-focus:text-lime-600 peer-focus:scale-75 scale-75'
					: 'text-red-500 peer-focus:text-red-300 peer-focus:scale-105 scale-105'
			}  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6`}
		>
			{!formErrors.amount ? (
				<>
					Transfer amount in {originAccount?.currency ?? 'origin currency'} <span className='text-lime-400'>*</span>
				</>
			) : (
				<>Amount bigger than available *</>
			)}
		</label>
	</div>
)
