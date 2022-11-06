'use client'
import { FC, Suspense, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { bankContext } from '../../../context/bankContext'
import { accountDetails } from '../../../data/types'
import { TransferExchangeInfo } from '../../../components/bankApp/transfer/ExchangeInfo'
import { TransferForm } from '../../../components/bankApp/transfer/Form'
import { currencies } from '../../../data/mocks/currencies'
import { countries } from '../../../data/mocks/countires'

export type destinationAccount = {
	iban: string
	bank?: string
	country: string
	status?: boolean
	currency: string
	amount?: number
}

export const defaultDestinationAccount = {
	iban: '',
	country: '',
	currency: '',
}

const TransferPage: FC = () => {
	const [originAccount, setOriginAccount] = useState<accountDetails | undefined>(undefined)
	const [destinationAccount, setDestinationAccount] = useState<destinationAccount>(defaultDestinationAccount)
	const [exchangeTransferRate, setExchangeTransferRate] = useState<number | undefined>(undefined)
	const [amount, setAmount] = useState<number>(0)
	const { apiErrorManagement } = useContext(bankContext)

	useEffect(() => {
		if (originAccount?.currency && destinationAccount?.currency) {
			;(async () => {
				try {
					const exchangeTransaction = await axios.get(
						`https://api.exchangerate.host/convert?from=${originAccount?.currency}&to=${destinationAccount?.currency}`
					)
					setExchangeTransferRate(exchangeTransaction?.data?.info?.rate?.toFixed(3))
				} catch (error) {
					apiErrorManagement(error)
				}
			})()
		} else {
			setExchangeTransferRate(undefined)
		}
	}, [originAccount, destinationAccount])

	return (
		<div className={` text-white flex md:ml-48 h-fit md:h-screen `}>
			<div className='w-full mt-5 md:m-auto justify-center flex '>
				<div className=' max-w-[1000px] w-full relative mx-4 mb-5 md:mx-10 p-6 shadow-md bg-gray-800 rounded-lg'>
					<Suspense>
						<div className=' w-full flex flex-wrap justify-between'>
							<h2>Generate a transfer</h2>
							<div>
								{exchangeTransferRate && (
									<TransferExchangeInfo
										originAccount={originAccount}
										amount={amount}
										exchangeTransferRate={exchangeTransferRate}
										destinationAccount={destinationAccount}
									/>
								)}
							</div>
						</div>
						<TransferForm
							originAccount={originAccount}
							setOriginAccount={setOriginAccount}
							amount={amount}
							setAmount={setAmount}
							setDestinationAccount={setDestinationAccount}
							destinationAccount={destinationAccount}
							exchangeTransferRate={exchangeTransferRate}
							countries={countries}
							currencies={currencies}
						/>
					</Suspense>
				</div>
			</div>
		</div>
	)
}

export default TransferPage
