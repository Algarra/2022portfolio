import Image from 'next/image'
import typescript from './img/typescript.png'
import next from './img/nextjs.png'
import node from './img/node.png'
import graph from './img/graphql.png'

export const TechnicalSkills = () => (
	<section id='tecnologies' className=' mt-40 lg:mt-56 pt-24 pb-24 bg-indigo-200 w-full flex justify-center'>
		<div className='feature-extended-wrapper py-18 bg-theme-color bg-opacity-10 max-w-screen-2xl'>
			<div className='container flex-wrap flex justify-center'>
				<div className='w-full md:w-9/12 lg:w-8/12 xl:w-6/12 section-title text-center mb-15'>
					<h2 className='mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold'>Technical skills</h2>
					<p className='text-lg px-2 '>Here you will find a list of the technologies with which I have the most experience.</p>
				</div>

				<div className='flex flex-wrap'>
					<div className='w-full md:w-1/2 lg:w-4/12 p-8 lg:px-3'>
						<div className=' text-6xl mb-[20px] text-theme-color leading-none w-16'>
							<Image src={typescript} alt='' />
						</div>
						<div className='content'>
							<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>TypeScript</h3>
							<p className='text-lg'>3 years experience</p>
							<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
								<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '100%' }}></div>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 lg:w-4/12 p-8 lg:px-3'>
						<div className=' text-6xl mb-[31px] text-theme-color leading-none'>
							<i className='fa-brands fa-react'></i>
						</div>
						<div className='content'>
							<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>React js</h3>
							<p className='text-lg'>Over 3 years experience</p>
							<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
								<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '100%' }}></div>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 lg:w-4/12 p-8 lg:px-3'>
						<div className=' text-6xl mb-[20px] text-theme-color leading-none w-16 '>
							<Image src={next} alt='' />
						</div>
						<div className='content'>
							<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>Next js</h3>
							<p className='text-lg'>1 years experience</p>
							<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
								<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '90%' }}></div>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 lg:w-4/12 p-8 lg:px-3'>
						<div className=' text-6xl mb-8 text-theme-color leading-none'>
							<i className='fa-brands fa-react'></i>
						</div>
						<div className='content'>
							<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>React native</h3>
							<p className='text-lg'>1 years experience</p>
							<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
								<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '70%' }}></div>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 lg:w-4/12 p-8 lg:px-3'>
						<div className=' text-6xl mb-[11px] text-theme-color leading-none w-16'>
							<Image src={node} alt='' />
						</div>
						<div className='content'>
							<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>Node</h3>
							<p className='text-lg'>3 years experience</p>
							<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
								<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '80%' }}></div>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 lg:w-4/12 p-8 lg:px-3'>
						<div className=' text-6xl mb-[21px] text-theme-color leading-none w-16 '>
							<Image src={graph} alt='' />
						</div>
						<div className='content'>
							<h3 className='mb-6 text-xl md:text-2xl lg:text-l xl:text-l 2xl:text-2xl font-semibold'>GraphQL</h3>
							<p className='text-lg'>1 years experience</p>
							<div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
								<div className='bg-blue-600 h-2.5 rounded-full dark:bg-blue-500' style={{ width: '50%' }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)
