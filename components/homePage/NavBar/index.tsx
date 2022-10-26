import Link from 'next/link'
import { useEffect, useState } from 'react'

export const NavBar = () => {
	const [sidebarOpen, SetSidebarOpen] = useState(false)
	const [windowOnTop, setWindowOnTop] = useState(true)
	const [positionWindow, setPositionWindow] = useState('home')

	function isInViewPort(element: HTMLElement | null) {
		const bounding = element ? element.getBoundingClientRect() : undefined
		if (bounding && bounding.top <= 0 && bounding.top + bounding.height >= 10) {
			return true
		} else {
			return false
		}
	}

	const checkScreenPosition = () => {
		if (isInViewPort(document.getElementById('contact'))) setPositionWindow('contact')
		if (isInViewPort(document.getElementById('recentJobs'))) setPositionWindow('recentJobs')
		if (isInViewPort(document.getElementById('workingOn'))) setPositionWindow('workingOn')
		if (isInViewPort(document.getElementById('tecnologies'))) setPositionWindow('tecnologies')
		if (isInViewPort(document.getElementById('home'))) setPositionWindow('home')
		if (window.scrollY < 40 && !windowOnTop) setWindowOnTop(true)
		else if (window.scrollY > 40 && windowOnTop) setWindowOnTop(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', checkScreenPosition)
		return () => window.removeEventListener('scroll', checkScreenPosition, false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [windowOnTop])
	return (
		<nav className=' w-full py-4 transition-all duration-300 '>
			<button
				className={` w-12 h-12 rounded-full m-auto mb-8 transition-all duration-300 leading-none bg-slate-600 bg-opacity-30 flex justify-center items-center fixed ${
					sidebarOpen ? 'left-60' : 'left-5'
				} z-50 top-6 lg:hidden text-3xl text-white `}
				type='button'
				onClick={() => SetSidebarOpen(!sidebarOpen)}
				aria-label='menu'
			>
				{sidebarOpen ? <i className='fa-solid fa-xmark'></i> : <i className='fa-solid fa-bars'></i>}
			</button>

			<div
				className={`fixed ${
					sidebarOpen ? 'left-0' : '-left-96'
				} lg:left-0 top-0 z-20 bg-white pt-20 lg:pt-5 h-full lg:h-auto lg:w-full px-5 py-3 duration-300 lg:block ${
					windowOnTop ? 'lg:bg-transparent lg:text-white ' : 'lg:bg-white lg: text-slate-800'
				}`}
				id='navbarOne'
			>
				<Link href='/my-room' aria-atomic>
					<button className='absolute hidden lg:inline-flex -mt-2 ml-4  items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
						<span className='relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							VISIT MY ROOM
						</span>
					</button>
				</Link>

				<ul className=' mr-auto lg:justify-end lg:flex text-3xl lg:text-base'>
					<li
						className='nav-item mr-5 mb-5 lg:ml-11'
						onClick={() => {
							if (sidebarOpen) SetSidebarOpen(false)
						}}
					>
						<a
							className={positionWindow === 'home' && !sidebarOpen ? 'underline decoration-sky-500' : ''}
							aria-label='Go to home'
							href='#home'
						>
							Home
						</a>
					</li>
					<li
						className='nav-item mr-5 mb-5 lg:ml-11'
						onClick={() => {
							if (sidebarOpen) SetSidebarOpen(false)
						}}
					>
						<a
							className={positionWindow === 'recentJobs' && !sidebarOpen ? 'underline decoration-sky-500' : ''}
							aria-label='Go to recentJobs'
							href='#recentJobs'
						>
							Recent Jobs
						</a>
					</li>
					<li
						className='nav-item mr-5 mb-5 lg:ml-11'
						onClick={() => {
							if (sidebarOpen) SetSidebarOpen(false)
						}}
					>
						<a
							className={positionWindow === 'workingOn' && !sidebarOpen ? 'underline decoration-sky-500' : ''}
							aria-label='Go to workingOn'
							href='#workingOn'
						>
							Currently working on
						</a>
					</li>

					<li
						className='nav-item mr-5 mb-5 lg:ml-11'
						onClick={() => {
							if (sidebarOpen) SetSidebarOpen(false)
						}}
					>
						<a
							className={positionWindow === 'tecnologies' && !sidebarOpen ? 'underline decoration-sky-500' : ''}
							aria-label='Go to tecnologies'
							href='#tecnologies'
						>
							Tecnologies
						</a>
					</li>

					<li
						className='nav-item mr-5 mb-5 lg:ml-11'
						onClick={() => {
							if (sidebarOpen) SetSidebarOpen(false)
						}}
					>
						<a
							className={positionWindow === 'contact' && !sidebarOpen ? 'underline decoration-sky-500' : ''}
							aria-label='Go to contact'
							href='#contact'
						>
							Contact
						</a>
					</li>
				</ul>
				<Link href='/my-room' aria-atomic>
					<button className='absolute inline-flex lg:hidden -mt-2  items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
						<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							VISIT MY ROOM
						</span>
					</button>
				</Link>
			</div>

			<span
				className={` transition-all z-20 duration-700 text-right fixed inline-flex p-2 right-4 lg:right-10 overflow-hidden bottom-4 lg:bottom-10 ml-2 ${
					windowOnTop ? 'w-[225px]' : 'w-10'
				} hover:w-[225px] h-10 rounded-full bg-black hover:bg-opacity-50 bg-opacity-70 text-white`}
			>
				<a
					href='https://github.com/Algarra/2022portfolio'
					target='_blank'
					className=' absolute right-2.5 w-60 '
					rel='nofollow noreferrer'
					aria-label='Opem my github'
				>
					Watch this website code<i className='fa-solid fa-code ml-2.5'></i>
				</a>
			</span>
		</nav>
	)
}
