'use client'

import axios from 'axios'
import { FC, useContext, useState } from 'react'
import { SettingsType } from './page'
import { bankContext } from '../../../../context/bankContext'

export const SettingsContent: FC<{ actualSettings: SettingsType }> = ({ actualSettings }) => {
	const [settings, setSettings] = useState(actualSettings)
	const { setNotification, apiErrorManagement } = useContext(bankContext)

	const postNewSettings = async (setting: string, newValue: boolean) => {
		try {
			const response = await axios.post('/api/api-control', {
				setting,
				value: newValue,
			})

			setSettings(response.data.settings)
			setNotification({ type: 'success', message: 'Settings changed' })
		} catch (error) {
			apiErrorManagement(error)
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
								checked={settings.accountsDetatilsGetError}
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
								checked={settings.accountsPostError}
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
								checked={settings.accountsPatchError}
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
								checked={settings.transferPostError}
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
		</div>
	)
}
