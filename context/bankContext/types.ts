import { Dispatch, ReactNode, SetStateAction } from 'react'
import { accountDetails } from '../../data/types'

export type notificationOptions = 'success' | 'error' | 'alert'
export interface BankContextTypes {
	accounts: accountDetails[] | undefined
	setAccounts: Dispatch<SetStateAction<accountDetails[]>>
	notification: {
		type: notificationOptions
		message: string
		seconds?: number
	}
	setNotification: Dispatch<
		SetStateAction<{
			type: notificationOptions
			message: string
			seconds?: number
		}>
	>
	apiErrorManagement: (error: any) => void
}

export interface componentTypes {
	children: ReactNode
	actualAccounts: accountDetails[]
}
