export const CurrentlyWorking = () => (
	<>
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
								day, stock increase... This is done to help distributors control prices and product rotation in each of
								their customers. Also if they are buying the products outside the official distributor.{' '}
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

		<section id='workingOn' className='about-section pt-20 lg:pt-72 max-w-screen-2xl'>
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
							<li>TypeScript</li>
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
	</>
)