/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import emailjs from 'emailjs-com'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
	const [sended, setSended] = useState(false)
	const [errorSend, setErrorSend] = useState(false)
	const [sidebarOpen, SetSidebarOpen] = useState(false)
	const [emailData, setEmailData] = useState({ name: '', email: '', message: '' })
	const [windowOnTop, setWindowOnTop] = useState(true)
	const [positionWindow, setPositionWindow] = useState('home')

	function sendEmail(e: any) {
		e.preventDefault()
		console.log(emailData)
		if (emailData.name !== '' && emailData.email !== '' && emailData.message !== '') {
			setErrorSend(false)
			emailjs.sendForm('service_mpjmw7k', 'template_nqp46x5', e.target, 'user_9mA1y3nPUcdafI8brKZnn').then(
				() => {
					setSended(true)
					clear()
				},
				error => {
					console.log(error.text)
				}
			)
		} else {
			setSended(false)
			setErrorSend(true)
		}
		e.target.reset()
	}

	const clear = () => {
		setEmailData({ name: '', email: '', message: '' })
	}

	function isInViewPort(element: HTMLElement | null) {
		// Get the bounding client rectangle position in the viewport
		const bounding = element ? element.getBoundingClientRect() : undefined

		// Checking part. Here the code checks if it's *fully* visible
		// Edit this part if you just want a partial visibility
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
		window.addEventListener('scroll', () => {
			checkScreenPosition()
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [windowOnTop])

	return (
		<div className='flex relative flex-wrap justify-center'>
			<nav className=' w-full py-4 transition-all duration-300 '>
				<button
					className={` w-12 h-12 rounded-full m-auto mb-8 transition-all duration-300 leading-none bg-slate-600 bg-opacity-30 flex justify-center items-center fixed ${
						sidebarOpen ? 'left-60' : 'left-5'
					} z-50 top-6 lg:hidden text-3xl text-white `}
					type='button'
					onClick={() => SetSidebarOpen(!sidebarOpen)}
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
					<ul className=' mr-auto lg:justify-end lg:flex text-3xl lg:text-base'>
						<li
							className='nav-item mr-5 mb-5 lg:ml-11'
							onClick={() => {
								if (sidebarOpen) SetSidebarOpen(false)
							}}
						>
							<a
								className={positionWindow === 'home' && !sidebarOpen ? 'underline decoration-sky-500' : ''}
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
								href='#contact'
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<section
				id='home'
				className=' -mt-10 flex pb-20 pt-28 lg:pb-36 lg:pt-32 bg-no-repeat bg-cover bg-center justify-center w-full '
				style={{ backgroundImage: "url('img/hero-bg.svg')" }}
			>
				<div className='px-4 max-w-screen-2xl'>
					<div className=' flex-wrap flex items-center relative'>
						<div className=' pl-2 lg:pl-4 w-full lg:w-1/2'>
							<div className='hero-content mb-0 lg:mb-6'>
								<h1 className='text-white mb-9 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl'>
									Daniel Algarra Navarro Javascript developer!
								</h1>
								<p className='text-white text-lg mb-10 xl:pr-18 2xl:pr-120'>Welcome to the site to know who I am.</p>
								<a href='#tecnologies'>
									<button className='border-2 bg-transparent hover:bg-slate-100 border-solid font-bold text-center rounded-full text-white hover:text-neutral-700 cursor-pointer py-4 px-6 '>
										Skills
									</button>
								</a>
								<a href='https://www.linkedin.com/in/daniel-algarra-navarro/'>
									<button className='absolute left-10 -bottom-20 w-12 h-12 rounded-full bg-white hidden lg:flex justify-center items-center'>
										<i className='fa-brands fa-linkedin-in'></i>
									</button>
								</a>
							</div>
						</div>
						<div className='w-full lg:w-1/2'>
							<div className='flex pt-8 lg:pt-0'>
								<img src='/img/dani.png' alt='' className=' m-auto w-full lg:w-auto' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='recentJobs' className=' pt-20 '>
				<div className='px-4'>
					<div className='flex-wrap flex justify-center'>
						<div className='w-full text-center'>
							<h2 className=' mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold'>
								Recent works
							</h2>
						</div>

						<div className='w-full md:w-8/12 lg:w-4/12'>
							<div className='text-center px-3 2xl:px-10 py-8'>
								<div className='w-full flex justify-center pb-10'>
									<div className='flex items-center justify-center w-20 h-20 text-3xl rounded-full bg-black bg-opacity-10 text-black'>
										<i className='fa-solid fa-truck-fast'></i>
									</div>
								</div>
								<div className='content'>
									<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl'>Eurosender</h3>
									<p className='text-lg'>
										Eurosender is a logistics company located in Luxembourg in which I develop web apps and mobile apps.
									</p>
								</div>
							</div>
						</div>
						<div className='w-full md:w-8/12 lg:w-4/12'>
							<div className='text-center px-3 2xl:px-10 py-8'>
								<div className='w-full flex justify-center pb-10'>
									<div className='flex items-center justify-center w-20 h-20 text-3xl rounded-full bg-black bg-opacity-10 text-black'>
										<i className='fa-solid fa-code'></i>
									</div>
								</div>
								<div className='content'>
									<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl '>Atmira</h3>
									<p className='text-lg'>
										Atmira is a consultancy located in Spain where I work developing web applications.
									</p>
								</div>
							</div>
						</div>
						<div className='w-full md:w-8/12 lg:w-4/12'>
							<div className='text-center px-3 2xl:px-10 py-8'>
								<div className='w-full flex justify-center pb-10'>
									<div className='flex items-center justify-center w-20 h-20 text-3xl rounded-full bg-black bg-opacity-10 text-black'>
										<i className='fa-solid fa-person-biking'></i>
									</div>
								</div>

								<div className='content'>
									<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl '>Pro Athletes World</h3>
									<p className='text-lg'>
										PAW is a company that sells cycling products where I worked developing mobile and web apps.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='workingOn' className='  lg:mt-10 relative z-10 pt-20 max-w-screen-2xl'>
				<div className='px-4'>
					<div className='flex-wrap flex items-center'>
						<div className='w-full text-center'>
							<h2 className=' mb-32 lg:mb-16 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold'>
								Currently working on
							</h2>
						</div>
						<div className='w-full lg:w-1/2'>
							<div className='relative z-10 lg:pt-20 pb-20 mb-20 ml-6 lg:ml-0 lg:mb-0'>
								<img src='/img/about-1.png' alt='' className='w-100' />
								<img
									src='/img/about-left-shape.svg'
									alt=''
									className='absolute -z-10 top-1/2 transform -translate-y-1/2 -left-20'
								/>
								<img src='/img/left-dots.svg' alt='' className='absolute -z-10 bottom-0 right-14' />
							</div>
						</div>
						<div className='w-full mt-20 lg:w-1/2'>
							<div className='mb-10'>
								<h1 className='mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Scraping application</h1>
								<p className='mb-6'>
									Right now I am building a scraping app to get information about online stores. Stock, price, sales per
									day, stock increase... This is done to help distributors control prices and product rotation in each
									of their customers. Also if they are buying the products outside the official distributor.{' '}
								</p>
								<ul className='about-feature pb-10'>
									<li>Playwright</li>
									<li>Next js</li>
									<li>GraphQL</li>
									<li>MongoDB</li>
								</ul>
							</div>
							{/* <a className='border-2 bg-transparent hover:bg-slate-100 border-solid font-bold text-center rounded-full text-black hover:text-neutral-700 cursor-pointer py-4 px-6 '>
								Discover More
							</a> */}
						</div>
					</div>
				</div>
			</section>

			<section id='about' className='about-section pt-20 lg:pt-72 max-w-screen-2xl'>
				<div className='flex-wrap flex items-center '>
					<div className='w-full lg:w-1/2 mt-52 lg:mt-0 '>
						<div className='px-4'>
							<div className='section-title mb-8'>
								<h1 className='mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Eurosender</h1>
								<p className=''>
									{
										"On Eurosender I'm currently working on diferent applications, internal management apps, webside (NEXT js) and mobile applications (React Native)"
									}
								</p>
							</div>
							<ul className='about-feature pb-10'>
								<li>Typescript</li>
								<li>Next js</li>
								<li>React Native</li>
							</ul>
							{/* <a className='border-2 bg-transparent hover:bg-slate-100 border-solid font-bold text-center rounded-full text-black hover:text-neutral-700 cursor-pointer py-4 px-6 '>
								Learn More
							</a> */}
						</div>
					</div>
					<div className='w-full lg:w-1/2 order-first lg:order-last'>
						<div className='relative z-10 mb-18 lg:mb-0 '>
							<img src='/img/about-2.png' alt='' className='' />
							<img
								src='/img/about-right-shape.svg'
								alt=''
								className='absolute -z-10 top-1/2 transform -translate-y-1/2 right-0 w-2/3 lg:w-3/4 lg:right-0'
							/>
							<img src='/img/right-dots.svg' alt='' className='absolute -z-10 bottom-0 left-14 w-2/3 lg:w-3/4' />
						</div>
					</div>
				</div>
			</section>

			<section id='tecnologies' className=' mt-40 lg:mt-56 pt-24 pb-24 bg-indigo-200 w-full flex justify-center'>
				<div className='feature-extended-wrapper py-18 bg-theme-color bg-opacity-10 max-w-screen-2xl'>
					<div className='container'>
						<div className='flex-wrap flex justify-center'>
							<div className='w-full md:w-9/12 lg:w-8/12 xl:w-6/12'>
								<div className='section-title text-center mb-15'>
									<h2 className='mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold'>
										Technical skills
									</h2>
									<p className='text-lg px-2 '>
										Here you will find a list of the technologies with which I have the most experience.
									</p>
								</div>
							</div>
						</div>

						<div className='flex flex-wrap'>
							<div className='w-full md:w-1/2 lg:w-4/12'>
								<div className='p-8 lg:px-3'>
									<div className=' text-6xl mb-8 text-theme-color leading-none'>
										<img src='/img/typescript.png' alt='' className=' w-16 ' />
									</div>
									<div className='content'>
										<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>
											Typescript
										</h3>
										<p className='text-lg'>
											3 years experience
											<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
												<div
													className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500'
													style={{ width: '100%' }}
												></div>
											</div>
										</p>
									</div>
								</div>
							</div>
							<div className='w-full md:w-1/2 lg:w-4/12'>
								<div className='p-8 lg:px-3'>
									<div className=' text-6xl mb-[34px] text-theme-color leading-none'>
										<i className='fa-brands fa-react'></i>
									</div>
									<div className='content'>
										<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>
											React js
										</h3>
										<p className='text-lg'>
											Over 3 years experience
											<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
												<div
													className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500'
													style={{ width: '100%' }}
												></div>
											</div>
										</p>
									</div>
								</div>
							</div>
							<div className='w-full md:w-1/2 lg:w-4/12'>
								<div className='p-8 lg:px-3'>
									<div className=' text-6xl mb-8 text-theme-color leading-none'>
										<img src='/img/nextjs.png' alt='' className=' w-16 ' />
									</div>
									<div className='content'>
										<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>Next js</h3>
										<p className='text-lg'>
											1 years experience
											<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
												<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '90%' }}></div>
											</div>
										</p>
									</div>
								</div>
							</div>
							<div className='w-full md:w-1/2 lg:w-4/12'>
								<div className='p-8 lg:px-3'>
									<div className=' text-6xl mb-8 text-theme-color leading-none'>
										<i className='fa-brands fa-react'></i>
									</div>
									<div className='content'>
										<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>
											React native
										</h3>
										<p className='text-lg'>
											1 years experience
											<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
												<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '70%' }}></div>
											</div>
										</p>
									</div>
								</div>
							</div>
							<div className='w-full md:w-1/2 lg:w-4/12'>
								<div className='p-8 lg:px-3'>
									<div className=' text-6xl mb-[39px] text-theme-color leading-none'>
										<img src='/img/node.png' alt='' className=' w-12 ' />
									</div>
									<div className='content'>
										<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>Node</h3>
										<p className='text-lg'>
											3 years experience
											<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
												<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '80%' }}></div>
											</div>
										</p>
									</div>
								</div>
							</div>
							<div className='w-full md:w-1/2 lg:w-4/12'>
								<div className='p-8 lg:px-3'>
									<div className=' text-6xl mb-[46px] text-theme-color leading-none'>
										<img src='/img/graphql.png' alt='' className=' w-12 ' />
									</div>
									<div className='content'>
										<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>GraphQL</h3>
										<p className='text-lg'>
											1 years experience
											<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
												<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '70%' }}></div>
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='contact' className='w-full pb-28 pt-28 flex justify-center'>
				<div
					className='subscribe-wrapper bg-no-repeat bg-center bg-cover rounded-3xl  w-11/12 max-w-lg py-12 px-8 md:px-13'
					style={{ background: 'linear-gradient(118deg, rgba(81,81,231,1) 0%, rgba(155,167,241,1) 100%)' }}
				>
					<div className='w-full text-center'>
						<h2 className=' font-bold text-white '>Contact me</h2>
					</div>
					<form className='formhome' onSubmit={sendEmail} method='post'>
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
								SEND
							</button>
						</div>

						{sended && <h1 className='enviadoExito'>Your message has been sent successfully</h1>}
						{errorSend && <h1 className='enviadoError'>ERROR: fill all data</h1>}
					</form>
				</div>
			</section>

			<footer
				className=' text-center bg-cover bg-no-repeat w-full bg-right-top pt-40 mt-25 bg-theme-color md:bg-transparent mb:pt-72 lg:pt-72'
				style={{ backgroundImage: "url('/img/footer-bg.svg')" }}
			>
				<div className='flex flex-wrap'>
					<div className='w-full flex text-center justify-center'>
						<div className=' mb-10 mx-3 w-full justify-center flex flex-wrap '>
							<div className='w-max pt-2'>
								<span className=' mr-5 text-white sm:pr-13 md:pr-0 2xl:pr-25'>Kepp knowing about me.</span>
							</div>
							<div className='w-12'>
								<span className='flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 text-white'>
									<a href='https://www.linkedin.com/in/daniel-algarra-navarro/'>
										<i className='fa-brands fa-linkedin-in'></i>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Home
