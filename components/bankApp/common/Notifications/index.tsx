'use client'
import { useContext, useEffect, useRef, useState } from 'react'
import { bankContext } from '../../../../context/bankContext'

export const Notifications = () => {
	const { notification, setNotification } = useContext(bankContext)

	const [show, setShow] = useState(false)
	const seconds = notification.seconds ?? 4

	const update = useRef<number>(0)

	const close = () => {
		if (update.current - new Date().getTime() < -(seconds * 1000)) {
			setShow(false)
			setTimeout(() => {
				setNotification({ type: 'error', message: '' })
			}, 20)
		}
	}

	const setTemporalText = () => {
		setShow(true)
		setTimeout(() => {
			close()
		}, seconds * 1000)
	}

	useEffect(() => {
		if (notification.message) {
			update.current = new Date().getTime()
			setTemporalText()
		}
	}, [notification])

	return (
		<div
			className={` fixed z-50 ${
				show && notification.message ? 'right-2 md:right-5' : '-right-[100%]'
			} top-5 transition-all flex items-center p-4 mb-4 w-[90%] max-w-xs rounded-lg shadow text-gray-300 ${
				notification.type === 'success'
					? 'from-lime-900 to-gray-900 bg-gradient-to-t'
					: notification.type === 'alert'
					? 'from-orange-900 to-gray-900 bg-gradient-to-t'
					: 'from-red-900 to-gray-900 bg-gradient-to-t'
			}  `}
		>
			<div
				className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${
					notification.type === 'success' ? 'text-green-200' : notification.type === 'alert' ? 'text-orange-200' : 'text-red-200'
				} rounded-lg ${notification.type === 'success' ? 'bg-green-500' : notification.type === 'alert' ? 'bg-orange-500' : 'bg-red-500'} `}
			>
				{notification.type === 'success' ? (
					<i className='fa-solid fa-check' />
				) : notification.type === 'alert' ? (
					<i className='fa-solid fa-circle-exclamation' />
				) : (
					<i className='fa-solid fa-triangle-exclamation' />
				)}
			</div>
			<div className='ml-3 text-sm font-normal'>{notification.message}</div>
			{typeof seconds !== 'number' && (
				<button
					type='button'
					className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
					data-dismiss-target='#toast-success'
					aria-label='Close'
				>
					<span className='sr-only'>Close</span>
					<i className='fa-solid fa-xmark' />
				</button>
			)}
		</div>
	)
}
