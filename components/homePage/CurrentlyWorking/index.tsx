'use client'
import Image from 'next/image'
import about2 from './img/about-2.png'
import about1 from './img/about-1.png'
import rightShape from './img/about-right-shape.svg'
import leftShape from './img/about-left-shape.svg'
import rightDots from './img/right-dots.svg'
import leftDots from './img/left-dots.svg'

export const CurrentlyWorking = () => (
	<>
		<section id='workingOn' className='  lg:mt-10 relative z-10 pt-20 max-w-screen-2xl'>
			<div className='px-8 flex-wrap flex items-center'>
				<div className='w-full text-center'>
					<h2 className=' mb-16 md:mb-32 lg:mb-16 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold'>
						Currently working on
					</h2>
				</div>
				<div className='w-full lg:w-1/2 relative z-10 lg:pt-20 pb-20 mb-10 md:mb-20 ml-6 md:ml-[10%] lg:ml-0 lg:mb-0'>
					<span className='w-12'>
						<Image src={about1} alt='abut1' title='about1' />
					</span>
					<span className=' absolute -z-10 top-1/2 w-2/3 h-full transform -translate-y-1/2 -left-10'>
						<Image src={leftShape} alt='leftshape' title='leftshape' />
					</span>
					<span className=' absolute -z-10 -bottom-2 w-2/3 h-44 right-14'>
						<Image src={leftDots} alt='leftDots' title='leftDots' />
					</span>
				</div>
				<div className='w-full mt-20 lg:w-1/2 mb-10'>
					<h3 className='mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Scraping application</h3>
					<p className='mb-6'>
						Right now I am building a scraping app to get information about online stores. Stock, price, sales per day, stock increase...
						This is done to help distributors control prices and product rotation in each of their customers. Also if they are buying the
						products outside the official distributor.{' '}
					</p>
					<ul className='about-feature pb-10'>
						<li>Playwright</li>
						<li>Next js</li>
						<li>Tailwind</li>
						<li>MongoDB</li>
					</ul>
				</div>
			</div>
		</section>

		<section id='workingOn' className='about-section pt-20 lg:pt-72 w-full px-8 lg:px-20 max-w-screen-2xl'>
			<div className='flex-wrap flex items-center '>
				<div className='w-full lg:w-1/2 mt-52 lg:mt-0 '>
					<div className='section-title mb-8'>
						<h3 className='mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>Eurosender</h3>
						<p className=''>
							{"On Eurosender I'm currently working on different applications, internal management apps and webside (NEXT js)"}
						</p>
					</div>
					<ul className='about-feature pb-10'>
						<li>TypeScript</li>
						<li>Next js</li>
						<li>Redux</li>
						<li>OpenAPI</li>
						<li>Jest</li>
					</ul>
				</div>
				<div className='w-full lg:w-1/2 order-first md:ml-[10%] lg:ml-0 lg:order-last relative z-10 mb-18 lg:mb-0 '>
					<span>
						<Image src={about2} alt='about2' title='about2' className='' />
					</span>
					<span className='absolute -z-10 top-1/2 -translate-y-1/2 right-0  w-2/3 lg:w-3/4 lg:-right-10'>
						<Image src={rightShape} title='rightShape' alt='rightShape' />
					</span>
					<span className='absolute -z-10 -bottom-12 left-4 w-2/3 lg:w-3/4'>
						<Image src={rightDots} title='rightDots' alt='rightDots' />
					</span>
				</div>
			</div>
		</section>
	</>
)
