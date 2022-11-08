'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error)
	}, [error])
	return (
		<div className={` flex md:ml-48 h-fit md:h-screen justify-center `}>
			<div
				id='alert-additional-content-2'
				className=' p-4 border my-auto border-red-300 rounded-lg h-32 bg-red-50 dark:bg-red-200'
				role='alert'
			>
				<div className='flex items-center'>
					<svg
						aria-hidden='true'
						className='w-5 h-5 mr-2 text-red-900 dark:text-red-800'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
							clip-rule='evenodd'
						></path>
					</svg>
					<span className='sr-only'>Info</span>
					<h3 className='text-lg font-medium text-red-900 dark:text-red-800'>Somethnig went wrong</h3>
				</div>
				<div className='mt-2 mb-4 text-sm text-red-900 dark:text-red-800'>
					We cannot provide this information at this moment. Please try again or go back to the home page.
				</div>
				<div className='flex'>
					<Link href={'/bankApp'}>
						<button
							type='button'
							className='text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-800 dark:hover:bg-red-900'
						>
							<svg
								aria-hidden='true'
								className='-ml-0.5 mr-2 h-4 w-4'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
								<path
									fill-rule='evenodd'
									d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
									clip-rule='evenodd'
								></path>
							</svg>
							Go back
						</button>
					</Link>
					<button
						onClick={() => reset()}
						type='button'
						className='text-red-900 bg-transparent border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white'
						data-dismiss-target='#alert-additional-content-2'
						aria-label='Close'
					>
						Try again
					</button>
				</div>
			</div>
		</div>
	)
}
