import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import emailjs from 'emailjs-com'

interface contact {
	setSuccessMessage: Dispatch<SetStateAction<string>>
}

export const Contact: React.FC<contact> = ({ setSuccessMessage }) => {
	const [loading, setLoading] = useState(false)
	const [form, setForm] = useState<HTMLFormElement | undefined>(undefined)
	const [emailData, setEmailData] = useState({ name: '', email: '', message: '' })

	useEffect(() => {
		function sendEmail() {
			if (emailData.name !== '' && emailData.email !== '' && emailData.message !== '' && form) {
				emailjs.sendForm('service_mpjmw7k', 'template_nqp46x5', form, 'user_9mA1y3nPUcdafI8brKZnn').then(
					() => {
						setSuccessMessage('Data sent correctly')
						setEmailData({ name: '', email: '', message: '' })
						setLoading(false)
					},
					error => {
						console.log(error.text)
						setLoading(false)
					}
				)
			} else {
				setSuccessMessage('')
				setLoading(false)
			}
		}
		if (form && loading) sendEmail()
	}, [form, emailData, loading, setSuccessMessage])

	return (
		<section id='contact' className='w-full pb-28 pt-28 flex justify-center'>
			<div
				className='subscribe-wrapper bg-no-repeat bg-center bg-cover rounded-3xl  w-11/12 max-w-lg py-12 px-8 md:px-13'
				style={{ background: 'linear-gradient(118deg, rgba(81,81,231,1) 0%, rgba(155,167,241,1) 100%)' }}
			>
				<div className='w-full text-center'>
					<h2 className=' font-bold text-white '>Contact me</h2>
				</div>
				<form
					className='formhome'
					onSubmit={async e => {
						e.preventDefault()
						setLoading(true)
						setForm(e.target as HTMLFormElement)
					}}
					method='post'
				>
					<div className='mb-6'>
						<label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
							Your name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className=' text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder=''
							required
							value={emailData.name}
							onChange={e => setEmailData({ ...emailData, name: e.target.value })}
						/>
					</div>
					<div className='mb-6'>
						<label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
							Your email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className=' text-sm rounded-lg block w-full p-2.5 dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='name@example.com'
							required
							value={emailData.email}
							onChange={e => setEmailData({ ...emailData, email: e.target.value })}
						/>
					</div>
					<div className='mb-6'>
						<label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
							Your message
						</label>
						<textarea
							id='message'
							name='message'
							rows={4}
							required
							className='block p-2.5 w-full text-sm rounded-lg border dark:bg-gray-200 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Leave a message...'
							value={emailData.message}
							onChange={e => setEmailData({ ...emailData, message: e.target.value })}
						></textarea>
					</div>

					<div className='w-full justify-end flex'>
						<button
							type='submit'
							value='Send'
							name='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							{loading ? (
								<div role='status'>
									<svg
										aria-hidden='true'
										className='mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
										viewBox='0 0 100 101'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
											fill='currentColor'
										/>
										<path
											d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
											fill='currentFill'
										/>
									</svg>
									<span className='sr-only'>Loading...</span>
								</div>
							) : (
								<>{'SEND'}</>
							)}
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}
