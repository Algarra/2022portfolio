'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Sidebar = () => {
	const [collapseShow, setCollapseShow] = useState('hidden')
	const [actualPath, setActualPath] = useState('')

	useEffect(() => {
		setActualPath(window.location.pathname)
	}, [])

	return (
		<nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-600 flex flex-wrap items-center justify-between relative md:w-48 z-10 py-4 px-6'>
			<div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto'>
				<button
					className='cursor-pointer text-white md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
					type='button'
					name='menu'
					aria-label='manu'
					data-testid='menuBurguer'
					onClick={() => {
						if (collapseShow === 'hidden') {
							setCollapseShow(' bg-gray-600 absolute md:static top-20 md:top-0 m-2 py-3 px-6 md:m-0 md:py-0 md:px-0')
						} else {
							setCollapseShow('hidden')
						}
					}}
				>
					<i className='fas fa-bars text-white'></i>
				</button>
				<Link
					href='/'
					className='ml-4 md:ml-0 md:block text-left md:pb-4 text-lime-400 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
					prefetch={false}
				>
					<h1 className=' text-sm'>
						<i className='fa-solid fa-angle-left'></i> Go back
					</h1>
				</Link>

				<div
					className={
						'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-30 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
						collapseShow
					}
				>
					<h6 className='md:min-w-full text-gray-100 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>Management</h6>

					<ul className='md:flex-col md:min-w-full flex flex-col list-none '>
						{[
							{
								label: 'Accounts',
								icon: 'fa-solid fa-rectangle-list',
								href: '/bankApp',
							},
							{
								label: 'Make a transfer',
								icon: 'fa-solid fa-arrow-right-arrow-left',
								href: '/bankApp/transfer',
							},
							{
								label: 'Settings',
								icon: 'fa-solid fa-gears',
								href: '/bankApp/settings',
							},
						].map(link => (
							<li
								className='items-cente pl-3 md:pl-0 hover:bg-gray-500 rounded-md  text-gray-300 hover:text-lime-100'
								key={link.href}
								onClick={() => {
									setCollapseShow('hidden')
									setActualPath(link.href)
								}}
							>
								<Link
									href={link.href}
									data-testid={link.href}
									className={`text-xs uppercase flex py-3 font-bold flex-wrap ${link.href === actualPath && ' text-white'} `}
								>
									<div className=' md:w-full md:justify-center md:flex  '>
										<i className={` ${link.icon} mr-2 md:text-3xl ${link.href === actualPath && 'text-lime-400'}`}></i>
									</div>
									<div className=' md:w-full md:justify-center md:flex md:mt-3  '>{link.label}</div>
								</Link>
							</li>
						))}
					</ul>

					<hr className='my-4 md:min-w-full' />

					<p className='font-light text-gray-300'>
						This bank app is built with{' '}
						<span className='font-semibold text-gray-900 underline dark:text-white decoration-purple-500'>Next js 13</span> and is using the
						new <span className='font-semibold text-gray-900 underline dark:text-white decoration-lime-500'>app/ folder</span>{' '}
					</p>
				</div>
			</div>
		</nav>
	)
}
