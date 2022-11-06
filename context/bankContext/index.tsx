'use client'
import axios from 'axios'
import { createContext, FC, useEffect, useState } from 'react'
import { accountDetails } from '../../data/types'
import { componentTypes, BankContextTypes, notificationOptions } from './types'

export const initialbankContext = {
	accounts: undefined,
	setAccounts: () => {},
	notification: { type: 'error' as notificationOptions, message: '' },
	setNotification: () => {},
	apiErrorManagement: () => {},
}

export const bankContext = createContext<BankContextTypes>(initialbankContext)

export const BankContext: FC<componentTypes> = ({ children, actualAccounts }) => {
	const [accounts, setAccounts] = useState<accountDetails[]>(actualAccounts)
	const [notification, setNotification] = useState<{
		type: notificationOptions
		message: string
		seconds?: number
	}>({
		type: 'error',
		message: '',
	})

	const apiErrorManagement = (error: any) => {
		const status = error.response.status
		if (error.response.data.message) {
			setNotification({ type: 'error', message: error.response.data.message })
		} else {
			if (status === 400) {
				setNotification({ type: 'error', message: 'Bad request, was impossible to proceed' })
			}
			if (status === 401) {
				setNotification({ type: 'error', message: 'Unauthorized, make sure you are logged in' })
			}
			if (status === 403) {
				setNotification({ type: 'error', message: 'This action is no longger available' })
			}
			if (status === 404) {
				setNotification({ type: 'error', message: "We didn't found what you are loocking for" })
			}
			if (status === 409) {
				setNotification({ type: 'error', message: 'There is a conflict with this request' })
			}
			if (status === 500) {
				setNotification({ type: 'error', message: 'Internal error' })
			}
			if (status === 503) {
				setNotification({ type: 'error', message: 'This action is no longger available' })
			}
		}
	}

	useEffect(() => {
		;(async () => {
			try {
				axios.post('/api/api-control', {
					setting: 'reset-settings',
				})
			} catch (error) {
				apiErrorManagement(error)
			}
		})()
	}, [])

	return (
		<bankContext.Provider
			value={{
				accounts,
				setAccounts,
				notification,
				setNotification,
				apiErrorManagement,
			}}
		>
			{children}
		</bankContext.Provider>
	)
}
