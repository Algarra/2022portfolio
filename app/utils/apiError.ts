import { Dispatch, SetStateAction } from 'react'
import { notificationObject } from '../common/Notifications'

export const apiErrorManagement = (error: any, setNotification: Dispatch<SetStateAction<notificationObject>>) => {
	const status = error.status
	if (error.message) {
		setNotification({ type: 'error', message: error.message })
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
