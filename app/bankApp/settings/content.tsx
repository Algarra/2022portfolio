'use client'
import { FC, useState } from 'react'
import { SettingsType } from './page'
import { notificationObject, Notifications } from '../../common/Notifications'
import { useRouter } from 'next/navigation'
import { apiErrorManagement } from '../../utils/apiError'
import settings from '../../../settings'

async function update(data: { setting: string; value: boolean }, refresh: () => void) {
	const response = await fetch(`${settings.BASE_URL}api/api-control`, {
		method: 'POST',
		body: JSON.stringify(data),
	})
	if (response.ok) refresh()
	return response
}

export const SettingsContent: FC<{ actualSettings: SettingsType }> = ({ actualSettings }) => {
	const [notification, setNotification] = useState<notificationObject>({
		type: 'error',
		message: '',
	})
	const router = useRouter()

	const postNewSettings = async (setting: string, newValue: boolean) => {
		const response: Response = await update(
			{
				setting,
				value: newValue,
			},
			router.refresh
		)
		if (response.ok) {
			setNotification({ type: 'success', message: 'Settings changed' })
		} else {
			apiErrorManagement(await response.json(), setNotification)
		}
	}

	return (
		<div className='w-full mt-5 md:m-auto justify-center flex '>
			<div className=' max-w-[1000px] relative mx-4 mb-5 md:mx-10 p-6 shadow-md bg-gray-700 rounded-lg'>
				<div className=' w-full justify-between'>
					<h2>API management</h2>
					<p className=' my-4 text-gray-200 '>
						With the following options you are going to active or inactive the errors for a specific API{' '}
					</p>
					<label htmlFor='getTransfersDetails-toggle' className='inline-flex w-full relative items-center mb-4 cursor-pointer'>
						<div className=' w-11 h-6 relative '>
							<input
								type='checkbox'
								value=''
								id='getTransfersDetails-toggle'
								data-testid='getTransfersDetails-toggle'
								className='sr-only peer'
								defaultChecked={actualSettings.accountsDetatilsGetError}
								onChange={e => {
									postNewSettings('accountsDetailsGetError', e.target.checked)
								}}
							/>
							<div className="w-11 h-6 rounded-full peer peer-focus:ring-4  peer-focus:ring-lime-800 bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-500 peer-checked:bg-lime-600"></div>
						</div>
						<span className='ml-3 text-sm font-medium  text-gray-300'>
							GET /api/transfer/:iban (receive all the transfer for an specific account)
						</span>
					</label>

					<label htmlFor='postAccount-toggle' className='inline-flex w-full relative items-center mb-4 cursor-pointer'>
						<div className=' w-11 h-6 relative '>
							<input
								type='checkbox'
								value=''
								id='postAccount-toggle'
								data-testid='postAccount-toggle'
								className='sr-only peer'
								defaultChecked={actualSettings.accountsPostError}
								onChange={e => {
									postNewSettings('accountsPostError', e.target.checked)
								}}
							/>
							<div className="w-11 h-6 rounded-full peer peer-focus:ring-4  peer-focus:ring-lime-800 bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-500 peer-checked:bg-lime-600"></div>
						</div>
						<span className='ml-3 text-sm font-medium  text-gray-300'>POST /api/accounts (add new account action)</span>
					</label>

					<label htmlFor='patchAccount-toggle' className='inline-flex w-full relative items-center mb-4 cursor-pointer'>
						<div className=' w-11 h-6 relative '>
							<input
								type='checkbox'
								value=''
								id='patchAccount-toggle'
								data-testid='patchAccount-toggle'
								className='sr-only peer'
								defaultChecked={actualSettings.accountsPatchError}
								onChange={e => {
									postNewSettings('accountsPatchError', e.target.checked)
								}}
							/>
							<div className="w-11 h-6 rounded-full peer peer-focus:ring-4  peer-focus:ring-lime-800 bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-500 peer-checked:bg-lime-600"></div>
						</div>
						<span className='ml-3 text-sm font-medium  text-gray-300'>PATCH /api/close-account (close an existing account)</span>
					</label>

					<label htmlFor='postCloseAccount-toggle' className='inline-flex w-full relative items-center mb-4 cursor-pointer'>
						<div className=' w-11 h-6 relative '>
							<input
								type='checkbox'
								value=''
								id='postCloseAccount-toggle'
								data-testid='postCloseAccount-toggle'
								className='sr-only peer'
								defaultChecked={actualSettings.transferPostError}
								onChange={e => {
									postNewSettings('transferPostError', e.target.checked)
								}}
							/>
							<div className="w-11 h-6 rounded-full peer peer-focus:ring-4  peer-focus:ring-lime-800 bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-500 peer-checked:bg-lime-600"></div>
						</div>
						<span className='ml-3 text-sm font-medium  text-gray-300'>POST /api/transfer (create a new transfer)</span>
					</label>
				</div>
			</div>
			<Notifications notification={notification} setNotification={setNotification} />
		</div>
	)
}
