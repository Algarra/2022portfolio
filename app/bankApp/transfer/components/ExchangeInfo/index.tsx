import { FC } from 'react'
import { accountDetails } from '../../../../../data/types'
import { destinationAccount } from '../../utils'

type TransferExchangeInfoProps = {
	originAccount: accountDetails | undefined
	amount: number
	exchangeTransferRate: number
	destinationAccount: destinationAccount
}

export const TransferExchangeInfo: FC<TransferExchangeInfoProps> = ({
	originAccount,
	amount,
	exchangeTransferRate,
	destinationAccount,
}) => (
	<div className='inline-flex'>
		<div className=' h-12 align-middle text-center mr-3 '>
			<div>{originAccount?.currency}</div>
			<div className=' text-gray-300'>{amount}</div>
		</div>
		<div className=' h-12 justify-center text-center mr-3'>
			<div className='text-lime-300'>
				<i className='fa-solid fa-right-long'></i>
			</div>
			<div className=' text-gray-300'>{exchangeTransferRate}</div>
		</div>
		<div className=' h-12 justify-center text-center'>
			<div>{destinationAccount?.currency}</div>
			<div className=' text-gray-300'>{(amount * exchangeTransferRate).toFixed(2)}</div>
		</div>
	</div>
)
