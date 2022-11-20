import { Dispatch, SetStateAction } from 'react'
import { accountDetails } from '../../../../../data/types'
import { notificationObject } from '../../../../common/Notifications'
import { destinationAccount } from '../../utils'

export type TransferFromProps = {
	originAccount: accountDetails | undefined
	setOriginAccount: Dispatch<SetStateAction<accountDetails | undefined>>
	setAmount: Dispatch<SetStateAction<number>>
	amount: number
	setDestinationAccount: Dispatch<SetStateAction<destinationAccount>>
	destinationAccount: destinationAccount
	countries: string[]
	currencies: string[]
	exchangeTransferRate: number | undefined
	accounts: accountDetails[]
	setNotification: Dispatch<SetStateAction<notificationObject>>
}

export type form = {
	originAccountIban: string | undefined
	amount: number
	originCurrency: string | undefined
	destinationCurrency: string
	destinationAccountIban: string
	concept: string
	name: string
	lastname: string
	destinationAmount: number
}
